import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';


const CurrentOverStats = (props) => (
  <Container>
      <br/>
      <Row>
        <Col md= {{ size:3, offset:3 }}>
          <Row>
            <Col md="5" xs="4">
              This Over
            </Col>
            <Col sm="1" xs="2" />
            <Col style={{ textAlign:"left" }}>
              {props.runsPerOver.join(" ")}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md= {{ size:3,offset:3 }} sm="12">
          Bowler: {props.bowlerName}
        </Col>
      </Row>
   </Container>
);

const mapStateAsPropsForCurrentOverStats = (state) => ({
    bowlerName : state.currentOverStats.bowlerName,
    runsPerOver  : state.currentOverStats.runsPerOver
});

export const ConnectedCurrentOverStats = connect(mapStateAsPropsForCurrentOverStats)(CurrentOverStats);

