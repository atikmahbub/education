import React from "react";
import Tabs from "react-bootstrap/Tabs";
import { Row, Col, Nav, Tab } from "react-bootstrap";

const TabPage = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="tab-response">
            <Nav.Item>
              <Nav.Link eventKey="first">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Online</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Worksheets</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">All</Tab.Pane>
            <Tab.Pane eventKey="second">Online</Tab.Pane>
            <Tab.Pane eventKey="third">Tests</Tab.Pane>
            <Tab.Pane eventKey="fourth">Worksheets</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TabPage;
