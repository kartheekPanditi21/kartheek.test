/*//import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './navbar';

class App extends Component {
  state={counters:[
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
  ]}
  constructor(props){
    super(props);
  }
  handleIncrement=counter=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleReset=()=>{
   const counters= this.state.counters.map(c=>{
      c.value=0;
      return c;
    });
    this.setState({counters});
  }
  hadleDelete=counterId=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId);
    this.setState({counters});
  }
  render() {
    return (
     <React.Fragment>
<Navbar >

</Navbar>

     </React.Fragment>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';  
import logo from './logo.svg';  
import './App.css';  
import Navbar from './navbar';  
import Counters from './counters';  
class App extends Component {  
state={  
counters : [  
{id:1,value:5},  
{id:2,value:0},  
{id:3,value:4},  
{id:4,value:0},  
]  
}  
constructor(props){  
super(props);  
}  
handleIncrement=counter=>{  
const counters=[...this.state.counters];  
const index=counters.indexOf(counter);  
counters[index]={...counter};  
counters[index].value++;  
this.setState({counters});  
}
handleReset=()=>{  
  const counters= this.state.counters.map(c=>{  
  c.value=0;  
  return c;  
  });  
  this.setState({counters});  
  }  
  handleDelete=counterId=>{  
  const counters=this.state.counters.filter(c=>c.id!== counterId);  
  this.setState({counters});  
  }  
  render() {  
  return (  
  <React.Fragment>  
  <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}></Navbar>  
  <main>  
  <Counters  
  counters={this.state.counters}  
  onReset={this.handleReset}  
  onIncrement={this.handleIncrement}  
  onDelete={this.handleDelete}  
  />  
  </main>  
  </React.Fragment>  
  );  
  }  
  }  
  export default App;