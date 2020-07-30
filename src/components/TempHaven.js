import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HorImgCard from "./utils/HorImgCard";

class TempHaven extends Component {

  render() {
    return (
      <Container className="pt-5 pb-5">
        <Row>
          <Col>
            <h3 className="bg-pink text-white mb-4 p-3 pr-4 pl-4">
              Temporary Safe Haven
            </h3>
            <p>
              Foster care is a good interim place for children to live while we work to get them back to a permanent
              home as quickly as possible. Planning for a safe exit begins as soon as a child enters the system.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <HorImgCard text="Entries and Re-Entries"/>
          </Col>
          <Col>
            <HorImgCard text="Foster Care Demographics"/>
          </Col>
          <Col>
            <HorImgCard text="Placement of Children in Foster Care"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TempHaven;
