import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ChildrenModal from "../../components/admin/chrildren-modal";
import FormMasterData from "../../components/admin/form/form-masterdata";
import TableMasterData from "../../components/admin/table-masterdata";
import LayoutComponent from "../../layout/layout-component";

const TableEducation = () => {
  const token = localStorage.getItem("Token");
  const [visible, setVisible] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    lastPage: 1,
  });
  const [filters, setFilters] = useState("");
  const [data, setData] = useState([]);
  const [dataById_th, setDataById_th] = useState();
  const [dataById_en, setDataById_en] = useState();
  const [statusById, setStatusById] = useState();
  const [rowId, setRowId] = useState();
  const [type, setType] = useState(null);
  const [switchValue, setSwitchValue] = useState(true);
  const [fields, setFields] = useState([
    {
      name: ["education_name_th"],
      value: "",
    },
    {
      name: ["education_name_en"],
      value: "",
    },
    {
      name: ["status"],
      value: "",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, [filters, pagination]);

  const fetchData = () => {
    axios
      .get("http://192.168.10.113:20001/api/v1/education", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          paginate: true,
          active: "",
          page: pagination.currentPage,
          size: pagination.perPage,
          name: filters,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // console.log("data", data);

  const showModal = (type) => {
    setVisible(true);
    setType(type);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleFilterChange = (value) => {
    setFilters(value);
  };

  const pageChange = (newPage) => {
    console.log("newPage", newPage);
    setPagination(newPage);
  };

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  const handleCreate = () => {
    const data_Education = {
      education_name_th: fields[0].value,
      education_name_en: fields[1].value,
    };
    // console.log("push_data", data_education);
    axios
      .post(
        "http://192.168.10.113:20001/api/v1/education/create",
        data_Education,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            active: switchValue,
          },
        }
      )
      .then((response) => {
        fetchData();
        setVisible(false);
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        setVisible(false);
      });
  };

  const handleFinish = (values) => {
    console.log("values", values);
    setFields(values);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: (
        <p className="text-center text-lg">
          คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้
        </p>
      ),
      icon: (
        <p className="text-2xl text-[#EA5455] text-center mb-0">
          <ExclamationCircleOutlined />
        </p>
      ),
      content: (
        <p className="text-center ml-8">
          (หากกดยืนยันแล้วจะไม่สามารถกู้คืนข้อมูลได้อีก)
        </p>
      ),
      okText: "ตกลง",
      cancelText: "ยกเลิก",
      onOk: () => {
        axios(`http://192.168.10.113:20001/api/v1/education/${id}/delete`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            fetchData();
            // console.log(res);
          })
          .catch((error) => {
            console.error("Error editing data:", error);
            setVisible(false);
          });
      },
    });
  };

  const handleChangeStatus = (id, status) => {
    console.log("id", id);
    axios(`http://192.168.10.113:20001/api/v1/education/${id}/active`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log("response_id", response);
      const newData = data.dataLists.map((item) => {
        if (item.id === id) {
          return { ...item, active: status };
        }
        return item;
      });
      setData({ dataLists: newData });
    });
  };

  const handleEdit = (id, type) => {
    console.log("Edit", id);
    axios(`http://192.168.10.113:20001/api/v1/education/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("ResponseGetID", response.data.data);
        const educationData = response.data.data.dataLists;        ;
        setDataById_th({
          education_name_th: educationData?.education_name_th,
        });
        setDataById_en({
          education_name_en: educationData?.education_name_en,
        });
        setStatusById({
          active: educationData?.active,
        });

        setSwitchValue(educationData.active);
        setType(type);
        setVisible(true);
        setRowId(id);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleFormSubmit = () => {
    const data_education = {
      education_name_th: fields[0].value,
      education_name_en: fields[1].value,
    };
    console.log("data_education", data_education);
    axios
      .patch(
        `http://192.168.10.113:20001/api/v1/education/${rowId}/update`,
        data_education,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            active: switchValue,
          },
        }
      )
      .then((response) => {
        fetchData();
        console.log("Response", response);
      });
  };

  return (
    <>
      <LayoutComponent>
        <div className="flex justify-end mt-5 mb-4">
          <Button type="primary" onClick={() => showModal("create")}>
            + เพิ่มระดับการศึกษา
          </Button>
          <ChildrenModal
            visible={visible}
            onCancel={handleCancel}
            nameTitle="เพิ่มระดับการศึกษา"
            onCreate={handleCreate}
            onEdit={handleFormSubmit}
            type={type}
          >
            <FormMasterData
              status={switchValue}
              onSwitchChange={handleSwitchChange}
              type={type}
              data_id_th={dataById_th?.education_name_th}
              data_id_en={dataById_en?.education_name_en}
              statusById={statusById?.active}
              onFinish={handleFinish}
              name_th="education_name_th"
              name_en="education_name_en"
              nameThai="ระดับการศึกษา (ภาษาไทย)"
              nameEng="ระดับการศึกษา (ภาษาอังกฤษ)"
              showPlayer="false"
              data={data}
              // form={form}
            />
          </ChildrenModal>
        </div>
        <div className="bg-white rounded p-5 shadow-2xl">
          <TableMasterData
            onDelete={handleDelete}
            onEdit={handleEdit}
            data_th="education_name_th"
            data_en="education_name_en"
            date="created_at"
            status="active"
            id="id"
            data={data}
            name_thai="ระดับการศึกษา (ภาษาไทย)"
            name_eng="ระดับการศึกษา (ภาษาอังกฤษ)"
            placeholder="ค้นหาระดับการศึกษา"
            showShort={false}
            onChangeStatus={handleChangeStatus}
            onFilterChange={handleFilterChange}
            pagination={pagination}
            setPagination={setPagination}
            onPageChange={pageChange}
          />
        </div>
      </LayoutComponent>
    </>
  );
};

export default TableEducation;
