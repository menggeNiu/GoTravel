import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	ListView,
	Dimensions,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Lunbo from '../app/main/lunbo';
import Fenlei from '../app/main/fenlei';
import Brand from '../app/main/brand';
import Hotb from '../app/main/hotb';
import Search from '../app/main/search';
let arr = [];
let {
	width,
	height
} = Dimensions.get('window');

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isfixed: false
		}

	}
	onscroll(event) {
		console.log(event.nativeEvent)
		let data = event.nativeEvent;
		if (data.contentOffset.y >= height * 0.22) {
			this.setState({
				isfixed: true
			})
		} else {
			this.setState({
				isfixed: false
			})
		}

	}
	gosearch() {
		this.props.navigator.push({
			name: '搜索页',
			component: Search
		})
	}
	render() {
		return (
			<View style={{flex:1,position:'relative'}}>
			<Image 

			/>
				<ScrollView
					ref={(scrollView) => { _scrollView = scrollView; }}
					scrollEnabled={true}
					contentContainerStyle={styles.contentContainer}
					showsVerticalScrollIndicator={false}
					bounces={false}
					stickyHeaderIndices={[1]}
					onScroll={this.onscroll.bind(this)}
         			scrollEventThrottle={200}

				>
					<Lunbo navigator={this.props.navigator} data={this.props.data}/>
					{
						this.state.isfixed?<View style={{width:width,alignItems:'center',position:'absolute',top:height*0.227,zIndex:10,backgroundColor:'#fff',paddingVertical:10,borderBottomWidth:1,borderBottomColor:'rgb(239,239,239)'}}>
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
								onFocus={this.gosearch.bind(this)}
							/>
							</View>
						</View>
					</View>:<View style={{width:width,alignItems:'center',position:'absolute',top:height*0.22,zIndex:10,height:32.5,}}>
						<View style={[styles.inputbox,{backgroundColor:'#fff',borderColor:'#dee5eb'}]}>
							<Icon
								name='search'
								size={18}
								color='#cacbcc'
							/>
							<View>
								<TextInput
								style={styles.search}
								placeholder='请输入游轮目的地/关键字'
								placeholderTextColor='#cacbcc'
								onFocus={this.gosearch.bind(this)}
							/>
							</View>
						</View>
					</View>
					}
					<Fenlei navigator={this.props.navigator} data={this.props.data}/>
					<Brand navigator={this.props.navigator} data={this.props.data}/>
					<Hotb  navigator={this.props.navigator} data={this.props.data}/>
					<TouchableOpacity>
						<View style={styles.more}>
							<Text style={styles.moretext}>查看更多</Text>
							<Icon
								name='angle-double-right'
								color='#b0b0b0'
								/>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {},
	inputbox: {
		height: 32.5,
		borderWidth: 1,
		width: width * 0.9333,
		borderRadius: 5,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	search: {
		width: width * 0.8,
		height: 16,
		fontSize: 12,
	},
	moretext: {
		fontSize: 14,
		marginRight: width * 0.02,
		color: '#b0b0b0'
	},
	more: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 15
	},
})

module.exports = Root;