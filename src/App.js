import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

/*

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

*/

class App extends Component{
  
//컴포넌트가 실행될때 constructor라는 함수가 있다면, 제일먼저 실행되서 초기화를 담당한다.
  
  constructor (props){ 
    super(props);
    this.state = {  // state의 값을 초기화,정의
      subject:{title:'WEB',sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }  
  }
  render(){
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    );
  }
}

export default App;
