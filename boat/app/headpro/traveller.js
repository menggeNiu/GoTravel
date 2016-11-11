import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Image,
	Dimensions,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let width = Dimensions.get('window').width;
class Traveller extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	back() {
		this.props.navigator.pop()
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.headbox}>
					<TouchableOpacity onPress={this.back.bind(this)}>
						<Icon
							name='chevron-left'
							size={22}
							color='#ff9600'
							style={styles.goback}
						/>
					</TouchableOpacity>
					<Text style={styles.headtext}>常用游客资料</Text>
					<TouchableOpacity>
						<View style={styles.submit}>
							<Text style={styles.submittext}>确定</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb',alignItems:'center'}}>
					
				</View>
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
		left: -110
	},
	headtext: {
		fontSize: 15,
	},
	submit: {
		height: 42,
		right: -110,
		justifyContent: 'center',
	},
	submittext: {
		fontSize: 15,
		color: '#ff9966',
	},
})

module.exports = Traveller;