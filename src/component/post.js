import React, { Component } from 'react';
import { Button,
          Grid,
          Row,
          Col,
          NavItem,
          Navbar,
          Nav
       } 
       from 'react-bootstrap';



import { connect } from 'react-redux';
import * as actions from './actions';
       

       
class Post extends Component {
  render() {
    return (
      <div>
        <div  style={{ margin: '100px', marginTop: '1px'}}>
          <h3>Create Post</h3>
          <h6>Create your creative content in the form of Text or image to be shared to your multiple connected accounts.</h6>
        </div>
            <Navbar>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Create Post
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Drafts
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Curated Content
                </NavItem>
                <NavItem eventKey={4} href="#">
                  Feed Content
                </NavItem>
              </Nav>
           </Navbar>;
            <Grid style={{ marginTop: '-50px'}}>
              <Row className="show-grid">
                <Col xs={12} md={8}>
                  <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                </Col>
                <Col xs={6} md={2}>
                  <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
                <Col xs={6} md={2}>
                  <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
              </Row>
            </Grid>
      </div>
    );  
  }
}
export default connect(null, actions)(App);