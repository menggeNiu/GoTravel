import React, {
	Component
} from 'react';
import {
	View,
	Text,
	ScrollView,
	ListView,
	Dimensions,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
let {
	width,
	height
} = Dimensions.get('window');

let list = [{
	produc_name: '标准内舱3人房间',
	room_square: '15m²',
	people_num: '3',
	window: '无窗',
	price_per: '￥1860'
}, {
	produc_name: '海景2人房',
	room_square: '15m²',
	people_num: '2',
	window: '无窗',
	price_per: '￥1560'
}, {
	produc_name: '标准阳台2人房',
	room_square: '15m²',
	people_num: '3',
	window: '无窗',
	price_per: '￥1860'
}]
class Scrollable extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<View style={styles.topbarbox}>
				<View style={styles.topbarinner}>
					<ScrollableTabView
						tabBarActiveTextColor='#ff9966'
						tabBarInactiveTextColor='#6f7378'
						tabBarUnderlineStyle={{backgroundColor:'#ff9966',height:2}}
						tabBarTextStyle={{fontSize:14}}
						style={styles.tabview}
					>
						<View  tabLabel='舱房信息'>
							<View style={styles.box}>
								<View style={styles.msghead}>
									<Image
										source={require('../../img/produc.png')}
										style={styles.headpic}
									/>
									<Text style={styles.pictext}>产品特色</Text>
								</View>
								<View style={styles.introducebox}>
									<Text style={[styles.introtext,styles.introtext1]}>1.采用星级哈那个空公司豪华客机往返，安全舒适。</Text>
									<Text style={styles.introtext}>2.一次游玩波罗的海沿岸最佳主要名城，美景醉人......</Text>
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
							<View style={styles.listbox}>
								{
									list.map((item,i)=>
										<View key={i}>
											<View style={styles.listinner}>
												<View style={styles.innerleft}>
													<TouchableOpacity>
														<View style={styles.thumbbox}>
															<Image 
																source = {
																	require('../../img/room.png')
																}
																style={styles.thumb}
															/>
														</View>
													</TouchableOpacity>
													<View>
														<Text style={styles.produc_name}>{item.produc_name}</Text>
														<Text style={styles.window}>{item.room_square}、住{item.people_num}人、{item.window}</Text>
														<Text style={styles.price}>{item.price_per}/人起</Text>
													</View>
												</View>
												<View style={styles.innerright}>
													<TouchableOpacity>
														<Text style={styles.alltext}>查看全部</Text>
													</TouchableOpacity>
														<View style={styles.alldown}>
															<Text style={styles.alldowntext}>内舱房</Text>
															<Text style={styles.alldowntext}>(共2种)</Text>
														</View>
													
												</View>
											</View>
										</View>
									)
								}
							</View>
							<View style={styles.bottom}>
								<View style={styles.rule}>
									<TouchableOpacity>
										<View style={[styles.rulebox,styles.rulebox1]}>
											<Image
												source={require('../../img/1.png')}
												style={styles.rulepic}
											/>
											<Text style={styles.ruletext}>预定须知</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
										<View style={styles.rulebox}>
											<Image
												source={require('../../img/2.png')}
												style={styles.rulepic}
											/>
											<Text style={styles.ruletext}>费用说明</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View style={styles.rule}>
									<TouchableOpacity>
										<View style={[styles.rulebox,styles.rulebox1]}>
											<Image
												source={require('../../img/3.png')}
												style={styles.rulepic}
											/>
											<Text style={styles.ruletext}>预定须知</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
										<View style={styles.rulebox}>
											<Image
												source={require('../../img/4.png')}
												style={styles.rulepic}
											/>
											<Text style={styles.ruletext}>费用说明</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View  tabLabel='行程介绍' style={{flex:1}}>
							<View style={styles.box}>
								<View style={{paddingLeft:width*0.0746}}>
									<View style={styles.title}>
										<Text style={styles.day}>第1天</Text>
										<Text style={styles.location}>昆明</Text>
									</View>
									<View style={styles.timebox}>
										<Icon
											name='clock-o'
											color='#60b5f6'
											size={17}
											style={styles.clock}
										/>
										<Text style={[styles.text,styles.text1]}>08:00抵港</Text>
										<Text style={styles.text}>12：00启航</Text>
									</View>
									<View style={styles.dengchuan}>
										<Image
											source={require('../../img/foat.png')}
											style={styles.foat}
										/>
										<Text style={styles.text}>登船</Text>
									</View>
									<View style={styles.roatIntro}>
										<Text numberOfLines={2} style={[styles.text,{lineHeight:17}]}>早上乘车往瓦尔内明德--位于德国北部，人口接近二十万，是梅克伦堡-前波莫瑞州最大的城市。瓦尔诺河(Warnow)......</Text>
									</View>
								</View>
								<View style={{paddingLeft:width*0.0746}}>
									<View style={styles.title}>
										<Text style={styles.day}>第2天</Text>
										<Text style={styles.location}>大理</Text>
									</View>
									<View style={styles.timebox}>
										<Icon
											name='clock-o'
											color='#60b5f6'
											size={17}
											style={styles.clock}
										/>
										<Text style={[styles.text,styles.text1]}>发车时间：08：00出发</Text>
										<Text style={styles.text}>12：00到达</Text>
									</View>
									<View style={styles.dengchuan}>
										<Image
											source={require('../../img/tree.png')}
											style={styles.tree}
										/>
										<Text style={styles.text}>岸上观光</Text>
									</View>
									<View style={styles.aline}>
										<View style={{flexDirection:'row',marginBottom:8}}>
											<Text style={{fontSize:12,marginRight:width*0.0667}}>a线 岸上观光</Text>
											<Text style={{fontSize:12}}>免费</Text>
										</View>
										<View>
											<Text style={{fontSize:11,color:'#6f7378'}}>曼谷大王宫-朱拉隆功大学-国家博物馆-拉斯吧塞......</Text>
										</View>
										<TouchableOpacity>
											<View style={styles.xiangqing}>
												<Text style={{color:'#fff',fontSize:12}}>查看</Text>
												<Text style={{color:'#fff',fontSize:12}}>详情</Text>
											</View>
										</TouchableOpacity>
									</View>
									<View style={[styles.aline,{marginBottom:13}]}>
										<View style={{flexDirection:'row',marginBottom:8}}>
											<Text style={{fontSize:12,marginRight:width*0.0667}}>b线 岸上观光</Text>
											<Text style={{fontSize:12}}>369/人</Text>
										</View>
										<View>
											<Text style={{fontSize:11,color:'#6f7378'}}>曼谷大王宫-朱拉隆功大学-国家博物馆-拉斯吧塞......</Text>
										</View>
									</View>
								</View>
								<View style={{paddingLeft:width*0.0746}}>
									<View style={styles.title}>
										<Text style={styles.day}>第3天</Text>
										<Text style={styles.location}>宁波</Text>
									</View>
									<View style={styles.timebox}>
										<Icon
											name='clock-o'
											color='#60b5f6'
											size={17}
											style={styles.clock}
										/>
										<Text style={[styles.text,styles.text1]}>发车时间：08:00出发</Text>
										<Text style={styles.text}>12：00到达</Text>
									</View>
									<View style={styles.dengchuan}>
										<Image
											source={require('../../img/foat.png')}
											style={styles.foat}
										/>
										<Text style={styles.text}>游轮活动</Text>
									</View>
									<View style={styles.roatIntro}>
										<Text numberOfLines={2} style={[styles.text,{lineHeight:17}]}>早上乘车往瓦尔内明德--位于德国北部，人口接近二十万，是梅克伦堡-前波莫瑞州最大的城市。瓦尔诺河(Warnow)......</Text>
									</View>
								</View>
								<View style={{paddingLeft:width*0.0746}}>
									<View style={styles.title}>
										<Text style={styles.day}>第4天</Text>
										<Text style={styles.location}>西湖</Text>
									</View>
									<View style={styles.timebox}>
										<Icon
											name='clock-o'
											color='#60b5f6'
											size={17}
											style={styles.clock}
										/>
										<Text style={[styles.text,styles.text1]}>发车时间：08:00出发</Text>
										<Text style={styles.text}>12：00到达</Text>
									</View>
									<View style={styles.dengchuan}>
										<Image
											source={require('../../img/foat.png')}
											style={styles.foat}
										/>
										<Text style={styles.text}>下船</Text>
									</View>
									<View style={styles.roatIntro}>
										<Text numberOfLines={2} style={[styles.text,{lineHeight:17}]}>早上乘车往瓦尔内明德--位于德国北部，人口接近二十万，是梅克伦堡-前波莫瑞州最大的城市。瓦尔诺河(Warnow)......</Text>
									</View>
								</View>
								<View style={{paddingLeft:width*0.0746}}>
									<View style={styles.title}>
										<Text style={styles.day}>第5天</Text>
										<Text style={styles.location}>返回郑州</Text>
									</View>
								</View>
								<View>
									<Image
										source={require('../../img/zhizhen.png')}
										style={styles.zhizhen}
									/>
								</View>
							</View>
						</View>
					</ScrollableTabView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	topbarbox: {
		backgroundColor: '#dee5eb',
		paddingTop: 15,
		flex: 1,
	},
	topbarinner: {
		backgroundColor: '#fff',
	},
	box: {
		paddingTop: 10,
		position: 'relative',
		paddingBottom: 12.5,
	},
	msghead: {
		marginLeft: width * 0.0293,
		flexDirection: 'row',
		height: 20,
		alignItems: 'center',
		marginBottom: 10,
	},
	headpic: {
		width: width * 0.0533,
		height: 20,
		marginRight: width * 0.022667,
	},
	pictext: {
		fontSize: 14,
	},
	introducebox: {
		marginLeft: width * 0.0653,
	},
	introtext: {
		fontSize: 11,
		color: '#868686',
	},
	introtext1: {
		marginBottom: 10,
	},
	tomore: {
		bottom: 0,
		position: 'absolute',
		right: width * 0.02667
	},
	listbox: {
		paddingVertical: 14,
		backgroundColor: '#dee5eb',
	},
	listinner: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width,
		height: 94,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#d2d2d2'
	},
	innerleft: {
		height: 75,
		flexDirection: 'row',
		paddingLeft: 10,
	},
	thumb: {
		width: 75,
		height: 75,
		marginRight: width * 0.032
	},
	produc_name: {
		fontSize: 14,
		marginBottom: 10,
		lineHeight: 14,
		marginTop: 2.5
	},
	window: {
		fontSize: 12,
		color: '#6f7378',
		marginBottom: 20
	},
	price: {
		color: '#ff6600'
	},
	innerright: {
		height: 79,
		borderLeftWidth: 1,
		borderLeftColor: '#d2d2d2',
		alignItems: 'center',
		justifyContent: 'center',
		width: 92,
	},
	alltext: {
		color: '#60b5f6',
		fontSize: 13,
		marginBottom: 11
	},
	alldowntext: {
		fontSize: 11,
		color: '#959595'
	},
	alldown: {
		alignItems: 'center'
	},
	rule: {
		width: width,
		height: 40,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#dcdcdc'
	},
	rulebox: {
		width: width * 0.5,
		height: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rulepic: {
		width: 20,
		height: 20,
		marginRight: 15,
	},
	ruletext: {
		fontSize: 14,
		color: '#6f7378'
	},
	rulebox1: {
		borderRightWidth: 1,
		borderRightColor: '#dcdcdc'
	},
	title: {
		flexDirection: 'row',
		marginBottom: 16,
	},
	day: {
		fontSize: 14,
	},
	location: {
		fontSize: 14
	},
	timebox: {
		flexDirection: 'row',
		marginBottom: 11.5,
		alignItems: 'center'
	},
	clock: {
		marginRight: width * 0.0413
	},
	text: {
		fontSize: 12,
		color: '#6f7378'
	},
	text1: {
		marginRight: width * 0.1667
	},
	foat: {
		width: 17.5,
		height: 10,
		marginRight: width * 0.0413
	},
	tree: {
		width: 15,
		height: 15,
		marginRight: width * 0.0413
	},
	dengchuan: {
		flexDirection: 'row',
		marginBottom: 12
	},
	roatIntro: {
		marginBottom: 15
	},
	aline: {
		width: width * 0.9254,
		height: 50,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderTopColor: '#e5e5e5',
		borderBottomColor: '#e5e5e5',
		justifyContent: 'center',
		position: 'relative',
		zIndex: 1,
	},
	xiangqing: {
		position: 'absolute',
		width: 40,
		height: 40,
		borderRadius: 2,
		backgroundColor: '#ff9b69',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 10,
		right: 5,
		bottom: -15
	},
	zhizhen: {
		position: 'absolute',
		width: 14,
		height: 616,
		left: 5,
		top: -640,
	}
})

module.exports = Scrollable;