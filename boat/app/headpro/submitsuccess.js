import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Seeorder from '../../app/headpro/seeorder';
let width = Dimensions.get('window').width;
class Submitsuccess extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	back() {
		this.props.navigator.pop()
	}
	goorder() {
		this.props.navigator.push({
			name: '查看订单',
			component: Seeorder
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.headbox}>
					<TouchableOpacity onPress={this.back.bind(this)}>
						<Icon
							name='chevron-left'
							size={22}
							color='#ff9600'
							style={styles.goback}
						/>
					</TouchableOpacity>
					<Text style={styles.headtext}>提交成功</Text>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb'}}>
					<View style={styles.up}>
						<View style={{flexDirection:'row',alignItems:'center',marginBottom:14}}>
							<Image
								source={require('../../img/waitingblue.png')}
								style={styles.waitingblue}
							/>
							<Image
								source={require('../../img/waiting.png')}
								style={styles.waiting}
							/>
							<Image
								source={require('../../img/waitinggray.png')}
								style={styles.waitinggray}
							/>
							<Image
								source={require('../../img/waiting.png')}
								style={styles.waiting}
							/>
							<Image
								source={require('../../img/waitinggray.png')}
								style={styles.waitinggray}
							/>
						</View>
						<View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.6867}}>
							<Text style={{fontSize:12,color:'#86c2f3'}}>提交订单</Text>
							<Text style={{fontSize:12}}>订单确认</Text>
							<Text style={{fontSize:12}}>订单支付</Text>
						</View>
					</View>
					<View style={styles.center}>
						<View style={{flexDirection:'row',justifyContent:'center',height:129}}>
							<View>
								<Image
									source={require('../../img/done.png')}
									style={styles.done}
									resizeMode='contain'
								/>
							</View>
							<View style={styles.sucess}>
								<Text style={{fontSize:15,marginBottom:16}}>恭喜您，邮轮订单提交成功</Text>
								<Text style={{fontSize:13,color:'#818282',letterSpacing:1}}>供销商确认后即可支付订单，请耐心等待...</Text>
							</View>
						</View>
						<View style={{marginBottom:41.5}}>
							<View style={{flexDirection:'row',marginBottom:5}}>
								<Text style={{fontSize:13,marginRight:width*0.0667}}>订单编号</Text>
								<Text style={{fontSize:13,color:'#818282'}}>201506180129</Text>
							</View>
							<View style={{flexDirection:'row'}}>
								<Text style={{fontSize:13,marginRight:width*0.0667}}>订单总额</Text>
								<Text style={{fontSize:13,color:'#ff7f3f'}}>￥6960</Text>
							</View>
						</View>
						<View style={{flexDirection:'row',justifyContent:'space-around',width:width}}>
							<TouchableOpacity>
								<View  style={{width:width*0.4,justifyContent:'center',alignItems:'center',height:30,borderRadius:2.5,borderWidth:1,borderColor:'#cbcbcb'}}>
									<Text style={{fontSize:14,color:'#a6a7a7'}}>添加房间入住人</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.goorder.bind(this)}>
								<View  style={{width:width*0.4,justifyContent:'center',alignItems:'center',height:30,borderRadius:2.5,backgroundColor:'#ff9966'}}>
									<Text style={{color:'#fff'}}>查看订单详情</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{paddingTop:16,paddingHorizontal:width*0.03467}}>
						<Text style={{fontSize:10,color:'#a6a7a7',lineHeight:15}}>订单确认后，会有短信通知您支付，请保持手机畅通并注意查收短信，以便您的出行</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headbox: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		marginTop: 22,
		height: 42,
	},
	goback: {
		left: -120
	},
	headtext: {
		fontSize: 15,
	},
	up: {
		width: width,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center'
	},
	waitingblue: {
		width: 11,
		height: 11
	},
	waiting: {
		width: width * 0.251,
		height: 1
	},
	waitinggray: {
		width: 8,
		height: 8
	},
	center: {
		width: width,
		height: 280,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	done: {
		width: width * 0.1,
		height: 32.5,
		marginTop: 32,
		marginRight: width * 0.044
	},
	sucess: {
		marginTop: 26.5,
		width: width * 0.62
	}
})

module.exports = Submitsuccess;