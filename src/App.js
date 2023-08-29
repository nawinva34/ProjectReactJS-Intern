import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "typeface-montserrat";
import "./style/App.css";
import SignIn from "./container/sso/singin";
import SignUp from "./container/sso/signup";
import CreatePassword from "./container/sso/create-password";
import SuccessSignIn from "./container/sso/success-sIgnin";
import ResetPass_Email from "./container/sso/resetpass-email";
import ResetPass_Password from "./container/sso/resetpass-password";
import Dashboard from "./container/admin-athletes/dashboard";
import TabContainer from "./container/admin-athletes/tab-container";
import TableRelation from "./container/admin-masterdata/table-relation";
import TableEducation from "./container/admin-masterdata/table-education";
import TableAthletes from "./container/admin-masterdata/table-athletes";
import TableDepartmentStaff from "./container/admin-masterdata/table-departmentstaff";
import TablePositionStaff from "./container/admin-masterdata/table-positionstaff";


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat,Kanit',
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createpassword" element={<CreatePassword />} />
          <Route path="/successsignin" element={<SuccessSignIn />} />
          <Route path="/resetemailpass" element={<ResetPass_Email />} />
          <Route path="/resetpass" element={<ResetPass_Password />} />
          <Route path="/athletes" element={<Dashboard />} />
          <Route path="/athletes/add" element={<TabContainer />} />
          <Route path="/athletes/edit" element={<TabContainer />} />
          <Route path="/staff" element={<Dashboard />} />
          <Route path="/staff/add" element={<TabContainer />} />
          <Route path="/staff/edit" element={<TabContainer />} />
          <Route path="/tablerelation" element={<TableRelation />} />
          <Route path="/tableeducation" element={<TableEducation />} />
          <Route path="/tableathletes" element={<TableAthletes />} />
          <Route path="/tabledepartmentstaff" element={<TableDepartmentStaff />} />
          <Route path="/tablepositionstaff" element={<TablePositionStaff />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
