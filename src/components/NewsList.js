import React, { Component } from "react";
import './mystyle.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

class NewsList extends Component {
   state = {
      newsList: [], // list is empty in the beginning
      error: false
   };

   componentDidMount() {
       this.getNewsList(); // function call
   }

   getNewsList = async () => {
       try { //try to get data
           const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8866d4d2ef7432fad0e1e1f9325171e");
           if (response.ok) { // ckeck if status code is 200
               const data = await response.json();
               this.setState({ newsList: data.articles});
           } else { this.setState({ error: true }) }
       } catch (e) { //code will jump here if there is a network problem
   this.setState({ error: true });
  }
};

  render() {
  const { newsList, error } = this.state
      return (
          <div className="bg">
            <div className="headline">
                <label>ABC NEWS HEADLINES</label>
            </div>  
            {newsList.length > 0 && newsList.map((user, index) => (
              <div key={index}>
                <Container>
                <Row> 
                    <Col md="12" className="center">  
                              
                        <Card>
                            <Card.Img className="pd" variant="top" src={user.urlToImage} width="50%" />
                            <Card.Body >
                                <Card.Title><h2>{user.author}</h2></Card.Title>
                                <div className="ty">{user.title}</div>
                                <div className="ty2"> 
                                    {user.description}
                                </div>
                                <div>
                                <a href={'https://www.marketwatch.com/story/european-recovery-plays-surge-while-nasdaq-100-futures-slump-after-u-s-senate-passes-1-9-trillion-stimulus-plan-11615196879'}>{user.url}</a>
                                </div>
                                <div className="ty2">
                                <label>Published At - [{user.publishedAt}]</label>
                                </div>
                               
                                
                            </Card.Body>
                        </Card>
                     </Col>
                </Row>
                </Container>       
              </div>
            ))}
            {error && <div className="ty2"> <h4>Sorry, can not display the data</h4></div>}
          </div>
      );
}}

export default NewsList;