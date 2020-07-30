import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import {LinkContainer} from "react-router-bootstrap";

class HotlineCalls extends Component {
  state = {
    load: true,
    start: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({start: true})
    }, 500);
  }

  render() {
    return (
      <Container fluid className="animate-top">
        <LinkContainer to="/">
          <div className="my-close">CLOSE X</div>
        </LinkContainer>
        <h2 className="heading bg-info text-white left-0 top-0">Hotline Calls</h2>
        <Row style={{paddingTop: "4.5rem"}}>
          <Col md={4}>
            <Card className="mb-4 pb-3">
              <Card.Header as="h5">Measure</Card.Header>
              <Card.Body>
                <Card.Text>
                  The number and result of reports (i.e., referrals) received by the Child and Family
                  Services Agency’s Child Protective Services.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4 pb-3">
              <Card.Header as="h5">How This Is Measured</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>The number of calls received by the Child Abuse and Neglect Reporting Hotline, or the Educational
                    Neglect Triage Unit. A referral may be for one child or for multiple children.</p>
                  <p>The "status" indicates the decision made during the call regarding opening an investigation on the
                    last day of the month.</p>
                  <ul>
                    <li>Awaiting Approval</li>
                    <li>Information &amp; Referral (I&amp;R)</li>
                    <li>Investigations</li>
                    <li>Screened Out</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="pb-3">
              <Card.Header as="h5">Why This Matters</Card.Header>
              <Card.Body>
                <Card.Text>
                  Tracking trends in the reports of abuse and neglect help the Agency to forecast the needs of the
                  Agency. Examples include staffing needs and service needs. This also helps to better understand
                  monthly trends to ensure that the Agency is prepared for seasonal influxes in reporting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            {
              this.state.load &&
              <Spinner className="spinner" animation="border" variant="warning"/>
            }
            {
              this.state.start &&
              <iframe onLoad={() => this.setState({load: false})} frameBorder="0" marginHeight="0"
                      marginWidth="0"
                      title="Data Visualization"
                      allowTransparency="true" allowFullScreen="true" className="tableauViz"
                      style={{
                        display: "block",
                        margin: "0px",
                        padding: "0px",
                        border: "none",
                        width: "100%",
                        height: "827px"
                      }}
                      src="https://dataviz1.dc.gov/t/OCTO/views/HotlineCallsbyReferralType/HotlineCallsbyReferralType?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fdataviz1.dc.gov%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:showAppBanner=false&amp;:display_spinner=no&amp;iframeSizedToWindow=true&amp;:loadOrderID=0"/>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HotlineCalls;
