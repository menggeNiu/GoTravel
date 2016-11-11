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
let width = Dimensions.get('window').width;
class Paynow extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	back() {
		this.props.navigator.pop()
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
					<Text style={styles.headtext}>立即支付</Text>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb',alignItems:'center'}}>
					<View style={styles.box1}>
						<View style={styles.row}>
							<Text style={styles.left}>线路名称</Text>
							<Text style={styles.right}>2016年4月18日 歌诗达赛琳娜 上海-济州-福冈-上海4晚5天</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.left}>订单编号</Text>
							<Text style={styles.right}>201506180129</Text>
						</View>
					</View>
					<View style={styles.box2}>
						<View style={styles.row}>
							<Text style={styles.left}>出发日期</Text>
							<Text style={styles.right}>2015-06-18</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.left}>出发港口</Text>
							<Text style={styles.right}>上海</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.left}>出行人数</Text>
							<Text style={styles.right}>2成人 1儿童</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.left}>订单总数</Text>
							<Text style={styles.price}>￥6960</Text>
						</View>
					</View>
					<View style={styles.box3}>
						<View style={styles.row1}>
							<View style={styles.payleft}>
								<Image
									source={require('../../img/zhi.png')}
									style={styles.pic}
								/>
								<Text style={styles.left}>支付宝钱包支付</Text>
							</View>
							<View>
								<Image
									source={require('../../img/circle.png')}
									style={styles.circle}
								/>
							</View>
						</View>
						<View style={styles.row1}>
							<View style={styles.payleft}>
								<Image
									source={require('../../img/wei.png')}
									style={styles.pic}
								/>
								<Text style={styles.left}>微信支付</Text>
							</View>
							<View>
								<Image
									source={require('../../img/circle.png')}
									style={styles.circle}
								/>
							</View>
						</View>
					</View>
					<TouchableOpacity>
						<View style={{width:width,alignItems:'center',marginTop:40}}>
							<View style={{width:width*0.93,backgroundColor:'#ff9966',height:45,alignItems:'center',justifyContent:'center',borderRadius:2}}>
								<Text style={{fontSize:20,color:'#fff'}}>确认支付</Text>
							</View>
						</View>
					</TouchableOpacity>
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
		left: -110
	},
	headtext: {
		fontSize: 15,
	},
	box1: {
		width: width,
		marginTop: 15,
		backgroundColor: '#fff',
		height: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	box2: {
		width: width,
		marginTop: 15,
		backgroundColor: '#fff',
		height: 130,
		justifyContent: 'center',
		alignItems: 'center'
	},
	box3: {
		width: width,
		marginTop: 15,
		backgroundColor: '#fff',
		height: 100,
		alignItems: 'center'
	},
	row: {
		width: width * 0.93,
		flexDirection: 'row',
		marginBottom: 15
	},
	row1: {
		width: width * 0.93,
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	left: {
		fontSize: 12,
		marginRight: width * 0.0573
	},
	right: {
		fontSize: 12,
		color: '#818282',
		width: width * 0.72,
	},
	price: {
		fontSize: 12,
		width: width * 0.72,
		color: '#ff6600'
	},
	payleft: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	pic: {
		width: 34,
		height: 34,
		marginRight: width * 0.04
	},
	circle: {
		width: 20,
		height: 20
	}
})

module.exports = Paynow;