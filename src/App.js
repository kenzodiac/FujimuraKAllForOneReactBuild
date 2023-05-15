// - Kenneth Fujimura
// - Date Revised: 5/15/2023
// - "All For One React Rebuild"
// - This is a project where we rebuilt our "All For One" website of 9 mini challenge pages, but this time in React/Bootstrap/JSX. 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';

import HomeComponent from "./Components/HomeComponent";
import SayHelloComponent from "./Components/SayHelloComponent";
import AddTwoNumbersComponent from './Components/AddTwoNumbersComponent';
import AskingQuestionsComponent from "./Components/AskingQuestionsComponent";
import GreaterOrLessThanComponent from './Components/GreaterOrLessThanComponent';
import MadLibComponent from './Components/MadLibComponent';
import OddOrEvenComponent from './Components/OddOrEvenComponent';
import ReverseItComponent from './Components/ReverseItComponent';
import StudentDirectoryComponent from './Components/StudentDirectoryComponent';
import RestaurantPickerComponent from './Components/RestaurantPickerComponent';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* ~~~~~~~~~~~ Navbar ~~~~~~~~~~~ */}
        <Container fluid>
          <Row className="p-0">
            <Col className="p-0">
              <Navbar expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">All For One React Rebuild</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="SayHello">#1: Say Hello</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="AddTwoNumbers">#2: Add Two Numbers</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="AskingQuestions">#3: Asking Questions</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="GreaterOrLess">#4: Greater or Less Than</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="MadLib">#5: Mad Lib</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="OddOrEven">#6: Odd or Even</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="ReverseIt">#7: Reverse It</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="StudentDirectory">#8: Student Directory</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="RestaurantPicker">#9: Restaurant Picker</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="https://www.linkedin.com/in/kensf">About Me</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* ~~~~~~~~~~~ Staging Area ~~~~~~~~~~~ */}
        <Container fluid className="staging-area">     
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="SayHello" element={<SayHelloComponent/>} />
            <Route path="AddTwoNumbers" element={<AddTwoNumbersComponent/>} />
            <Route path="AskingQuestions" element={<AskingQuestionsComponent/>} />
            <Route path="GreaterOrLess" element={<GreaterOrLessThanComponent/>} />
            <Route path="MadLib" element={<MadLibComponent/>} />
            <Route path="OddOrEven" element={<OddOrEvenComponent/>} />
            <Route path="ReverseIt" element={<ReverseItComponent/>} />
            <Route path="StudentDirectory" element={<StudentDirectoryComponent/>} />
            <Route path="RestaurantPicker" element={<RestaurantPickerComponent/>} />
          </Routes>
        </Container>

        {/* ~~~~~~~~~~~ Footer ~~~~~~~~~~~ */}
        <Container fluid>     
          <Row>
            <Col className="footer">
              By Kenneth Fujimura
            </Col>
          </Row>
        </Container>        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
