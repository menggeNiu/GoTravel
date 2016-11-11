import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import Headto from '../headpro/headpro';
import Swiper from 'react-native-swiper';
let arr = [];
let {
	width,
	height
} = Dimensions.get('window');
class Lunbo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,

		}
	}
	gotoheadto(value) {
		this.props.navigator.push({
			name: 'lunbo',
			component: Headto,
			params: {
				datas: value
			}
		})
	}
	render() {
		let data = this.props.data.lunbo;
		return (
			<View>
				<Swiper 
					horizontal={true} 
					autoplay 
					height={height * 0.255}
					showsButtons={this.state.hover}
					dot={<View style={{backgroundColor: '#dee5eb', width: 6, height: 6, borderRadius: 4, marginLeft: 10, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
					activeDot={<View style={{backgroundColor: '#9ca0be', width: 6, height: 6, borderRadius: 3, marginLeft: 10, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
					paginationStyle={{
	            		bottom: height*0.0337, right: width*0.1,
	          		}}

				>
				{
					data.map((value,key)=>{
						return <TouchableOpacity onPress={this.gotoheadto.bind(this,value)} key={key}>
									<Image
									source={{uri:value.src}}
									style={styles.lunboimg}
									>
									<View >
									</View>
								</Image>
							</TouchableOpacity>
					})
				}
				</Swiper>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	lunboimg: {
		width: width,
		height: 170,
	},
})

module.exports = Lunbo;