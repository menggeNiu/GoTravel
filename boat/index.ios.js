/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ActivityIndicator
} from 'react-native';

import Root from './app/root';
import Require from './app/require';
import Mock from 'mockjs';
let lunbo = [{
  title: '华东游',
  src: 'http://m.tuniucdn.com/fb2/t1/G1/M00/AB/58/Cii9EVcqwquIK-VPAAXQjXMdmqQAAFRpAMR3PIABdCl060_w450_h300_c1_t0_w500_h280_c1_t0.jpg'
}, {
  title: '玩美春天',
  src: 'http://m.tuniucdn.com/filebroker/cdn/prd/60/c2/60c20cac4dc236fe4f92d080545792e1_w450_h300_c1_t0_w500_h280_c1_t0.jpg'
}]

let shouye = {
  status: 1,
  msg: "获取数据成功！",
  data: {
    ad: [{
      title: "海洋",
      src: "/upload/advert/201602/14565452737018.jpg",
      goto: "{\"type\":\"detail\",\"cate\":\"3\",\"product_id\":\"52003\"}",
      link: "http://101.201.211.41:8088/front/cruise/cruise_detail/52003",
      description: "海洋",
      width: "750",
      height: "304"
    }],
    line_list: [{
      line_name: "日韩航线",
      line_id: "30",
      pic: "https://img.alicdn.com/tps/TB1D0YINXXXXXabXpXXXXXXXXXX-300-300.jpg_120x120.jpg"
    }, {
      line_name: "东南亚航线",
      line_id: "30",
      pic: "https://img.alicdn.com/tps/TB1D0YINXXXXXabXpXXXXXXXXXX-300-300.jpg_120x120.jpg"
    }, {
      line_name: "泰国航线",
      line_id: "30",
      pic: "https://img.alicdn.com/tps/i1/TB1fxXGMpXXXXXtXpXXj64lTXXX-200-200.jpg_120x120.jpg"
    }, {
      line_name: "泰国航线",
      line_id: "30",
      pic: "https://img.alicdn.com/tps/i1/TB1fxXGMpXXXXXtXpXXj64lTXXX-200-200.jpg_120x120.jpg"
    }, {
      line_name: "东南亚航线",
      line_id: "30",
      pic: "https://img.alicdn.com/tps/TB1D0YINXXXXXabXpXXXXXXXXXX-300-300.jpg_120x120.jpg"
    }],
    branch_list: [{
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/fb2/t1/G2/M00/D4/90/Cii-TFgRo06ICKxXAAxmwSTZrrgAADyTgChdgEADGbZ786_w450_h300_c1_t0_w500_h280_c1_t0.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/vnd/02/6a/026a9547ac75f1f53d0393e330364919_w450_h300_c1_t0_w500_h280_c1_t0.jpeg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'https://img.alicdn.com/tps/TB1yPvKMpXXXXaaXpXXXXXXXXXX-200-200.jpg_120x120.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/res/34/93/3493e4a6e378854a61ad7720c108d9dd_w500_h280_c1_t0.png'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/res/fc/3c/fc3ce38aa908e9a10d35996e551f2add_w500_h280_c1_t0.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/res/cc/72/cc72978afd34685f6c0dfe4c592e24fa_w500_h280_c1_t0.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/res/6f/c9/6fc9ec5a5923a827d1d7e2207cdc96ae_w500_h280_c1_t0.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'http://m.tuniucdn.com/filebroker/cdn/res/89/72/8972258faee49376903856fc0feca49f_w500_h280_c1_t0.jpg'
    }, {
      company_id: "3",
      name: "歌诗达邮轮",
      logo: 'https://img.alicdn.com/tps/i1/TB1mQplMpXXXXcpXVXXj64lTXXX-200-200.jpg_120x120.jpg'
    }],
    tuijian_list: [{
      product_id: "52120",
      product_name: "邮轮test001",
      advance_day: "0",
      setoff_date: "1458057600",
      min_price: "36.00",
      max_butler_s: 3,
      thumb: "/upload/album/201603/32c1b12c0c475b1827c1d8dcaaf64668.jpg",
      line_name: "日韩航线",
      brand_name: "歌诗达邮轮",
      ship_name: "大西洋号",
      port_name: "上海",
      att_status: 1
    }, {
      product_id: "52120",
      product_name: "邮轮test001",
      advance_day: "0",
      setoff_date: "1458057600",
      min_price: "36.00",
      max_butler_s: 3,
      thumb: "/upload/album/201603/32c1b12c0c475b1827c1d8dcaaf64668.jpg",
      line_name: "日韩航线",
      brand_name: "歌诗达邮轮",
      ship_name: "大西洋号",
      port_name: "上海",
      att_status: 1
    }]
  }
}

export default class boat extends Component {
  constructor(props) {
      super(props);
      this.state = {
          shouye: shouye,
          lunbo: lunbo
        }
        // this._fetchdata();
    }
    // _fetchdata() {
    //   Require.get('http://101.201.211.41:8088/api/cruisenew/index')
    //     .then((rensponse) => {
    //       this.setState({
    //         shouye: rensponse
    //       })
    //     })
    // Require.get('http://rap.taobao.org/mockjs/8680/app/lunbo?page=all')
    //   .then((rensponse) => {
    //     let data = Mock.mock(rensponse)
    //     console.log(data)
    //     this.setState({
    //       lunbo: data
    //     })
    //   })
    // }
  render() {
    return (
      <View style={styles.container}>
        {this.state.shouye&&this.state.lunbo?<Navigator
        initialRoute={{
          name:'root',
          component:Root
        }}
        configureScene={(route)=>{
        var conf=Navigator.SceneConfigs.HorizontalSwipeJump;
         conf.gestures = null;
           return conf;
        }}
        renderScene={(route,navigator)=>{
          let Component = route.component;
          return(
              <Component {...route.params} navigator={navigator} data={{shouye:this.state.shouye,lunbo:this.state.lunbo}}/>
            )
        }}
      />:<View style={styles.loading}>
            <ActivityIndicator
              size='large'
            />
            <Text style={styles.loadingtext}>加载ing...</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingtext: {
    marginTop: 10
  }
});

AppRegistry.registerComponent('boat', () => boat);