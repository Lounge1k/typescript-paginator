import * as React from 'react';
import './App.css';
import Paginator from './components/Paginator.component';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Paginator />
      </div>
    );
  }
}

export default App;
