import React, { useState } from "react";
import {
  Upload,
  Button,
  Col,
  Row,
  Pagination,
  message,
  Dropdown,
  Menu,
  Input,
} from "antd";
import { PenIcon } from "../../assets/pen-icon";
const { Dragger } = Upload;

const UploadVideoImg = () => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState([]);
  const [videoLink, setVideoLink] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  const pageSize = 9;

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const beforeImageUpload = (file) => {
    console.log(file.length);
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/JPEG/PNG file!");
    }
    return isJpgOrPng;
  };

  const beforeVideoUpload = (file) => {
    const isVideo = file.type === "video/mp4";
    if (!isVideo) {
      message.error("You can only upload MP4 file!");
    }
    return isVideo;
  };

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setImages((prevState) => [...prevState, info.file.originFileObj]);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleVideoChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setVideo((prevState) => [...prevState, info.file.originFileObj]);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleDeleteImg = (index) => {
    setImages((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };

  const handleLoadVideo = () => {
    setVideo([videoLink]);
  };

  const menu = (image, index) => (
    <Menu>
      <Menu.Item>
        <a href={URL.createObjectURL(image)} download={image.name}>
          ดาวน์โหลดภาพ
        </a>
      </Menu.Item>
      <Menu.Item onClick={() => handleDeleteImg(index)}>ลบรายการนี้</Menu.Item>
    </Menu>
  );

  console.log(images.length);
  console.log(dropdownIndex)

  return (
    <div className="pl-10 pr-10">
      <p className="text-lg text-[#0066FF] mb-2 pb-2">อัปโหลดภาพ</p>
      <Dragger
        name="image"
        listType="picture"
        className="image-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeImageUpload}
        onChange={handleImageChange}
        accept=".jpg, .jpeg, .png"
      >
        <p className="text-xl pb-6">ลากรูปภาพลงที่นี่หรือคลิกเพื่ออัปโหลด</p>
        <p>(รองรับไฟล์ .jpg .jpeg .png)</p>
      </Dragger>
      {images.length > 0 && (
        <p className="text-lg text-[#0066FF] pt-3">จัดการรูปภาพ</p>
      )}
      <Row gutter={[32, 32]} className="mt-3 mb-5">
        {images
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((image, index) => (
            <Col span={8} key={index}>
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setDropdownIndex(index)}
                onMouseLeave={() => setDropdownIndex(-1)}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="uploaded"
                  className="h-48 rounded-xl w-80 object-cover"
                />
                {dropdownIndex === index && (
                  <Dropdown overlay={menu(image, index)}>
                    <Button type="link" className="absolute right-2 bottom-2">
                      <PenIcon />
                    </Button>
                  </Dropdown>
                )}
              </div>
            </Col>
          ))}
      </Row>
      {images.length > pageSize && (
        <Pagination
          className="flex justify-end"
          current={currentPage}
          onChange={handlePagination}
          pageSize={pageSize}
          total={images.length}
        />
      )}

      <p className="text-lg text-[#0066FF] mb-2 pb-2">อัปโหลดวิดีโอ</p>
      <Dragger
        name="video"
        listType="video"
        className="video-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeVideoUpload}
        onChange={handleVideoChange}
        accept=".mp4"
      >
        <p className="text-xl pb-6">Drop files here or click to upload</p>
        <p>
          (This is just a demo dropzone. Selected files are not actually
          uploaded.)
        </p>
      </Dragger>

      <p className="text-lg text-[#0066FF] mt-6 pb-2">เพิ่มลิงก์</p>
      <Row gutter={32}>
        <Col span={20}>
          <Input
      value={videoLink}
      onChange={(e) => setVideoLink(e.target.value)}
            className="h-[55px]"
          />
        </Col>
        <Col span={4} className="flex items-center">
          <Button type="primary" className="ml-3" onClick={handleLoadVideo}>อัพโหลดวิดีโอ</Button>
        </Col>
      </Row>
      <p className="text-[#C4C4C4] mt-2">ตัวอย่าง http://www.youtube.com/chanatip/Ym3HHa798y7</p>
      {video.length > 0 && (
        <p className="text-lg text-[#0066FF] pt-3">จัดการวิดีโอ</p>
      )}
      <Row gutter={[32, 32]} className="mt-3 mb-5">
        {video
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((video, index) => (
            <Col span={8} key={index}>
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setDropdownIndex(index)}
                onMouseLeave={() => setDropdownIndex(-1)}
              >
                <img
                  src={URL.createObjectURL(video)}
                  alt="uploaded"
                  className="h-48 rounded-xl w-80 object-cover"
                />
                {dropdownIndex === index && (
                  <Dropdown overlay={menu(video, index)}>
                    <Button type="link" className="absolute right-2 bottom-2">
                      <PenIcon />
                    </Button>
                  </Dropdown>
                )}
              </div>
            </Col>
          ))}
      </Row>
      {video.length > pageSize && (
        <Pagination
          current={currentPage}
          onChange={handlePagination}
          pageSize={pageSize}
          total={video.length}
        />
      )}
    </div>
  );
};

export default UploadVideoImg;
