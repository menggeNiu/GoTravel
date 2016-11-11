import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
	ListView
} from 'react-native';
let {
	width,
	height
} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
class Hotb extends Component {
	constructor(props) {
		super(props);
		ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			datasource: ds.cloneWithRows(this.props.data.shouye.data.tuijian_list),
		}
	}
	_renderhot(rowData) {
		return (
			<TouchableOpacity>
				<View style={styles.hotlist}>
					<Image
						source={{uri:'http://101.201.211.41:8088'+rowData.thumb}}
						style={styles.listbg}
						resizeMode='stretch'
					>
						<View style={styles.bgview}>
							<View style={styles.blackbox}>
								<View style={styles.point}>
									<Image 
										source={require('../../img/gangkou.png')}
										style={styles.pointicon}
										resizeMode='contain'
									/>
									<Text style={styles.pointtext}>上海出发</Text>
								</View>
								<View style={styles.baoming}>
									<Image 
										source={require('../../img/baoming.png')}
										style={styles.baomingicon}
										resizeMode='contain'
									/>
									<Text style={styles.baomingtext}>请提前10天报名</Text>
								</View>
								<View
								style={styles.star}
								>
									<Icon
									name='star-o'
									color='#fff'
									size={18}
								/>
								</View>
							</View>
						</View>
					</Image>
					<View style={styles.gogo}>
						<Text style={styles.productname}>{rowData.product_name}</Text>
						<View style={styles.pricebox}>
							<View style={styles.shipname}>
								<Image
									source={require('../../img/lun.png')}
									resizeMode='contain'
									style={styles.shipicon}
								/>
								<Text style={styles.brandname}>{rowData.brand_name}-{rowData.ship_name}</Text>
							</View>
						</View>
						<View style={styles.price}>
								<Text style={styles.rmb}>{rowData.min_price}</Text>
								<Text style={styles.qi}>起</Text>
							</View>
					</View>
				</View>
				</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.hotsellbox}>
						<View style={styles.hottitle}>
							<View style={styles.titleleft}>
								<Image
									source={require('../../img/hot.png')}
									style={{width:width*0.066,height:height*0.03755}}
									resizeMode='stretch'
								/>
								<Text>热销产品</Text>
							</View>
							<TouchableOpacity>
								<View style={styles.titleright}>
									<Text style={styles.righttext}>更多</Text>
									<Icon 
										name='angle-double-right'
										color='#abb4bc'
										size={18}
									/>
								</View>
							</TouchableOpacity>
						</View>
						<ListView 
							dataSource={this.state.datasource}
							renderRow = {this._renderhot.bind(this)}
							enableEmptySections = {true}
							showsHorizontalScrollIndicator ={false}
							bounces={false}
							style={{marginBottom:20,}}
						/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	hotlist: {
		width: width * 0.95,
		height: 240,
		alignSelf: 'center',
		marginBottom: 20
			// borderWidth: 1,
			// borderColor: '#dcdcdc',
	},
	listbg: {
		width: width * 0.96,
		height: 165,
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2

	},
	bgview: {
		width: width * 0.9466,
		height: 165,
		justifyContent: 'flex-end'
	},
	blackbox: {
		height: 26,
		backgroundColor: 'rgba(0,0,0,0.3)',
		flexDirection: 'row',
		alignItems: 'center'
	},
	point: {
		flexDirection: 'row',
		marginLeft: width * 0.0266,
		marginRight: width * 0.0773

	},
	pointicon: {
		width: width * 0.07,
		height: 12.5,
	},
	pointtext: {
		color: '#fff',
		fontSize: 12
	},
	baomingicon: {
		height: 14,
		width: width * 0.07,
	},
	baoming: {
		flexDirection: 'row',
	},
	baomingtext: {
		color: '#fff',
		fontSize: 12
	},
	star: {
		marginLeft: width * 0.28
	},
	gogo: {
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: '#dcdcdc',
		borderBottomLeftRadius: 2,
		borderBottomRightRadius: 2,
		position: 'relative',
		paddingLeft: width * 0.024,
		paddingBottom: 10,
	},
	productname: {
		fontSize: 14,
		marginTop: 10,
		lineHeight: 20
	},
	shipname: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: -35,
		alignItems: 'center'
	},
	price: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
		marginRight: width * 0.0266
	},
	shipicon: {
		width: width * 0.033,
		height: 13
	},
	brandname: {
		color: '#a7a7a7',
		fontSize: 11,
		marginLeft: width * 0.0266
	},
	rmb: {
		fontSize: 20,
		color: '#ff693e'
	},
	qi: {
		color: '#bbbbbb',
		fontSize: 13
	},

	hotsellbox: {
		width: width,
		alignItems: 'center'
	},
	hottitle: {
		flexDirection: 'row',
		height: 40,
		width: width * 0.9466,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	titleright: {
		flexDirection: 'row',
		width: width * 0.12,
		justifyContent: 'space-around'
	},
	titleleft: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width * 0.248,
		justifyContent: 'space-around'
	},
	righttext: {
		fontSize: 16,
		color: '#abb4bc'
	},


})

module.exports = Hotb;