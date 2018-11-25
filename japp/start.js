import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Alert,
  TextInput,
  StatusBar,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import {
    Container,
    Content,
    Text,
  } from "native-base";
  import appImage from './src/images/back.png';
  import {connect} from 'react-redux';
  import {CONSTANTS,styles,COLORS} from './Constants';



type Props = {};


 class StartPage extends Component<Props> {
    constructor(props){
    super(props);
    this.state={

      email: '',
      password: ''
    }
    this.org = this.org.bind(this);
    }

  login(){

  }
  org()
{


}
  render() {

    return (
        <Container style={styles.container}>
        <StatusBar
          backgroundColor="#2B2B2B"
          barStyle="light-content"
          />
        <View style={{flex:1,backgroundColor:COLORS.WHITE}}>
          <View style={{flex:2.5,justifyContent:'center'}}>
            <Text style={styles.welcomeText}>{'Hey There! Welcome Back!'}</Text>
          </View>
          <View style={{flex:5,padding:20}}>
          <Text style={styles.textHeader}>{CONSTANTS.EMAIL}</Text>
            <TextInput

              style={styles.textInputLayout}
              value={this.state.email}
              onChangeText={email => this.setState({ email: email  })}
              keyboardType='email-address'
              autoCapitalize="none"
              placeholder="you@example.com"
              placeholderTextColor={COLORS.PLACEHOLDERTEXTCOLOR}
            />
            <Text style={styles.textHeader}>{CONSTANTS.PASSWORD}</Text>
            <TextInput

              style={styles.textInputLayout}
              secureTextEntry value={this.state.password}
              onChangeText={password => this.setState({ password: password  })}
              placeholderTextColor={COLORS.PLACEHOLDERTEXTCOLOR}
              placeholder="*******"
            />
            <TouchableHighlight style={styles.signin}>
            <Text style={styles.LoginText}>{CONSTANTS.LOGIN}</Text>
          </TouchableHighlight>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={styles.iconCol}>
                <Image source={require('./src/images/twitter.png')} style={{width:40,height:40}}/>
              </View>
              <View style={styles.iconCol}>
              <Image source={require('./src/images/facebook.png')} style={{width:40,height:40}}/>
              </View>
              <View style={styles.iconCol}>
              <Image source={require('./src/images/google.png')} style={{width:40,height:40}}/>
              </View>
            </View>
          </View>
          <View style={{flex:2}}>
            <Text style={styles.signup}><Text>{CONSTANTS.SIGNUPTEXT}</Text><Text style={styles.signupColor}>{CONSTANTS.SIGNUP}</Text></Text>

          </View>
        </View>
      </Container>
    );
  }
}
export default connect(null, null)(StartPage);



  // <Header androidStatusBarColor='#2D2D2D' style={{backgroundColor:'#2B2B2B'}}>
  //       <Left style={{marginLeft:5}}>
  //         <Icon name='ios-menu' style={{color:'#fff'}} onPress={() => this.props.navigation.openDrawer()} />
  //         </Left>
  //       <Body style={{align:'center'}} >
  //         <Image source={require('../img/pragyaam-white.png')} style={{width:114.5, height: 20.5}} />
  //       </Body>
  //       <Right style={{marginRight:5}}>
  //         <Icon name='ios-menu' style={{color:'#2D2D2D'}}  />
  //         </Right>
  //     </Header>
