import React from 'react';
import './index.scss';

export default class Our extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          imgUrl: './static/img/icon8.png',
          activeUrl: '../../static/img/icon18.png',
          name: '银行'
        }
      ]
    }
  }
  componentDidMount() {

  }
  onMouseEnter = (e) => {
    console.log(e.target)
  };
  onMouseOut = () => {
    console.log('leave')
  };
  render() {
    const { list } = this.state;
    return (
      <div className="our">
        <div className="w1200">
          <div className="title">
            <p>我们服务的对象</p>
            <br />
            <span>如果您是以下金融机构或企业，相信您的企业没有错</span>
          </div>
          <div className="chose clearfix">
            {
              list.map((item, index) => {
                // let img = require(item.imgUrl)
                console.log(item.imgUrl)
                return (
                  <div className="col" key={item.id} onMouseOver={this.onMouseEnter} onMouseOut={this.onMouseOut}>
                    <img src={item.imgUrl} alt="" />
                    <div className="name">{item.name}</div>
                  </div>);
              })
            }
            {/* <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div>
            <div className="col">
              <img src={require('../../static/img/icon8.png')} alt=""/>
              <div className="name">银行</div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}