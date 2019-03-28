import React from 'react';
import './index.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <div className="w1200">
          <a href="#" className="logo">
            <img src={require("../../static/img/logo.png")} alt="" />
          </a>
          <ul className="nav">
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li><a href="#">产品</a></li>
            <li><a href="#">解决方案</a></li>
            <li><a href="#">渠道产品</a></li>
            <li><a href="#">活动</a></li>
            <li><a href="#">帮助</a></li>
            <li><a href="#">合作</a></li>
            <li><a href="#">文档</a></li>
          </ul>
          <ul className="login-box">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;