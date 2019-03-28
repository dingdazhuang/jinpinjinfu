import React from 'react';
import './index.scss';

export default class Template extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="case">
        <div className="w1200">
          <div className="title">
            <p>客户案例</p>
            <br />
            <span>全国100+客户案例 每一个都来自金频深度雕琢</span>
          </div>
          <div className="img-box">
          
          </div>
          <div className="free">
            <a href="#">免费申请</a>
          </div>
        </div>
      </div>
    );
  }
}