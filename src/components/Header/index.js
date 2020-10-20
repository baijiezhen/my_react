import React from 'react'
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less'
import axios from '../../axios'
import { connect } from 'react-redux'
 class Header extends React.Component{
    state = {
        userName:'河畔以及'
    }
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            console.log(res)
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
     render() {
        const { menuName } = this.props;
        return <div  className="header">
            <Row  className="header-top"><Col span={24} >
                <span>欢迎和那以及</span><a href="#">退出</a>
            </Col></Row>
            <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
                    {menuName || '首页'}
                </Col>
                <Col span={20} className="weather">
                    <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
            </Col>
            </Row>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header)