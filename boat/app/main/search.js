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
let {
	width,
	height
} = Dimensions.get('window');
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	goback() {
		this.props.navigator.pop()
	}
	render() {
		let data = this.props.datas;
		return (
			<View style={{flex:1}}>
				<View style={styles.input}>
					<View style={[styles.inputbox,{backgroundColor:'#dee5eb',borderColor:'#dee5eb',width:width*0.7}]}>
						<Icon
							name='search'
							size={18}
							color='#cacbcc'
						/>
						<View>
							<TextInput
							style={{width: width * 0.6,height: 16,fontSize: 12,}}
							placeholder='请输入游轮目的地/关键字'
							placeholderTextColor='#cacbcc'
						/>
						</View>
					</View>
					<TouchableOpacity onPress={this.goback.bind(this)}>
						<View style={{width:54,height:33,alignItems:'center',justifyContent:'center'}}>
							<Text style={{fontSize:13,color:'#ff9966'}}>取消</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb'}}>
					<View style={{marginTop:15,alignItems:'center',backgroundColor:'#fff'}}>
						<View style={styles.item}>
							<Text style={styles.text}>济州岛</Text>
							<TouchableOpacity>
								<Image
									source={require('../../img/del.png')}
									style={styles.pic}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<Text style={styles.text}>大西洋号</Text>
							<TouchableOpacity>
								<Image
									source={require('../../img/del.png')}
									style={styles.pic}
								/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<View style={styles.del}>
								<Image
									source={require('../../img/rubish.png')}
									style={styles.delpic}
								/>
								<Text style={{fontSize:14,marginLeft:6}}>清除所有搜索历史	</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		flexDirection: 'row',
		width: width,
		height: 75,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(239,239,239)',
		justifyContent: 'center',
	},
	search: {
		width: width * 0.8,
		height: 16,
		fontSize: 12,
	},
	inputbox: {
		height: 33,
		borderWidth: 1,
		width: width * 0.9333,
		borderRadius: 5,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	item: {
		width: width * 0.94,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 45,
		borderBottomColor: '#e5e5e5',
		borderBottomWidth: 1
	},
	text: {
		fontSize: 14
	},
	pic: {
		width: 18,
		height: 18
	},
	del: {
		flexDirection: 'row',
		height: 45,
		width: width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	delpic: {
		width: 17,
		height: 17
	}
})

module.exports = Search;