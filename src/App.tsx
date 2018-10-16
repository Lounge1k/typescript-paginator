import * as React from 'react';
import './App.css';
import Paginator from './components/Paginator.component';

class App extends React.Component {
  public tabs:string[] = [
    'tab1',
    'tab2',
    'tab3',
    'tab1',
    'tab2',
    'tab3'
  ]

  public render() {
    return (
      <div className="App">
          <Paginator tabs={this.tabs}/>
      </div>
    );
  }
}

export default App;
