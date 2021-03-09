import React, { Component } from 'react';
import './App.css';
import { Greet} from './components/Greet';
import Welcome from './components/welcom';
import Hello from "./components/Hello";
import Message from './components/Message';
import Counter from './components/Counter';
import UserList from './components/FetchData';
import NewsList from './components/NewsList';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {

  render(){
    return(
      <div className="App">
        {/* <FunctionClick/>
        <ClassClick/>
        <EventBind/> */}
        <NewsList/>
        {/* <Counter/> */}
        {/* <UserList/> */}
        {/* <Message></Message> */}
         {/* <Greet name="Bruce" heroName="Batman">
           <p>This is childern props</p>
         </Greet>
         <Greet name="Clark"  heroName="SuperMan"/>
         <Greet name="Jony" heroName="Sharkboy"/>  */}
        {/* <Welcome name="RAM" heroName="HERO"/>
        <Welcome name="SHEETHA" heroName="HEROIN"/>
        <Welcome name="LAKSHMAN" heroName="BROTHER "/> */}
        {/* <Hello/> */}
      </div>
    );
  }
}



export default App;
