import React from 'react';
import './index.scss';

export default class Template extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="newState">
        <div className="w1200">
          <div className="title">
            <p>新鲜动态</p>
            <br/>
            <span>提供最新金融资讯 全面了解产品信息</span>
          </div>
          <div className="main clearfix">
            <div className="main-left">
              <div className="top">
                <div className="l-title">行业资讯</div>
                <div className="more">
                  <a href="">更多 &gt;</a>
                </div>
              </div>
              <div className="content">
                <div className="infos">
                  <img src="" alt=""/>
                  <div className="details-box">
                    <div>金融欺诈预防与侦查的人工智能</div>
                    <div className="des">
                  金频金服深度分析目前金融欺诈方式及有效的反欺诈解决方案，金频金服根据业务场景需要进行深度开发诞生金频及有效的反欺诈解决方案，金频金服根据业务场景需要进行深度开发诞生金频
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right"></div>
          </div>
        </div>
      </div>
    );
  }
}