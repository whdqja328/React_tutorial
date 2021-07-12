import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from './components/Content';
import Subject from './components/Subject'; 
import './App.css';

class App extends Component{
  
//컴포넌트가 실행될때 constructor라는 함수가 있다면, 제일먼저 실행되서 초기화를 담당한다.
  
  constructor (props){ 
    super(props);
    this.state = {  // state의 값을 초기화,정의
      mode : 'read',
      subject:{title:'WEB',sub:'World Wide Web!'},
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }  
  }
  render(){
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(event){
            console.log(event)
            event.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.title.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
