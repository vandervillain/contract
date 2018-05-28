import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
  link: string;
  label: string;
  glyph?: string;
  value?: string;
}

export class ActionLink extends React.Component<IProps, object> {

  public render() {
    return (
        <div className="action-link">
        <Link to={this.props.link}>
          <span className={this.getValueClass()}>{this.props.value}</span>
          <span className="label">{this.props.label}</span>
        </Link>
        </div>
    );
  }

  private getValueClass() {
    if (this.props.glyph != null) {
      return "value " + this.props.glyph;
    }
    else {
      return "value";
    }
  }
}