import * as React from 'react';

export class Layout extends React.Component {

  public render() {
    return (
      <div className="App">
        <div className="left-menu">
          <span className="expand">expand</span>
        </div>
        <div className="content">
          <span className="expand">expand</span>
          <div className="row">
            <div className="header">
              <span className="text">Header</span>
            </div>
          </div>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
