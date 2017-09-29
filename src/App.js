import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Body from './Body'

class App extends Component {
  constructor(props) {
    super()
    this.getHeaderElems = this.getHeaderElems.bind(this)
  }
  
  getHeaderElems() {
    return Object.keys(this.props.data[0])
  }

  render() {  
    return (
      <div>
        <table className="table table-striped table-hover">
          <Header items={this.getHeaderElems()} columnsWidth={this.props.columnWidth}/>
          <Body fields={this.getHeaderElems()} data={this.props.data} /> 
        </table>
      </div>
    );
  }
}

export default App;
