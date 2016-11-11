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
	ScrollView
} from 'react-native';
let {
	width,
	height
} = Dimensions.get('window');
import JKLine from '../JKLine/JKLine';
class Fenlei extends Component {
	gotoJKLine(titletext) {
		this.props.navigator.push({
			name: 'datail',
			component: JKLine,
			params: {
				title: titletext
			}
		})
	}
	render() {
		let data = this.props.data.shouye.data.line_list;
		return (

			<View style={styles.fenleibox}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{
						data.map((value,key)=>{
							return <TouchableOpacity onPress={this.gotoJKLine.bind(this,value.line_name)} key={key}>
										<View style={styles.box}>
										<Image
											source={{uri:value.pic}}
											style={styles.seleimg}
											resizeMode="contain"
										/>
										<Text style={styles.seletext}>{value.line_name}</Text>
										</View>
									</TouchableOpacity>
						})
					}
				</ScrollView>
			</View>


		)
	}
}

const styles = StyleSheet.create({
	fenleibox: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 109,
	},
	seleimg: {
		height: 36,
		width: width * 0.13
	},
	seletext: {
		textAlign: 'center',
		marginTop: 12.5
	},
	box: {
		width: width * 0.25,
		alignItems: 'center'
	}
})

module.exports = Fenlei;