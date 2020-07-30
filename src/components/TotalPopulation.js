import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HorImgCard from "./utils/HorImgCard";

class TotalPopulation extends Component {

  render() {
    return (
      <Container fluid className="pb-5 pt-4">
        <Row>
          <Col>
            <h3 className="bg-secondary text-white mb-4 p-3 pr-4 pl-4">
              Total Population
            </h3>
            <p>
              CFSA aims to prevent the abuse and neglect of children in the District of Columbia and aims to keep
              children
              safely in their homes whenever possible. As such, CFSA serves children and families in their own home,
              and
              when necessary, by removing a child for placement in foster care.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <HorImgCard text="Total Children and Families Served in Foster Care" />
          </Col>
          <Col>
            <HorImgCard text="Total Children and Families Served in their Homes of Origin"/>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md={4} className="text-center">
            <img width="270" alt="Four pillars" src="/images/pillars.png"/>
          </Col>
          <Col md={8} className="d-flex align-items-center">
            <p>
              While the District has moved ahead with child welfare reform for more than a decade, recent events have
              dramatically accelerated progress. Under new leadership in 2012, CFSA and the local child-serving
              community developed and rallied around a strategic agenda known as the Four Pillars. It is a bold
              offensive to improve outcomes for children, youth, and families at every step in their involvement with
              District child welfare. Each pillar features a values-based foundation, a set of evidence-based
              strategies, and a series of specific outcome targets.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TotalPopulation;
