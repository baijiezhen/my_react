import React from 'react';
import './App.css';
import Life from './demo/Life'
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default App;
