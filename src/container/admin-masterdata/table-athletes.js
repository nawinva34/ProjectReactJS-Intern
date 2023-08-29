import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChildrenModal from "../../components/admin/chrildren-modal";
import FormMasterData from "../../components/admin/form/form-masterdata";
import TableMasterData from "../../components/admin/table-masterdata";
import LayoutComponent from "../../layout/layout-component";

const TableAthletes = () => {
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
  const [dataById_codename, setDataById_codename] = useState();
  const [position, setPosition] = useState();
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
    {
      name: ["position_codename_en"],
      value: "",
    },
    {
      name: ["position"],
      value: "",
    },
  ]);

  console.log("fields", fields);

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
          position_type: "ATHLETE",
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
    const data_Position = {
      position_name_th: fields[1].value,
      position_name_en: fields[2].value,
      position_codename_en: fields[3].value,
    };
    console.log("data", data_Position);

    axios
      .post(
        "http://192.168.10.113:20001/api/v1/position/create",
        data_Position,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            position_type: "ATHLETE",
            position: fields[0].value,
            active: switchValue,
          },
        }
      )
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
        const position_Data = response.data.data.dataLists;
        let positionCodeName = '';
        switch (position_Data.position) {
          case 1:
            positionCodeName = 'GOALKEEPER';
            break;
          case 2:
            positionCodeName = 'DEFENDER';
            break;
          case 3:
            positionCodeName = 'MIDFIELDER';
            break;
          case 4:
            positionCodeName = 'FORWARD';
            break;
          default:
            break;
        }
        setDataById_th({
          position_name_th: position_Data?.position_name_th,
        });
        setDataById_en({
          position_name_en: position_Data?.position_name_en,
        });
        setDataById_codename({
          position_codename_en: position_Data?.position_codename_en,
        });
        setPosition({
          position: positionCodeName,
        })
        setStatusById({
          active: position_Data?.active,
        });
        setSwitchValue(position_Data.active);
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
      position_name_th: fields[1].value,
      position_name_en: fields[2].value,
      position_codename_en: fields[3].value
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
            position: fields[0].value,
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
            + เพิ่มตำแหน่งนักกีฬา
          </Button>
          <ChildrenModal
            visible={visible}
            onCancel={handleCancel}
            onCreate={handleCreate}
            nameTitle="เพิ่มตำแหน่งนักกีฬา"
            onEdit={handleFormSubmit}
            type={type}
          >
            <FormMasterData
              status={switchValue}
              onSwitchChange={handleSwitchChange}
              type={type}
              data_id_th={dataById_th?.position_name_th}
              data_id_en={dataById_en?.position_name_en}
              statusById={statusById?.active}
              data_id_codename={dataById_codename?.position_codename_en}
              position_id={position?.position}
              onFinish={handleFinish}
              name_th="position_name_th"
              name_en="position_name_en"
              name_mid="position_codename_en"
              position="position"
              nameThai="ตำแหน่งนักกีฬา (ภาษาไทย)"
              nameEng="ตำแหน่งนักกีฬา (ภาษาอังกฤษ)"
              data={data}
            />
          </ChildrenModal>
        </div>
        <div className="bg-white rounded p-5 shadow-2xl">
          <TableMasterData
            onDelete={handleDelete}
            onEdit={handleEdit}
            data_th="position_name_th"
            data_en="position_name_en"
            data_mid="position_codename_en"
            date="created_at"
            status="active"
            id="id"
            data={data}
            name_thai="ตำแหน่งนักกีฬา (ภาษาไทย)"
            name_eng="ตำแหน่งนักกีฬา (ภาษาอังกฤษ)"
            placeholder="ค้นหาตำแหน่งนักกีฬา "
            showShort={true}
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

export default TableAthletes;
