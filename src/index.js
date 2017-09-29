import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeGrid from 'react-treegrid';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.makeData = this.makeData.bind(this)
    this.data = []
  }

  componentWillMount() {
    for (let i = 0; i < 50; i++) {
      this.data = this.data.concat(this.makeData(i))
    }
  }

  makeData(label, maxLevel, level) {
    maxLevel = maxLevel || 49
    level = level || 0

    var obj = {
      Product: `product_${label}.${level}`,
      Qty: Math.random()
    }

    if (level < maxLevel) {
      obj.children = this.makeData(label, maxLevel, level + 1)
    }

    return [obj]
  }


  render() {
    console.log(this.data)
    return (
      <div className="mainApp">
        <h2>This example displays a tree that consists of 50 objects, each 50 levels deep </h2>
        <TreeGrid
          data={this.data}
          columnWidth={{
            Product: "70%",
            Qty: "30%"
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
