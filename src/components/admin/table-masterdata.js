import {
  Switch,
  Dropdown,
  Space,
  Table,
  Button,
  Input,
  Menu,
} from "antd";
import { MoreOutlined, FilterOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";

const menu = [
  {
    key: "1",
    label: "ทั้งหมด",
    filter: 'all',
  },
  {
    key: "2",
    label: "เปิดใช้งาน",
    filter: true,
  },
  {
    key: "3",
    label: "ปิดใช้งาน",
    filter: false,
  },
];

const TableMasterData = (props) => {
  // console.log("data",props.data);
  const [filterValue, setFilterValue] = useState("");
  const [filter, setFilter] = useState('all');
  const [data, setData] = useState(props.data.dataLists);

  function handleMenuClick(e) {
    setFilter(e.key);
  }

  console.log("datatable",data)
  // console.log('no',data?.length)
  
  useEffect(() => {
    switch (filter) {
      case '1':
        setData(props.data.dataLists);
        break;
      case '2':
        setData(props.data.dataLists.filter(item => item.active));
        break;
      case '3':
        setData(props.data.dataLists.filter(item => !item.active));
        break;
      default:
        setData(props.data.dataLists);
        break;
    }
  }, [filter, props.data.dataLists]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    props.onFilterChange(value);
  };

  const handlePageChange = (page, pageSize) => {
    // console.log('Current page:', page);
    const newPage = {
      ...props.pagination,
      currentPage: page,
      perPage: pageSize,
    };
    props.onPageChange(newPage);
  }

  const columns = [
    {
      title: props.name_thai,
      dataIndex: props.data_th,
      key: props.data_th,
      align: "center",
    },
    {
      title: props.name_eng,
      dataIndex: props.data_en,
      key: props.data_en,
      align: "center",
    },
    {
      title: "อักษรย่อ (ภาษาอังกฤษ)",
      dataIndex: props.data_mid,
      key: props.data_mid,
      align: "center",
    },
    {
      title: "วันที่สร้าง",
      dataIndex: props.date,
      key: props.date,
      align: "center",
      render: (date) => moment(date).format("YYYY-MM-DD"),
    },
    {
      title: "สถานะการใช้งาน",
      dataIndex: props.status,
      key: props.id,
      align: "center",
      render: (status, record) => {
        // console.log("record", record.status, "status", record.key);
        return (
          <div className="flex justify-center">
            <Switch
              style={{
                backgroundColor: status ? "#3DD598" : "lightgrey",
              }}
              checked={status}
              onChange={() => props.onChangeStatus(record.id, !status)}
            />
            <p className="pl-2">{status ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
          </div>
        );
      },
    },
    {
      title: "การจัดการ",
      dataIndex: "operation",
      key: props.id,
      align: "center",
      render: (id, record) => {
        // console.log("record",id,record);
        return (
          <Space size="middle">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item
                    key="1"
                    onClick={() => props.onEdit(record.id, "edit")}
                  >
                    แก้ไขข้อมูล
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => props.onDelete(record.id)}>
                    ลบรายการนี้
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
              trigger={["click"]}
            >
              <p className="m-0">
                <MoreOutlined className="text-xl" />
              </p>
            </Dropdown>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <div className="flex mt-5 mb-5">
          <Input
            placeholder={props.placeholder}
            className="h-10 mr-5"
            value={filterValue}
            onChange={handleFilterChange}
            allowClear
            enterButton
          />
          <Space size="middle">
            <Dropdown
              overlay={
                <Menu onClick={handleMenuClick}>
                  {menu.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomRight"
              trigger={["click"]}
            >
              <Button className="h-10">
                <FilterOutlined style={{ fontSize: "24px" }} />
              </Button>
            </Dropdown>
          </Space>
        </div>
        <Table
          columns={
            props.showShort
              ? columns
              : columns.filter(
                  (column) => column.title !== "อักษรย่อ (ภาษาอังกฤษ)"
                )
          }
          dataSource={data}
          rowKey={(record) => record.id}
          onChange={props.onChange}
          pagination={{
            total: data?.length,
            showSizeChanger: true,
            onChange: handlePageChange,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} จาก ${total} รายการ`,
            className: "my-pagination",
          }}
        />
      </div>
    </>
  );
};

export default TableMasterData;
