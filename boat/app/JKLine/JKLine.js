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
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import SideMenu from 'react-native-side-menu';
let {
	width,
	height
} = Dimensions.get('window');
let data = [{
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 2,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 2,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 1,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 1,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 1,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 1,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}, {
	product_name: '2016年4月18日 上海-锦州-福冈-上海4碗5天',
	setoff_date: '2016-04-18',
	port_name: '上海',
	min_price: 19660,
	night_num: 4,
	schedule_days: 5,
	pay_way: 1,
	thunmb: 'http://101.201.211.41:8088/upload/album/201603/604fe9e8dea1a9f6c7f2ee8642d58114.jpg'
}];

class JKLine extends Component {
	constructor(props) {
		super(props);
		ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			datasource: ds.cloneWithRows(data),
			isOpen1: false,
			isOpen2: false,
			zhselected: true,
			lowtoup: false,
			uptolow: false,
			isDisabled1: false,
			swipeToClose1: true,
		}
		this._getlistdata();
	}
	goback() {
		this.props.navigator.pop();
	}
	_getlistdata() {
		fetch('http://101.201.211.41:8088/api/cruisenew/product_list')
			.then((response) => response.json())
			.then((responseJson) => {
				// console.log(responseJson)
			})
	}
	_render(rowData) {
		if (rowData.pay_way == 2) {
			return (
				<TouchableOpacity>
					<View style={styles.listbox}>
						<View style={styles.listboxinner}>
							<Image
									source={{uri:rowData.thunmb}}
									resizeMode='stretch'
									style={styles.thumb}
								>
								<View style={styles.boxleft}>
									<Text style={styles.zikan}>{rowData.night_num}晚{rowData.schedule_days}天</Text>
								</View>
							</Image>
							<View style={styles.boxright}>
								<Text style={styles.product_name}>{rowData.product_name}</Text>
								<View style={styles.timeandport}>
									<View style={styles.timebox}>
										<Image 
											source={require('../../img/baoming.png')}
											resizeMode='stretch'
											style={styles.timeimg}
										/>
										<Text style={styles.textcolor}>{rowData.setoff_date}</Text>
									</View>
									<View style={styles.portbox}>
										<Image 
											source={require('../../img/gangkou.png')}
											resizeMode='stretch'
											style={styles.portimg}
										/>
										<Text style={styles.textcolor}>{rowData.port_name}出发</Text>
									</View>
								</View>
								<Image
									source={require('../../img/makesurepay.png')}
									resizeMode='stretch'
									style={styles.payimg}
								>
									<Text style={styles.paytext}>确认后支付</Text>
								</Image>
									
								<View style={styles.pricebox}>
									<Text style={styles.rmb}>￥</Text>
									<Text style={styles.min_price}>{rowData.min_price}</Text>
									<Text style={styles.qi}>起</Text>
								</View>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity>
					<View style={styles.listbox}>
						<View style={styles.listboxinner}>
							<Image
									source={{uri:rowData.thunmb}}
									resizeMode='stretch'
									style={styles.thumb}
								>
								<View style={styles.boxleft}>
									<Text style={styles.zikan}>{rowData.night_num}晚{rowData.schedule_days}天</Text>
								</View>
							</Image>
							<View style={styles.boxright}>
								<Text style={styles.product_name}>{rowData.product_name}</Text>
								<View style={styles.timeandport}>
									<View style={styles.timebox}>
										<Image 
											source={require('../../img/baoming.png')}
											resizeMode='stretch'
											style={styles.timeimg}
										/>
										<Text style={styles.textcolor}>{rowData.setoff_date}</Text>
									</View>
									<View style={styles.portbox}>
										<Image 
											source={require('../../img/gangkou.png')}
											resizeMode='stretch'
											style={styles.portimg}
										/>
										<Text style={styles.textcolor}>{rowData.port_name}出发</Text>
									</View>
								</View>
								
								<Image
									source={require('../../img/zhijiepay.png')}
									resizeMode='contain'
									style={styles.zhijiepayimg}
								>
									<Text style={styles.zhijiepaytext}>直接支付</Text>
								</Image>
								<View style={styles.pricebox}>
									<Text style={styles.rmb}>￥</Text>
									<Text style={styles.min_price}>{rowData.min_price}</Text>
									<Text style={styles.qi}>起</Text>
								</View>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			)
		}
	}

	openModal() {
		this.setState({
			isOpen1: true
		})
	}
	closeModal1() {
		this.setState({
			isOpen1: false
		})
	}
	closeModal2() {
		this.setState({
			isOpen2: false
		})
	}
	openModal2() {
		this.setState({
			isOpen2: true
		})
	}
	press1() {
		this.setState({
			zhselected: true,
			lowtoup: false,
			uptolow: false,
		})
	}
	press2() {
		this.setState({
			zhselected: false,
			lowtoup: true,
			uptolow: false,
		})
	}
	press3() {
		this.setState({
			zhselected: false,
			lowtoup: false,
			uptolow: true,
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.head}>
					<TouchableOpacity style={styles.goback} onPress={this.goback.bind(this)}>
						<Image 
						source={require('../../img/back.png')}
						resizeMode='contain'
						style={{width: width * 0.04,height: 25,}}
						onPress={this.goback.bind(this)}
					/>
					</TouchableOpacity>
					<Text style={styles.headtitle} onPress={this.goback.bind(this)}>{this.props.title}</Text>
				</View>
				<ListView 
					dataSource={this.state.datasource}
					renderRow={this._render.bind(this)}
					enableEmptySections = {true}
					showsHorizontalScrollIndicator ={false}
					bounces={false}
					showsVerticalScrollIndicator={false}
				/>
				
				<View style={styles.tabbarbox}>
					<TouchableOpacity onPress={this.openModal.bind(this)}>
						<View style={styles.tableft}>
						<Icon 
							name='list-ul'
							color='#fff'
							size={12}

						/>
						<Text style={styles.tabtext}>综合</Text>
					</View>
					</TouchableOpacity>
					<View>
						<Image
							source={require('../../img/shu.png')}
							style={styles.tabcenter}
						/>
					</View>
					<TouchableOpacity onPress={this.openModal2.bind(this)}>
						<View style={styles.tabright}>
						<Icon 
							name='magic'
							color='#fff'
							size={12}
						/>
						<Text style={styles.tabtext}>排序</Text>
					</View>	
					</TouchableOpacity>				
				</View>
				<Modal 
					style={{height:height,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.1)',}} 
					position={'bottom'} 
					isOpen={this.state.isOpen1}
					onClosed={this.closeModal1.bind(this)}
				>
					<View style={styles.popmenu}>
						<View style={styles.popup}>
							<TouchableOpacity onPress={this.closeModal1.bind(this)}>
								<Text style={styles.popuptitle}>取消</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.clear}>
									<Text style={styles.cleartext}>清空重置</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.closeModal1.bind(this)}>
								<Text style={styles.popuptitle}>确定</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.popdown}>
							<SideMenu navigator={this.props.navigator}>
								<Text>wo</Text>
								<Text>ni</Text>
								<Text>ta</Text>
							</SideMenu>
						</View>
					</View>
				</Modal>
				<Modal
					style={{height:height,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.1)',}} 
					position={'bottom'} 
					isOpen={this.state.isOpen2}
					swipeToClose={this.SwipeToClose}
					onClosed={this.closeModal2.bind(this)}
				>
					<View style={styles.zonghebox}>
						{
							this.state.zhselected?<TouchableOpacity onPress={this.press1.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/zhselected.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>综合</Text>
							</View>
							<Image 
								source={require('../../img/selected.png')}
								style={styles.selected}
								resizeMode='stretch'
							/>
						</View></TouchableOpacity>:<TouchableOpacity onPress={this.press1.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/zhunselect.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>综合</Text>
							</View>
						</View></TouchableOpacity>
						}
						{
							this.state.lowtoup?<TouchableOpacity onPress={this.press2.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/upselected.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>价格从低到高</Text>
							</View>
							<Image 
								source={require('../../img/selected.png')}
								style={styles.selected}
								resizeMode='stretch'
							/>
						</View></TouchableOpacity>:<TouchableOpacity onPress={this.press2.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/up.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>价格从低到高</Text>
							</View>
						</View></TouchableOpacity>
						}
						{
							this.state.uptolow?<TouchableOpacity onPress={this.press3.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/downselected.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>价格从高到低</Text>
							</View>
							<Image 
								source={require('../../img/selected.png')}
								style={styles.selected}
								resizeMode='stretch'
							/>
						</View></TouchableOpacity>:<TouchableOpacity onPress={this.press3.bind(this)}><View style={styles.zonghelist}>
							<View style={styles.zhlistleft}>
								<Image
									source={require('../../img/down.png')}
									style={styles.orderleft}
									resizeMode='stretch'
								/>
								<Text style={styles.zhtext}>价格从高到低</Text>
							</View>
						</View></TouchableOpacity>
						}
					</View>
				</Modal>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	head: {
		height: 41,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 23,
		position: 'relative',
	},
	headtitle: {
		fontSize: 20,
		color: '#3c4042'
	},
	goback: {
		position: 'absolute',
		// width: width * 0.04,
		// height: 25,
		left: width * 0.033,
		top: 11.5
	},
	listbox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#d4d4d4',
		height: 94
	},
	listboxinner: {
		width: width * 0.95067,
		height: 75,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	thumb: {
		width: width * 0.2,
		height: 75,
		borderRadius: 3
	},
	boxleft: {
		width: width * 0.15,
		height: 16.5,
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderBottomRightRadius: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	zikan: {
		fontSize: 10,
		color: '#fff'
	},
	boxright: {
		width: width * 0.72,
	},
	product_name: {
		fontSize: 14,
	},
	timeandport: {
		flexDirection: 'row',
		marginTop: 7.5
	},
	timebox: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: width * 0.1
	},
	portbox: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	timeimg: {
		height: 12.5,
		width: width * 0.033,
		marginRight: width * 0.0226

	},
	portimg: {
		height: 10,
		width: width * 0.03,
		marginRight: width * 0.008
	},
	textcolor: {
		color: '#a7a7a7',
		fontSize: 10
	},
	payimg: {
		width: width * 0.2,
		height: 16,
		justifyContent: 'center',
		marginTop: 6
	},
	paytext: {
		fontSize: 10,
		color: '#60b5f6',
		marginLeft: width * 0.0467
	},
	zhijiepaytext: {
		fontSize: 10,
		color: '#60b5f6',
		marginLeft: width * 0.0426
	},
	zhijiepayimg: {
		width: width * 0.1613,
		height: 16,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 6
	},
	pricebox: {
		position: 'absolute',
		bottom: -2,
		right: width * 0.0266,
		flexDirection: 'row',
		alignItems: 'center'
	},
	rmb: {
		color: '#ff6600',
		fontSize: 10,
	},
	min_price: {
		color: '#ff6600',
		fontSize: 15
	},
	qi: {
		color: '#8c8c8c',
		fontSize: 12
	},
	tabbarbox: {
		height: 45,
		backgroundColor: '#000',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	tableft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	tabright: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	tabtext: {
		color: '#fff',
		fontSize: 15,
		marginLeft: width * 0.0173
	},
	tabcenter: {
		height: 25,
		width: 2
	},
	popmenu: {
		width: width,
		height: 300,
	},
	popup: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#314150',
	},
	popuptitle: {
		color: '#fff',
		fontSize: 14
	},
	clear: {
		width: width * 0.2667,
		height: 35,
		backgroundColor: '#83878e',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
	},
	cleartext: {
		fontSize: 14,
		color: '#b0b7c1'
	},
	popdown: {
		width: width,
		height: 250,
		backgroundColor: '#fff'
	},
	zonghebox: {
		height: 180,
		backgroundColor: '#fff'
	},
	zonghelist: {
		width: width,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: width * 0.07,
		borderBottomWidth: 1,
		borderBottomColor: '#eeeeee',
		alignItems: 'center',
	},
	zhlistleft: {
		flexDirection: 'row',

	},
	orderleft: {
		width: 15,
		height: 18,
		marginRight: width * 0.02,
	},
	zhtext: {
		fontSize: 16
	},
	selected: {
		width: width * 0.053,
		height: 20
	}
})

module.exports = JKLine;