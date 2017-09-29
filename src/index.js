import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeGrid from 'react-treegrid';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <TreeGrid
                data={[
                    {
                        Product: 'test1',
                        Price: 5.35,
                        children: [
                            {
                                Product: 'childProduct1',
                                Price: 6.52,
                                children: [
                                    {
                                        Product: 'childProduct1.1',
                                        Price: 5.20
                                    }
                                ]
                            }
                        ]
                    }, {
                        Product: 'test2',
                        Price: 2.50
                    }
                ]}
                columnWidth={{
                    Product: "70%",
                    Price: "30%"
                }}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
