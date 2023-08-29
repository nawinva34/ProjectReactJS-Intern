import { LoadingOutlined } from "@ant-design/icons";
import { Col, message, Row, Upload } from "antd";
import { useState } from "react";
import { PushImgIcon } from "../../assets/pushimg-icon";
import { PhotoIcon } from "../../assets/photo-icon";
import "../../style/Admin.css";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  return isJpgOrPng;
};

const UploadImgInfo = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {!props.show && (
        <div>
          {loading ? (
            <LoadingOutlined/>
          ) : (
            <PhotoIcon className="transform translate-x-[100px]" />
          )}
        </div>
      )}
      <div className="mt-2">
        <PushImgIcon className="mb-3" />
      </div>
    </div>
  );

  return (
    <>
      <Row>
        <Col span={props.row}>
          <Upload
            name="avatar"
            className="flex justify-center avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            accept="image/png"
          >
            <div
              style={{
                width: props.w,
                height: props.h,
                // border: "1px solid #d9d9d9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#cccccc",
                borderRadius: "6px",
              }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "90%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </div>
          </Upload>
        </Col>
        {props.show && (
          <Col span={6} className="flex items-end">
            <p className="text-xs text-[#696974] m-0 w-[200px]">
              อัปโหลดไฟล์จากอุปกรณ์ของคุณ ภาพควรเป็นไฟล์ png. และไม่มีพื้นหลัง
              ขนาดอย่างน้อย 356px x 400px
            </p>
          </Col>
        )}
        {props.show && (
          <Col span={12} className="flex justify-center items-end bgprofile">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: 180, height: 180 }}
                className="flex justify-center"
              />
            )}
          </Col>
        )}
      </Row>
    </>
  );
};

export default UploadImgInfo;
