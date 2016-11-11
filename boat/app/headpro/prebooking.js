import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import Submitsuccess from '../../app/headpro/submitsuccess';

let {
	width,
	height
} = Dimensions.get('window');

class Room extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isselect: false
		}
	}
	selected() {
		this.setState({
			isselect: !this.state.isselect
		})
	}
	render() {
		return (
			<View>
				{
			this.state.isselect ? <TouchableOpacity onPress={this.selected.bind(this)} style={{width:width*0.12,height:75}}>
				<Image
				source={require('../../img/roomed.png')}
				style={{width:width*0.12,height:75}}
			>
			  		<View style={{justifyContent:'center',alignItems:'center',width:width*0.12,height:75}}>
				<Text style={{fontSize:14,color:'#60b5f6',marginBottom:11}}>{this.props.roomname}</Text>
				<View style={{flexDirection:'row'}}>
					<Text style={{fontSize:12,color:'#60b5f6'}}>{this.props.price}</Text>
					<Text style={{fontSize:11,color:'#60b5f6'}}>起</Text>
				</View>
			</View>
			  	</Image>
			</TouchableOpacity> :<TouchableOpacity onPress={this.selected.bind(this)} style={{width:90,height:75}}>
				 <Image
				source={require('../../img/rooms.png')}
				style={{width:width*0.12,height:75}}
				resizeMode='stretch'
			>
			  		<View style={{justifyContent:'center',alignItems:'center',width:width*0.12,height:75}}>
				<Text style={{fontSize:14,marginBottom:11}}>{this.props.roomname}</Text>
				<View style={{flexDirection:'row'}}>
					<Text style={{fontSize:12,color:'#c8c8c8'}}>{this.props.price}</Text>
					<Text style={{fontSize:11,color:'#c8c8c8'}}>起</Text>
				</View>
			</View>
			  	</Image> 
			</TouchableOpacity>
		}
			</View>
		)
	}

}

class Prebooking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isselect: false,
			phonemodal: false,
			ordermodal: false
		}
	}
	goback() {
		this.props.navigator.pop();
	}
	closephonemodal() {
		this.setState({
			phonemodal: false
		})
	}
	closeordermodal() {
		this.setState({
			ordermodal: false
		})
	}
	phonemodalopen() {
		this.setState({
			phonemodal: true
		})
	}
	select() {
		this.setState({
			isselect: !this.state.isselect
		})
	}
	gotosubmit() {
		this.props.navigator.push({
			name: '提交成功',
			component: Submitsuccess
		})
	}
	render() {
		let data = this.props.datas;
		return (
			<View style={{flex:1}}>
			<View style={{flex:1}}>
				<View style={styles.headbox}>
					<TouchableOpacity onPress={this.goback.bind(this)}>
						<Icon
							name='chevron-left'
							size={22}
							color='#ff9600'
							style={styles.goback}
						/>
					</TouchableOpacity>
					<Text style={styles.headtext}>填写订单信息</Text>
				</View>
				<View style={{flex:1}}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						bounces={false}
					>
						<View>
							<View style={styles.upbox}>
								<View style={styles.inner}>
									<Text style={styles.uptitle}>2016年4月18日 歌诗达赛琳娜 上海-济州-福冈-上海4晚5天</Text>
									<Text style={styles.uptime}>出发日期：20155-06-18</Text>
								</View>
							</View>
							<View style={styles.downbox}>
								<View style={styles.downinner}>
									<View style={styles.downtime}>
										<View style={styles.schedule}>
											<View style={styles.schleft}>
												<Text style={styles.port}>上海上船</Text>
												<Text style={styles.date}>1月24日</Text>
											</View>
											<View style={styles.schcenter}>
												<Text style={styles.port}>4晚5天</Text>
												<Image
													source={require('../../img/heng.png')}
													style={{width:width*0.133,height:8}}
													resizeMode='contain'
												/>
											</View>
											<View style={styles.schrigth}>
												<Text style={styles.port}>上海上船</Text>
												<Text style={styles.date}>1月24日</Text>
											</View>
										</View>
										<View style={styles.shipnamebox}>
											<Text style={styles.shipname}>歌诗达邮轮·大西洋号</Text>
										</View>
									</View>
									<View style={styles.room}>
										<ScrollView
										horizontal={true}
										showsHorizontalScrollIndicator={false}
										>
											<Room roomname={'内舱房'} price={'￥1866'} />
											<Room roomname={'海景房'} price={'￥1866'} />
											<Room roomname={'海景阳台'} price={'￥1999'} />
											<Room roomname={'套房'} price={'￥2999'} />
											<Room roomname={'套房'} price={'￥2999'} />
										</ScrollView>
									</View>
									<View style={styles.roombox}>
										<View style={styles.roominner}>
											<View>
												<Text style={{fontSize:14,marginBottom:10,lineHeight:14}}>标准内舱双人房</Text>
												<View style={{flexDirection:'row',marginBottom:7}}>
													<Text style={{fontSize:12,color:'#7b7e83'}}>25m²/1-6层/入住3人</Text>
													<Text style={{fontSize:12,color:'#c8c8c8'}}>(1间)</Text>
												</View>
												<TouchableOpacity>
													<View style={{flexDirection:'row',alignItems:'center'}}>
														<Text style={{fontSize:10,color:'#ff9b69',marginRight:7}}>儿童优惠</Text>
														<Icon
															name='caret-down'
															size={10}
															color='#ff9b69'
														/>
													</View>
												</TouchableOpacity>
											</View>
											<View>
												<View>
													<Text>￥1030</Text>
													<Text>/人起</Text>
												</View>
											</View>
										</View>
										<View style={styles.roominner}>
											<View>
												<Text style={{fontSize:14,marginBottom:10,lineHeight:14}}>标准内舱双人房</Text>
												<View style={{flexDirection:'row',marginBottom:7}}>
													<Text style={{fontSize:12,color:'#7b7e83'}}>25m²/1-6层/入住3人</Text>
													<Text style={{fontSize:12,color:'#c8c8c8'}}>(1间)</Text>
												</View>
												<TouchableOpacity>
													<View style={{flexDirection:'row',alignItems:'center'}}>
														<Text style={{fontSize:10,color:'#ff9b69',marginRight:7}}>儿童优惠</Text>
														<Icon
															name='caret-down'
															size={10}
															color='#ff9b69'
														/>
													</View>
												</TouchableOpacity>
											</View>
											<View>
												<View>
													<Text>￥1030</Text>
													<Text>/人起</Text>
												</View>
											</View>
										</View>
										<View style={styles.roominner}>
											<View>
												<Text style={{fontSize:14,marginBottom:10,lineHeight:14}}>标准内舱双人房</Text>
												<View style={{flexDirection:'row',marginBottom:7}}>
													<Text style={{fontSize:12,color:'#7b7e83'}}>25m²/1-6层/入住3人</Text>
													<Text style={{fontSize:12,color:'#c8c8c8'}}>(1间)</Text>
												</View>
												<TouchableOpacity>
													<View style={{flexDirection:'row',alignItems:'center'}}>
														<Text style={{fontSize:10,color:'#ff9b69',marginRight:7}}>儿童优惠</Text>
														<Icon
															name='caret-down'
															size={10}
															color='#ff9b69'
														/>
													</View>
												</TouchableOpacity>
											</View>
											<View>
												<View>
													<Text>￥1030</Text>
													<Text>/人起</Text>
												</View>
											</View>
										</View>
										
									</View>
								</View>
							</View>
							<View style={styles.contactsbox}>
								<View style={styles.contacts}>
									<View style={[styles.contactinner,styles.contactinner1]}>
										<Text style={{fontSize:12}}>联系人信息</Text>
										<TouchableOpacity onPress={this.phonemodalopen.bind(this)}>
											<Image
												source={require('../../img/phone.png')}
												style={styles.phonepic}
											/>
										</TouchableOpacity>
									</View>
									<View style={styles.contactinner}>
										<Text style={styles.size}>姓名</Text>
										<View style={styles.write}>
											<Icon
												name='asterisk'
												size={5}
												color='#ff0000'
											/>
											<TextInput
												placeholder='必填'
												placeholderTextColor='#868686'
												style={styles.input}
											/>
										</View>
									</View>
									<View style={styles.contactinner}>
										<Text style={styles.size}>手机</Text>
										<View style={styles.write}>
											<Icon
												name='asterisk'
												size={5}
												color='#ff0000'
											/>
											<TextInput
												placeholder='显示注册的手机号'
												placeholderTextColor='#868686'
												style={styles.input}
											/>
										</View>
									</View>
									<View style={styles.contactinner}>
										<Text style={styles.size}>手机</Text>
										<View style={styles.write}>
											<TextInput
												placeholder='用于接收电子档通知(可不填)'
												placeholderTextColor='#868686'
												style={styles.input}
											/>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.roat}>
								<TouchableOpacity>
									<View style={styles.roatup}>
										<Text style={{fontSize:12}}>济州岛+福冈岸上观光(观光)</Text>
										<Icon
											name='chevron-right'
											size={15}
											color='#abb4bc'
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.select.bind(this)}>
								{
									this.state.isselect?<View style={styles.roatdown}>
										<Image
											source={require('../../img/agree.png')}
											style={styles.check}
										/>
										<View style={{flexDirection:'row'}}>
											<Text style={{fontSize:12,color:'#6f7378'}}>请在提交前确认您已阅读</Text>
											<Text style={{fontSize:12,color:'#ffa45a'}}>平台条款(暂定名称)</Text>
										</View>	
									</View>:<View style={styles.roatdown}>
										<Image
											source={require('../../img/unagree.png')}
											style={styles.check}
										/>
										<View style={{flexDirection:'row'}}>
											<Text style={{fontSize:12,color:'#6f7378'}}>请在提交前确认您已阅读</Text>
											<Text style={{fontSize:12,color:'#ffa45a'}}>平台条款(暂定名称)</Text>
										</View>	
									</View>
								}
								</TouchableOpacity>
							</View>
						</View>					
					</ScrollView>

				</View>
				<Modal
						style={{height:height,width:width,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.1)',}} 
						isOpen={this.state.ordermodal}
						positon='center'
						onClosed={this.closeordermodal.bind(this)}
					>
						
					</Modal>
			</View>
			<View style={styles.btn}>
					<TouchableOpacity>
						<View style={{flexDirection:'row',width:width*0.5,height:45,justifyContent:'center',alignItems:'center'}}>
							<Text style={{fontSize:16}}>总额：</Text>
							<Text style={{fontSize:16,color:'#ff6600'}}>￥15460</Text>
							<Icon
								name='caret-up'
								color='#abb4bc'
								size={15}
								style={{marginLeft:width*0.03}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.gotosubmit.bind(this)}>
						<View style={{height:45,width:width*0.5,alignItems:'center',backgroundColor:'#ff9966',justifyContent:'center'}}>
							<Text style={{fontSize:16,color:'#fff'}}>去支付</Text>
						</View>
					</TouchableOpacity>
					
			</View>
			<Modal
				style={{height:height,width:width,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.1)',}} 
				isOpen={this.state.phonemodal}
				positon='center'
				onClosed={this.closephonemodal.bind(this)}
			>
				<View style={{flex:1,paddingLeft:width*0.13867,paddingTop:height*0.38}}>
					<View style={{height:180,width:width*0.72,backgroundColor:'#fff',alignItems:'center'}}>
						<View style={styles.titlebox}>
							<Text>选择要使用的类型</Text>
						</View>
						<View style={styles.phonebox}>
							<TouchableOpacity>
								<View style={{alignItems:'center',marginRight:width*0.1293}}>
									<Image
										source={require('../../img/phonelist.png')}
										style={styles.callpic}
									/>
									<Text style={{fontSize:10,color:'#7b7e83'}}>手机通讯录</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={{alignItems:'center'}}>
									<Image
										source={require('../../img/travel.png')}
										style={styles.callpic}
									/>
									<Text style={{fontSize:10,color:'#7b7e83'}}>常用旅客</Text>
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={this.closephonemodal.bind(this)} style={{width:width,marginTop:13,alignItems:'center'}}>
							<View >
								<Text style={{fontSize:13}}>取消</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View> 
			</Modal>
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
		left: -width * 0.3,
	},
	headtext: {
		fontSize: 15,
	},
	upbox: {
		backgroundColor: '#dee5eb',
		justifyContent: 'center',
		width: width,
		height: 130,
	},
	inner: {
		height: 100,
		backgroundColor: '#fff',
		paddingVertical: 15,
		paddingHorizontal: width * 0.02533,
	},
	uptitle: {
		fontSize: 14,
		marginBottom: 18
	},
	downbox: {
		backgroundColor: '#dee5eb',
		paddingBottom: 15
	},
	downinner: {
		backgroundColor: '#fff'
	},
	downtime: {
		height: 100,
		paddingTop: 18
	},
	schedule: {
		flexDirection: 'row',
		paddingHorizontal: width * 0.02533,
		justifyContent: 'space-between'
	},
	port: {
		fontSize: 12,
		marginBottom: 12
	},
	schcenter: {
		alignItems: 'center'
	},
	date: {
		fontSize: 18
	},
	schrigth: {
		alignItems: 'center'
	},
	schleft: {
		alignItems: 'center'
	},
	shipnamebox: {
		width: width,
		alignItems: 'center',
	},
	shipname: {

	},
	room: {

	},
	roominner: {
		width: width,
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5',
		paddingVertical: 14,
		paddingHorizontal: width * 0.02667,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	contactsbox: {
		width: width,
		height: 190,
		backgroundColor: '#dee5eb',
	},
	contacts: {
		width: width,
		height: 175,
		backgroundColor: '#fff',
		paddingLeft: width * 0.02667,
		paddingRight: width * 0.02667
	},
	contactinner: {
		height: 40,
		borderBottomColor: '#eaeaea',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	contactinner1: {
		justifyContent: 'space-between',
	},
	phonepic: {
		width: width * 0.0453,
		height: 17,
		marginRight: width * 0.02667
	},
	write: {
		flexDirection: 'row',
		marginLeft: width * 0.10667
	},
	size: {
		fontSize: 12
	},
	input: {
		width: width * 0.75,
		height: 13,
		fontSize: 12
	},
	roat: {
		width: width,
		alignItems: 'center'
	},
	roatup: {
		width: width * 0.94667,
		height: 45,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#e7e7e7',
		alignItems: 'center'
	},
	roatdown: {
		width: width * 0.94667,
		height: 45,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#e7e7e7',
		alignItems: 'center',
	},
	check: {
		width: width * 0.02,
		height: 15,
		marginRight: 10
	},
	btn: {
		width: width,
		height: 45,
		borderTopWidth: 1,
		borderTopColor: '#e7e7e7',
		flexDirection: 'row'
	},
	titlebox: {
		width: width * 0.667,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ececec'
	},
	phonebox: {
		width: width * 0.667,
		height: 100,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ececec'
	},
	callpic: {
		width: width * 0.0613,
		height: 46,
		marginBottom: 12
	}
})

module.exports = Prebooking;