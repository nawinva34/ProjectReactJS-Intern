import React from "react";
import { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';

const fontSizeArr = [
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
];

const Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik"];
Quill.register(Font, true);

var toolbarOptions = [[{ size: fontSizeArr }],[{font : Font.whitelist}]];

export const modules = {
  toolbar: {
    toolbar: toolbarOptions,
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

export const FormEditorTool = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select
        className="ql-header"
        defaultValue="1"
        style={{ fontFamily: "Montserrat" }}
      >
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
        <option value="5">H5</option>
        <option value="6">H6</option>
      </select>
      <select className="ql-font">
        <option value="Roboto">Roboto</option>
        <option value="Raleway">Raleway</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Lato">Lato</option>
        <option value="Rubik">Rubik</option>
      </select>
      <select className="ql-size">
        <option value="9px">9px</option>
        <option value="10px">10px</option>
        <option value="11px">11px</option>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="22px">22px</option>
        <option value="24px">24px</option>
        <option value="26px">26px</option>
        <option value="28px">28px</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold mr-2" />
      <button className="ql-italic mr-2" />
      <button className="ql-underline" />
      <button className="ql-strike ml-2" />
    </span>
    <span className="ql-formats">
      <select className="ql-align ml-2" />
      <button className="ql-list" value="bullet" />
    </span>
  </div>
);

export default FormEditorTool;
