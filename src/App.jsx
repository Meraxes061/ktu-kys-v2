import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import { DashBoard, Dropdown, DropdownHeader, DropdownContent, DropdownItem, DropdownSubText, DropdownDivider } from './components';

function App() {
  return (
    <React.Fragment>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col my-auto d-flex justify-content-center">
            <Login />
          </div>
        </div>
      </div>
      <DashBoard />

      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />

      <Dropdown>
        <DropdownHeader></DropdownHeader>
        <DropdownContent>
          <DropdownSubText></DropdownSubText>
          <DropdownItem></DropdownItem>
          <DropdownItem></DropdownItem>
          <DropdownItem></DropdownItem>
          <DropdownDivider />
          <DropdownSubText></DropdownSubText>
          <DropdownItem></DropdownItem>
          <DropdownItem></DropdownItem>
          <DropdownItem></DropdownItem>
        </DropdownContent>
      </Dropdown>
    </React.Fragment>
  );
}

export default App;
