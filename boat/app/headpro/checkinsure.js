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
import Traveller from '../headpro/traveller'
let width = Dimensions.get('window').width;
class Checkin extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	back() {
		this.props.navigator.pop()
	}
	traveller() {
		this.props.navigator.push({
			name: '常用游客资料',
			component: Traveller
		})
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
					<Text style={styles.headtext}>确认入住人</Text>
					<TouchableOpacity>
						<View style={styles.submit}>
							<Text style={styles.submittext}>提交</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{flex:1,backgroundColor:'#dee5eb',alignItems:'center'}}>
					<View style={styles.box}>
						<View style={styles.inner}>
							<Text style={styles.product_name}>高级海景阳台双人房/可入住2人</Text>
						</View>
						<TouchableOpacity onPress={this.traveller.bind(this)}>
							<View style={styles.inner}>
								<Text style={styles.name}>刘丽</Text>
								<Text style={styles.phone}>13255921659</Text>
							</View>
							<View style={styles.inner}>
								<Text style={styles.name}>李娜</Text>
								<Text style={styles.phone}>13569854632</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.box}>
						<View style={styles.inner}>
							<Text style={styles.product_name}>高级套房/可入住3人</Text>
						</View>
						<TouchableOpacity onPress={this.traveller.bind(this)}>
							<View style={styles.inner}>
								<Text style={styles.name}>刘丽</Text>
								<Text style={styles.phone}>13255921659</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.inner}>
								<Image
									source={require('../../img/people.png')}
									style={styles.people}
								/>
								<Text style={styles.selecttext}>选择入住人</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.box}>
						<View style={styles.inner}>
							<Text style={styles.product_name}>标准三人房/可入住3人</Text>
						</View>
						<TouchableOpacity>
							<View style={styles.inner}>
								<Image
									source={require('../../img/people.png')}
									style={styles.people}
								/>
								<Text style={styles.selecttext}>选择入住人</Text>
							</View>
						</TouchableOpacity>
					</View>
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
		left: -width * 0.16
	},
	headtext: {
		fontSize: 15,
	},
	ordernum: {
		backgroundColor: '#fff',
		width: width,
		height: 70,
		marginVertical: 15,
		paddingLeft: width * 0.0133,
		paddingVertical: 15,
		justifyContent: 'space-between'
	},
	submit: {
		height: 42,
		right: -width * 0.1533,
		justifyContent: 'center',
	},
	submittext: {
		fontSize: 15,
		color: '#ff9966',
	},
	box: {
		width: width * 0.9467,
		backgroundColor: '#fff',
		marginTop: 10,
	},
	product_name: {
		fontSize: 14
	},
	inner: {
		height: 46,
		width: width * 0.9467,
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		fontSize: 13,
		color: '#6b6969',
		marginRight: width * 0.08267
	},
	phone: {
		fontSize: 13,
		color: '#6b6969',
	},
	people: {
		width: 19,
		height: 20,
		marginRight: width * 0.0267
	},
	selecttext: {
		fontSize: 14,
		color: '#ff9966',
	}

})

module.exports = Checkin;