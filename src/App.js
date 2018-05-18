import React, { Component } from 'react';
import {
          Grid,
          Row,
          Col,        
       } 
       from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div  style={{ marginLeft: '190px', marginTop: '1px'}}>
          <h3>Create Post</h3>
          <h6>Create your creative content in the form of Text or image to be shared to your multiple connected accounts.</h6>
        </div>
                <br /><br />
            <div className="container">
                <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">Create Post</a></li>
                <li><a data-toggle="tab" href="#menu1">Drafts</a></li>
                <li><a data-toggle="tab" href="#menu2">Curated Content</a></li>
                <li><a data-toggle="tab" href="#menu3">Feed Content</a></li>
              </ul>
            </div>
            <br /><br /><br />
            <Grid style={{ marginTop: '-50px'}}>
              <Row className="show-grid">
                <Col xs={10} md={6}>
                      <div className="box">
                      As per Twitter’s new policy, you’ll be able to select only one Twitter account per post. This change does not affect other social media platforms.<a href="https://blog.twitter.com/developer/en_us/topics/tips/2018/automation-and-the-use-of-multiple-accounts.html">Learn More</a>
                      </div>
                      <br />
                    <textarea rows="16" cols="70">
                        At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.                       
                    </textarea>
                </Col>
                <Col xs={12} md={3}>
                <div className="boxVertical">
                  <div ClassName="container">   
                  <div className="tab">
                    <button className="tablinks" onclick="op(event, '')">By Groups</button>
                    <button className="tablinks" onclick="op(event, '')">By Clients</button>
                  </div>
                    <div className="checkbox">
                       <label><input type="checkbox" value="" color="green"/>Select Account</label>
                       <form>
                       <input type="text" placeholder="Search Group" name="search" className="navbar-form navbar-left"/>
                    </form>
                        <form>
                              <div>
                                <label><input type="checkbox" value="" />Animesh Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Hardik Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Chanan Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Sachin Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Rutul Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Sandeep Kumar Group</label>
                              </div>
                          </form>
                    </div>
                  </div>
                </div>
                </Col>
                <Col xs={12} md={3}>
                <div className="boxVertical">
                  <div ClassName="container">   
                    <div className="checkbox">
                       <label><input type="checkbox" value="" color="green"/>Select Account</label>
                       <form>
                       <input type="text" placeholder="Select Accounts" name="search" className="navbar-form navbar-left"/>
                       <input type="text" placeholder="Filter by Social Media" name="search" className="navbar-form navbar-left"/>
                     </form>

                        <form>
                              <div>
                                <label><input type="checkbox" value="" />
                                
                                Animesh Group
                                </label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Hardik Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Chanan Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Sachin Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Rutul Group</label>
                              </div>
                              <div>
                                <label><input type="checkbox" value="" />Sandeep Kumar Group</label>
                              </div>
                          </form>

                    </div>
                  </div>
                </div>
                </Col>
              </Row>
            </Grid>
      </div>
    );  
  }
}

export default App;
