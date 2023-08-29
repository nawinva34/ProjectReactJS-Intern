import StatusBoard from "../../components/admin/status-board";
import { Button, Layout } from "antd";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import TablePlayerList from "../../components/admin/table-list";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LayoutComponent from "../../layout/layout-component";
import axios from "axios";

const Dashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    lastPage: 1,
  });
  const [filters, setFilters] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const checkPath = () => {
    if (location.pathname === "/athletes") {
      navigate("/athletes/add");
    } else {
      navigate("/staff/add");
    }
  };

  console.log("dataList", data);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    axios(`http://192.168.10.113:20001/api/v1/personnel`, {
      method: "GET",
    })
      .then((response) => {
        console.log("res1", response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])

  // useEffect(() => {
  //   fetchData();
  // }, [filters, pagination]);

  // const fetchData = () => {
  //   console.log("fetchData");
  //   axios(`http://192.168.10.113:20001/api/v1/personnel`, {
  //     method: "GET",
  //     // params: {
  //     //   paginate: true,
  //     //   active: "",
  //     //   page: pagination.currentPage,
  //     //   size: pagination.perPage,
  //     //   name: filters,
  //     // },
  //   })
  //     .then((response) => {
  //       console.log("res1", response);
  //       setData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  return (
    <>
      <LayoutComponent>
        <p className="text-[#5E5873] text-xl">
          {location.pathname.includes("/athletes")
            ? "นักกีฬาทั้งหมด"
            : "บุคลากรทั้งหมด"}
        </p>
        <div className="rounded mb-4">
          <StatusBoard type={location.pathname.includes("/athletes")} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button type="primary">{selectedRowKeys.length}</Button>
            <Button type="link" className="flex text-[#B9B9C3] mb-2">
              <DownloadOutlined className="text-2xl" />
              <p className="mt-[10px] ml-1 mr-[-15px]">ดาวน์โหลด</p>
            </Button>
            <Button type="link" className="flex text-[#B9B9C3] mb-2">
              <DeleteOutlined className="text-2xl" />
              <p className="mt-[10px] ml-1">ลบรายการที่เลือก</p>
            </Button>
          </div>
          <Button
            type="primary"
            className="h-[30px] w-[113px]"
            onClick={checkPath}
          >
            {location.pathname.includes("/athletes")
              ? "เพิ่มนักกีฬา"
              : "เพิ่มบุคลากร"}
          </Button>
        </div>
        <div className="bg-white rounded p-1 mt-2 shadow-2xl">
          <TablePlayerList
            code_personnel="code_personnel"
            firstname_en="firstname_en"
            lastname_en="lastname_en"
            citizen_id="citizen_id"
            data={data}
            rowSelection={rowSelection}
            type={location.pathname.includes("/athletes")}
          />
        </div>
      </LayoutComponent>
    </>
  );
};

export default Dashboard;
