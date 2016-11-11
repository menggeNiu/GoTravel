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

class Brand extends Component {
	constructor(props) {
		super(props);
		ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			datasource: ds.cloneWithRows(this.props.data.shouye.data.branch_list),
		}
	}
	_render(rowData) {
		return (
			<TouchableOpacity>
				<Image
				source={{uri:rowData.logo}}
				style={{height:70,width:width*0.32,marginLeft:width*0.0267}}
			/>
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.brandbox}>
				<View style={styles.brand}>
					<Image 
						source={require('../../img/brand.png')}
						style={styles.brandimg}
						resizeMode='contain'
					/>
					<ListView
					dataSource={this.state.datasource}
					renderRow = {this._render.bind(this)}
					enableEmptySections = {true}
					horizontal={true}
					showsHorizontalScrollIndicator ={false}
					// bounces={false}
					/>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	brandbox: {
		flex: 1,
		width: width,
		height: 145,
		justifyContent: 'center',
		backgroundColor: '#dee5eb'
	},
	brand: {
		height: 135,
		backgroundColor: '#fff',
	},
	brandimg: {
		width: width * 0.244,
		height: 25,
		marginLeft: width * 0.0267,
		marginTop: 10,
		marginBottom: 15
	},
})

module.exports = Brand;