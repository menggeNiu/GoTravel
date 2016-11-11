import React, {
	Component
} from 'react';
import {
	Navigator,
	Text,
	StyleSheet,
	View,
	Dimensions,
	ListView,
	Image,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
let {
	width,
	height
} = Dimensions.get('window');

let datas = {
	album_list: [{
		album_id: 69336,
		picture: '/upload/album/201603/2bf41b276870a66f5f70fa542d4f1af3.png'
	}],
	schedule: [{
		schedule_id: 66605,
		arrival_time: '15: 50',
		sail_time: '15: 55',
		title: 1,
		schedule_type: 2,
		breakfast: 0,
		lunch: 1,
		dinner: 0,
		detail: 1,
		album: [{
			album_id: 69267,
			picture: '/upload/album/201603/0ea68b7593bd2a7d371a689f148f4c2d.jpg'
		}],
		type: 1,
		day: 1,
		destination: 1,
		type_name: '登船',
		tour_list: [{
			schedule_id: 66605,
			day: 1,
			tour_id: 544,
			tour_name: '11景点名称+线路分类+特色介绍 例如：釜山+长崎岸上观光A线 民俗风光游景点名',
			breakfast: 0,
			lunch: 0,
			dinner: 0,
			detail: '<p>123<br/></p>',
			album: [{
				album_id: 69287,
				picture: '/upload/album/201603/71b6cafa7182b2a41351d58d7db36767.jpg'
			}],
			tour_price: 10,
			fee_status: 1
		}, {
			schedule_id: 66605,
			day: 1,
			tour_id: 545,
			tour_name: '22景点名称+线路分类+特色介绍 例如：釜山 +长崎岸上观光A线 民俗风光游景点名',
			breakfast: 1,
			lunch: 1,
			dinner: 1,
			detail: '<p>123<br/></p>',
			album: [{
				album_id: 69288,
				picture: '/upload/album/201603/2bb60f5731a7459ef1216c3c0f4c61dd.jpeg'
			}],
			tour_price: 100,
			fee_status: 0
		}]
	}],
	room: [{
		c_id: 73691,
		product_id: 52166,
		cabin_thumb: '/upload/thumb/201505/1434090536.jpg',
		type_name: '阳台房',
		window: 0,
		type_id: 3,
		first_price: 200,
		second_price: 200,
		third_price: 200,
		rebate: 100.00,
		sell: 29,
		stock: 208,
		cabin_id: 312,
		cabin_name: '随机阳台三人间',
		size: 18,
		num: 3,
		floors: 4,
		profile: '<span>阳台舱房</span> < span > 起居空间里有沙发、 梳妆台、 以及全套卫浴设备 < /span><span>。</span >',
		first_price_basic: 100,
		second_price_basic: 100,
		third_price_basic: 100,
		cabin_rebate: 1

	}],
	att_status: 1,
	max_butler_s: 0.02,
	mobile: 46506560
}
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Scrollable from '../../app/headpro/scrollview';
import Prebooking from '../../app/headpro/prebooking';
import Modal from 'react-native-modalbox';
class Headpro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLike: false,
			isOpen: false,
		}
	}
	goback() {
		this.props.navigator.pop();
	}
	islike() {
		this.setState({
			isLike: !this.state.isLike
		})
	}
	toprebooking(datas) {
		this.props.navigator.push({
			name: '立即预定',
			component: Prebooking,
			params: {
				datas: datas
			}
		})
	}
	openmodal() {
		this.setState({
			isOpen: true
		})
	}
	closeModal1() {
		this.setState({
			isOpen: false
		})
	}
	render() {
		return (
			<View style={{flex:1,position:'relative'}}>
					<ScrollView
						bounces={false}
						showsVerticalScrollIndicator={false}
					>
						<Image
							source={{uri:this.props.datas.src}}
							style={styles.bg}
						>
							<View style={styles.headbox}>
								<View style={styles.headbar}>
									<TouchableOpacity onPress={this.goback.bind(this)}>
										<View style={styles.headbarinner}>
											<Icon
												name='chevron-left'
												color='#fff'
												size={20}
											/>
										</View>
									</TouchableOpacity>
									<TouchableOpacity onPress={this.openmodal.bind(this)}>
										<View style={styles.headbarinner}>
											<Icon
												name='share'
												color='#fff'
												size={20}
											/>
										</View>
									</TouchableOpacity>
								</View>
								<View style={styles.portbox}>
									<View style={styles.portboxleft}>
										<Image 
											source={require('../../img/gangkou.png')}
											style={styles.portimg}
										/>
										<Text style={styles.porttext}>上海出发</Text>
									</View>
									<Text style={styles.porttime}>2016年4月18日</Text>
								</View>
							</View>
						</Image>
						<View style={styles.productbox}>
							<View style={styles.productboxup}>
								<Text style={styles.uptext1}>2016年4月18日 歌诗达赛琳娜 上海-济州-福冈-上海4晚5天</Text>
								<View style={styles.uptext2box}>
									<View style={styles.uptext2boxleft}>
										<Text style={styles.uptext21}>微旅价:</Text>
										<Text style={styles.uptext22}>￥5690</Text>
									</View>
									<View style={styles.return}>
										<Image
											source={require('../../img/return.png')}
											style={styles.returniimg}
										/>
										<Text style={styles.min_price}>￥115</Text>
										<Text style={styles.qi}>起</Text>
									</View>
								</View>
							</View>
							<View style={styles.productboxdown}>
								<Text style={styles.num}>编号：b8273437968136701</Text>
								<Text numberOfLines={1} style={styles.allow}>本产品由新华社旅行社提供服务，经营许可证号：L-HE...</Text>
							</View>
							<TouchableOpacity>
								<Icon
									name='chevron-down'
									size={10}
									color='#868686'
									style={styles.tomore}
								/>
							</TouchableOpacity>
						</View>
						<Scrollable />
					</ScrollView>
					<View style={styles.btn}>
						{
							this.state.isLike?
							<TouchableOpacity onPress={this.islike.bind(this)}><View style={styles.btnbox}>
								<Icon
								name='star'
								size={23}
								color='#ff9966'
								/>
								<Text style={{color:'#ff9966'}}>已收藏</Text>
							</View></TouchableOpacity>
							:<TouchableOpacity onPress={this.islike.bind(this)}>
								<View style={styles.btnbox}>
									<Icon
										name='star-o'
										size={23}
										color='#abb4bc'
									/>
									<Text style={{color:'#abb4bc',fontSize:12}}>收藏</Text>
								</View>
							</TouchableOpacity>
						}
						<TouchableOpacity>
							<View style={[styles.btnbox,styles.btnbox1]}>
								<Image
									source={require('../../img/call.png')}
									style={styles.call}
								/>
								<Text style={{color:'#abb4bc',fontSize:12}}>电话咨询</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.now} onPress={this.toprebooking.bind(this,datas)}>
							<Text style={{color:'#fff'}}>立即预定</Text>
						</TouchableOpacity>
						</View> 
					<Modal 
						style={{height:height,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.1)',}} 
						position={'bottom'} 
						isOpen={this.state.isOpen}
						onClosed={this.closeModal1.bind(this)}
					>
						<View style={styles.sharebox}>
							<View style={styles.titlebox}>
								<Text style={styles.sharetitle}>分享到</Text>
							</View>
							<View style={styles.option}>
								<TouchableOpacity>
									<View style={styles.roolbox}>
										<Image
											source={require('../../img/weixin.png')}
											style={styles.optionpic}
										/>
										<Text>微信好友</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.roolbox}>
										<Image
											source={require('../../img/QQ.png')}
											style={styles.optionpic}
										/>
										<Text>QQ好友</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.roolbox}>
										<Image
											source={require('../../img/friend.png')}
											style={styles.optionpic}
										/>
										<Text>微信朋友圈</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.roolbox}>
										<Image
											source={require('../../img/QQspace.png')}
											style={styles.optionpic}
										/>
										<Text>QQ空间</Text>
									</View>
								</TouchableOpacity>
							</View>
							<TouchableOpacity onPress={this.closeModal1.bind(this)}>
								<View style={styles.cancel}>
									<Text style={styles.canceltext}>取消</Text>
								</View>
							</TouchableOpacity>
						</View>
					</Modal>
					</View>

		)
	}
}

const styles = StyleSheet.create({
	bg: {
		width: width,
		height: 200
	},
	headbox: {
		flex: 1,
		justifyContent: 'space-between'
	},
	headbar: {
		width: width,
		marginTop: 25,
		paddingHorizontal: width * 0.0267,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headbarinner: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	portbox: {
		width: width,
		height: 20,
		backgroundColor: 'rgba(0,0,0,0.6)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	portboxleft: {
		flexDirection: 'row',
		marginLeft: width * .0293,
		width: width * 0.1626,
	},
	portimg: {
		width: width * 0.0293,
		height: 11,
		marginRight: width * 0.012,
	},
	porttext: {
		fontSize: 10,
		color: '#fff',
	},
	porttime: {
		fontSize: 10,
		marginRight: width * .0293,
		color: '#fff'
	},
	productbox: {
		width: width,
	},
	productboxup: {
		width: width,
		paddingHorizontal: width * 0.0293,
		paddingTop: 14,
		paddingBottom: 12.5,
		height: 90,
	},
	uptext1: {
		fontSize: 14,
		lineHeight: 20
	},
	uptext2box: {
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	uptext2boxleft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	uptext21: {
		fontSize: 14,
		color: '#ff6600',
	},
	uptext22: {
		fontSize: 16,
		color: '#ff6600'
	},
	return: {
		flexDirection: 'row',
		height: 15,
		borderWidth: 1,
		borderColor: '#6eb5eb',
		borderRadius: 7.5,
		alignItems: 'center',
		paddingRight: 4
	},
	returniimg: {
		width: width * 0.0613,
		height: 16
	},
	min_price: {
		fontSize: 8,
		color: '#ff6600'
	},
	qi: {
		fontSize: 8,
		color: '#b8b8b8',
	},
	productboxdown: {
		width: width * 0.9747,
		borderTopWidth: 1,
		borderTopColor: '#e5e5e5',
		marginLeft: width * 0.0253,
		paddingTop: 12,
		height: 60,
		position: 'relative'
	},
	num: {
		fontSize: 12,
		color: '#868686',
		height: 12,
		letterSpacing: 0.5,
		marginBottom: 14,
	},
	allow: {
		height: 12,
		width: width * 0.84,
		fontSize: 12,
		color: '#868686',
		letterSpacing: 0.3
	},
	tomore: {
		position: 'absolute',
		bottom: 13,
		right: width * 0.02667
	},
	btn: {
		width: width,
		height: 50,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: '#dcdcdc',
	},
	btnbox: {
		width: width * 0.1667,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	call: {
		width: 20,
		height: 20
	},
	now: {
		width: width * 0.6666,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff9966',
	},
	btnbox1: {
		borderLeftWidth: 1,
		borderLeftColor: '#e5e5e5',
	},
	sharebox: {
		width: width,
		height: 200,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	titlebox: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 22
	},
	sharetitle: {
		fontSize: 15,
	},
	option: {
		width: width * 0.8533,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20
	},
	optionpic: {
		width: 55,
		height: 55
	},
	roolbox: {
		alignItems: 'center'
	},
	cancel: {
		width: width * 0.933,
		height: 45,
		backgroundColor: '#abb4bc',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 2
	},
	canceltext: {
		fontSize: 19,
		color: '#fff'
	}
})


module.exports = Headpro;