import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../style/ToolQuill.css";
import React, { useState } from "react";
// import FormEditorToolBar, { modules, formats } from "./form-editor-toolbar";

const FormHistory = ({type}) => {
  const [contentThai, setContentThai] = useState("");
  const [contentEng, setContentEng] = useState("");

  const handleChangeThai = (value) => {
    setContentThai(value);
  };

  const handleChangeEng = (value) => {
    setContentEng(value);
  };

  return (
    <div className="pl-10 pr-10">
      <p className="text-lg text-[#0066FF] mb-2">{type ? "ประวัตินักกีฬา" : "ประวัติบุคลากร"}</p>
      <p className="text-[#44444F] text-sm mb-1">ประวัติ (ภาษาไทย)</p>
      
  {/* <FormEditorToolBar /> */}
      <ReactQuill
      value={contentThai}
      onChange={handleChangeThai}
      />
      <p className="text-[#44444F] text-sm mb-1 mt-3">ประวัติ (ภาษาอังกฤษ)</p>
      {/* <FormEditorToolBar /> */}
      <ReactQuill
        // key={2}
        // style={{ borderRadius: "10px" }}
        value={contentEng}
        onChange={handleChangeEng}
        // modules={modules}
        // formats={formats}
        // theme="snow"
        // id="quill-eng"
      />
    </div>
  );
};

export default FormHistory;
