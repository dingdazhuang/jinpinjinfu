import React from 'react';
import './index.scss';

export default class Template extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="core">
        <div className="title">
          <p>金频金服核心产品</p>
          <br />
          <span>金频金服旗下核心产品版块涉及金融</span>
        </div>
      </div>
    );
  }
}