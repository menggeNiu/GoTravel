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
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkin from '../headpro/checkinsure';
import Paynow from '../headpro/nowpay'
let width = Dimensions.get('window').width;
class Seeorder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			issure: false
		}
	}
	back() {
		this.props.navigator.pop()
	}
	makesure() {
		this.setState({
			issure: true
		})
	}
	tocheckin() {
		this.props.navigator.push({
			name: '确认入住人',
			component: Checkin
		})
	}
	paynow() {
		this.props.navigator.push({
			name: '立即支付',
			component: Paynow
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
					<Text style={styles.headtext}>查看订单</Text>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb'}}>
					<ScrollView
						bounces={false}
						showsVerticalScrollIndicator={false}
					>
						<View style={styles.ordernum}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.left}>订单编号</Text>
								<Text style={styles.rigth}>201506180129</Text>
							</View>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.left}>订单总额</Text>
								<Text style={styles.price}>￥6960</Text>
							</View>
						</View>
						<View style={styles.way}>
							<View style={styles.row}>
								<Text style={styles.left}>线路名称</Text>
								<Text style={[styles.right,{width:width*0.72,lineHeight:21}]}>2016年4月18日 歌诗达赛琳娜 上海-济州-福冈-上海4晚5天</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.left}>出发港口</Text>
								<Text style={styles.right}>上海</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.left}>出发日期</Text>
								<Text style={styles.right}>2015-06-18</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.left}>出发人数</Text>
								<Text style={styles.right}>4成人 1儿童</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.left}>岸上观光</Text>
								<View>
									<Text style={styles.right}>长崎+济州岛岸上观光A线 民俗风光游</Text>
									<View style={[styles.row,{marginTop:5}]}>
										<Text style={styles.price}>￥4990</Text>
										<Text style={styles.right}>人</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.room}>
							<View style={styles.roominner}>
								<View>
									<Text style={styles.left}>舱房名称</Text>
								</View>
								<View style={{width:width*0.76}}>
									<View style={styles.num}>
										<Text style={styles.right}>标准内仓双人房</Text>
										<Text style={styles.right}>x1</Text>
									</View>
									<View style={styles.num}>
										<Text style={styles.right}>标准阳台三人房</Text>
										<Text style={styles.right}>x1</Text>
									</View>
								</View>
							</View>
							<TouchableOpacity onPress={this.tocheckin.bind(this)}>
								<View style={styles.add}>
									<Text>添加房间入住人</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.contact}>
							<View style={styles.row}>
								<Text style={styles.left}>订单联系人</Text>
								<Text style={styles.right}>刘丽</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.left}>手机号</Text>
								<Text style={styles.right}>13265495642</Text>
							</View>
						</View>
						{
							this.state.issure?<TouchableOpacity onPress={this.paynow.bind(this)}>
							<View style={styles.waitsure}>
								<View style={[styles.surebox,{backgroundColor:'#ff8a54'}]}>
									<Text style={styles.suretext}>立即支付</Text>
								</View>
							</View>
						</TouchableOpacity>
						:<TouchableOpacity onPress={this.makesure.bind(this)}>
							<View style={styles.waitsure}>
								<View style={styles.surebox}>
									<Text style={styles.suretext}>等待确认</Text>
								</View>
							</View>
						</TouchableOpacity>
						}
					</ScrollView>
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
	ordernum: {
		backgroundColor: '#fff',
		width: width,
		height: 70,
		marginVertical: 15,
		paddingLeft: width * 0.0133,
		paddingVertical: 15,
		justifyContent: 'space-between'
	},
	way: {
		width: width,
		height: 198.5,
		backgroundColor: '#fff',
		marginBottom: 15,
		paddingLeft: width * 0.0133,
		paddingVertical: 15,
		justifyContent: 'space-between'
	},
	room: {
		width: width,
		height: 120,
		backgroundColor: '#fff',
		marginBottom: 15,
		paddingVertical: 15,
		alignItems: 'center',
	},
	contact: {
		width: width,
		height: 70,
		backgroundColor: '#fff',
		marginBottom: 15,
		paddingVertical: 15,
		paddingLeft: width * 0.0133,
		justifyContent: 'space-between'
	},
	roominner: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	left: {
		width: width * 0.191,
		fontSize: 12
	},
	right: {
		fontSize: 12,
		color: '#818282'
	},
	price: {
		fontSize: 12,
		color: '#ff6600'
	},
	row: {
		flexDirection: 'row',
	},
	num: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	add: {
		width: width * 0.4,
		height: 35,
		borderWidth: 1,
		borderColor: '#cbcbcb',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		marginTop: 10
	},
	waitsure: {
		alignItems: 'center',
	},
	surebox: {
		width: width * 0.933,
		height: 45,
		backgroundColor: '#c0c8d0',
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	suretext: {
		fontSize: 18,
		color: '#fff'
	}
})

module.exports = Seeorder;