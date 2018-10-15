import * as React from 'react';

import './Paginator.component.css';

interface IMyState {
    activeElement: number
}

class Paginator extends React.Component<{},IMyState> {

    private list:string[] = [
        'tab1',
        'tab2',
        'tab3'
    ];

    constructor(props:any) {
        super(props);
        this.state = {
            activeElement: 0
        }
    }

   public render() {
        return(
            <div className="paginator">
                <div className="row ">
                    <div className="col-1 ">
                        <button>{'<'}</button>
                    </div>
                    <div className="col-fill ">
                        <div className="row">
                            {this.list.map((tabName:string, index:number) => {
                               return(
                                    <div key={index} className="col-fill">
                                        <button className={this.state.activeElement === index ? 'btn-secondary' : ''}>{tabName}</button>
                                    </div>
                               )
                            })}
                        </div>
                    </div>
                    <div className="col-1 ">
                        <button>{'>'}</button>
                    </div>
                </div>
            </div>
        )
   }
}

export default Paginator;

