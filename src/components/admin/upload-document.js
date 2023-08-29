import React, { useState } from "react";
import { Upload, message, Button, Checkbox } from "antd";
import "../../style/AntdCustom.css";

const UploadDocument = ({ onUploadSuccess, textTitle, onFileChange, documentType }) => {

  const [fileList, setFileList] = useState([]);
  const handleChange = (info) => {
    if (documentType === "OtherUpload") {
      setFileList([...fileList, ...info.fileList]);
    } else {
      let newFileList = [...info.fileList];
      newFileList = newFileList.slice(-1);
      setFileList(newFileList);
    }
    if (info.file.status === "done") {
      onUploadSuccess(info.file);
      onFileChange(info.file);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

//   console.log(fileList)

  return (
    <div className="mb-5">
      <p className="text-lg text-[#0066FF] pb-2 pt-3">{textTitle}</p>
      <Upload.Dragger
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        accept="*"
        onChange={handleChange}
        showUploadList={false}
        fileList={fileList}
      >
        <p className="text-xl mb-4">Drop file here or click to upload</p>
        <p>
          (This is just a demo dropzone. Selected files are not actually
          uploaded.)
        </p>
      </Upload.Dragger>
    </div>
  );
};

export default UploadDocument;
