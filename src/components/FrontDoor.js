import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HorImgCard from "./utils/HorImgCard";

class FrontDoor extends Component {

  render() {
    return (
      <Container fluid className="pb-5 pt-5">
        <Row>
          <Col>
            <h3 className="bg-info text-white mb-4 p-3 pr-4 pl-4">
              Front Door
            </h3>
            <p>
              Children deserve to grow up with their families and should be removed from their birth homes only as the
              last resort. Child welfare gets involved only when families cannot or will not take care of children
              themselves. When we must remove a child for safety, we seek to place with relatives first.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <HorImgCard text="Hotline calls" />
          </Col>
          <Col>
            <HorImgCard text="Investigations" />
          </Col>
          <Col>
            <HorImgCard text="Special Investigation Types" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <HorImgCard text="Demographics of Children Served in Their Home" />
          </Col>
          <Col>
            <HorImgCard text="Open and Closed In-Home Cases" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default FrontDoor;
