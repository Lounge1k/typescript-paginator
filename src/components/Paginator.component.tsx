import * as React from 'react';

import './Paginator.component.css';

interface IProps {
  tabs: string[]
}

interface IState {
  activeElement: number
}

class Paginator extends React.Component<IProps, IState> {

  public readonly state: IState = {
    activeElement: 0
  }

  public render() {
    return (
      <div className="paginator">
        <div className="row flex-edges child-borders">
          <div className="col-1 col">
            {/* <button onClick={this.prevTab}></button> */}
            <span className="border border-primary">{'<'}</span>
          </div>
          <div className="col-fill col">
            <div className="row">
              {this.props.tabs.map((tabName: string, index: number) => {
                return (
                  <div 
                    key={index}
                    className="col-fill col">
                    <button
                      onClick={this.selectTab(index)}
                      className={this.state.activeElement === index ? 'btn-secondary' : ''}>{tabName}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-1 col">
            {/* <button onClick={this.nextTab}></button> */}
            <span className="border border-primary">{'>'}</span>
          </div>
        </div>
      </div>
    )
  }

  private selectTab = (index: number) => {
    return () => this.setState({
      activeElement: index
    })
  }

  // private nextTab = () => {
  //   this.setState({
  //     activeElement: this.state.activeElement < this.props.tabs.length - 1 ? ++this.state.activeElement : 0
  //   })
  // }

  // private prevTab = () => {
  //   this.setState({
  //     activeElement: this.state.activeElement > 0 ? --this.state.activeElement : this.props.tabs.length - 1
  //   })
  // }
}

export default Paginator;

