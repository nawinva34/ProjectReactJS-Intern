import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChildrenModal from "../../components/admin/chrildren-modal";
import FormMasterData from "../../components/admin/form/form-masterdata";
import TableMasterData from "../../components/admin/table-masterdata";
import LayoutComponent from "../../layout/layout-component";

const TablePositionStaff = () => {
  const token = localStorage.getItem("Token");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    lastPage: 1,
  });
  const [filters, setFilters] = useState("");
  const [dataById_th, setDataById_th] = useState();
  const [dataById_en, setDataById_en] = useState();
  const [statusById, setStatusById] = useState();
  const [rowId, setRowId] = useState();
  const [type, setType] = useState(null);
  const [switchValue, setSwitchValue] = useState(true);
  const [fields, setFields] = useState([
    {
      name: ["position_name_th"],
      value: "",
    },
    {
      name: ["position_name_en"],
      value: "",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, [filters, pagination]);

  const fetchData = () => {
    axios
      .get("http://192.168.10.113:20001/api/v1/position", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          position_type: "STAFF",
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

  const handleFilterChange = (value) => {
    console.log("Filter", value);
    setFilters(value);
  };

  const pageChange = (newPage) => {
    console.log("newPage", newPage);
    setPagination(newPage);
  };

  const showModal = (type) => {
    setVisible(true);
    setType(type);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  const handleCreate = () => {
    const dataStaff = {
      position_name_th: fields[0].value,
      position_name_en: fields[1].value,
    };

    axios
      .post("http://192.168.10.113:20001/api/v1/position/create", dataStaff, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          position_type: "STAFF",
          active: switchValue,
        },
      })
      .then((response) => {
        console.log(response);
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

  const handleChangeStatus = (id, status) => {
    console.log("id", id);
    axios(`http://192.168.10.113:20001/api/v1/position/${id}/active`, {
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

  const handleDelete = (id) => {
    console.log("handleDelete", id);
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
        axios(`http://192.168.10.113:20001/api/v1/position/${id}/delete`, {
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

  const handleEdit = (id, type) => {
    console.log("Edit", id);
    axios(`http://192.168.10.113:20001/api/v1/position/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("ResponseGetID", response.data.data);
        const educationData = response.data.data.dataLists;
        setDataById_th({
          position_name_th: educationData?.position_name_th,
        });
        setDataById_en({
          position_name_en: educationData?.position_name_en,
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
    const data_position = {
      position_name_th: fields[0].value,
      position_name_en: fields[1].value,
    };
    console.log("data_position", data_position);
    axios
      .patch(
        `http://192.168.10.113:20001/api/v1/position/${rowId}/update`,
        data_position,
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
            + เพิ่มตำแหน่งบุคลากร
          </Button>
          <ChildrenModal
            visible={visible}
            onCancel={handleCancel}
            nameTitle="เพิ่มตำแหน่งบุคลากร"
            onCreate={handleCreate}
            onEdit={handleFormSubmit}
            type={type}
          >
            <FormMasterData
              status={switchValue}
              onSwitchChange={handleSwitchChange}
              type={type}
              data={data}
              data_id_th={dataById_th?.position_name_th}
              data_id_en={dataById_en?.position_name_en}
              statusById={statusById?.active}
              onFinish={handleFinish}
              name_th="position_name_th"
              name_en="position_name_en"
              nameThai="ตำแหน่งบุคลากร (ภาษาไทย)"
              nameEng="ตำแหน่งบุคลากร (ภาษาอังกฤษ)"
              showPlayer="false"
            />
          </ChildrenModal>
        </div>
        <div className="bg-white rounded p-5 shadow-2xl">
          <TableMasterData
            onDelete={handleDelete}
            onEdit={handleEdit}
            id="id"
            data_th="position_name_th"
            data_en="position_name_en"
            date="created_at"
            status="active"
            data={data}
            name_thai="ตำแหน่งบุคลากร (ภาษาไทย)"
            name_eng="ตำแหน่งบุคลากร (ภาษาอังกฤษ)"
            placeholder="ค้นหาตำแหน่งบุคลากร "
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

export default TablePositionStaff;
