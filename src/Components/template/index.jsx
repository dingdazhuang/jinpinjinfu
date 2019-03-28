import React from 'react';
import './index.scss';

export default class Template extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <div className="w1200"></div>
      </div>
    );
  }
}