export const CONSTANTS ={
    LOGIN:'Sign In',
    APPNAME:"Japp",
    APPCOLOR:"#4083cc",
    EMAIL:"Email address:",
    PASSWORD:"Password:",
    FORGOTPASSWORD:"Forgot Password ?",
    TEXTLABELCOLOR:"#00a662",
    SIGNUPTEXT:'Don\'t have an account? ',
    SIGNUP:'Sign Up'

}
export const COLORS = {
  WHITE:'#FFF',
  BORDERCOLOR:'#d6dce1',
  TEXTLABELCOLOR:"#606060",
  BLACK:'#2b2b2b',
  APPCOLOR:"#4083cc",
  PLACEHOLDERTEXTCOLOR:"#aab1bb",
  BUTTON:'#83e82c',
  HIGHTLIGHT:'#67bcf7'
}
export const styles = {
  MainView:{
    height: '100%',
     width: '100%',
    flex:1,
   },
  headerView:{ justifyContent: 'center', alignItems: 'center', height: 200, paddingTop: 40},
  header:{
    color:COLORS.APPCOLOR,
    fontFamily:'Lato',
    fontSize:70
  },
  loginView:{ marginLeft: '10%',marginRight: '10%'},
    container: {
        flex: 1,
      justifyContent: 'center'
    },
    color: {
        color: '#000'
    },
    text: {
        alignSelf: 'center',
        color: '#C0C0C0',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    LoginText: {

        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Lato-Bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    signin:{
      justifyContent:'center',
      borderRadius:5,
       backgroundColor: COLORS.BUTTON,
         marginTop: 20,
         marginBottom:10,
         height: 50
       },
       textHeader:{ color:COLORS.TEXTLABELCOLOR, marginTop: 10, marginBottom:10},
       textInputLayout:{borderBottomColor: COLORS.BORDERCOLOR, borderWidth: 0.2, color:COLORS.BLACK , height: 50,borderRadius:5,paddingLeft:20,fontSize:17,justifyContent:'center'},
       welcomeText:{
         fontSize:35,
         marginLeft:20,
         marginRight:60,
         fontWeight:'bold'
       },
       iconCol:{
         flex:1,
         flexDirection:'column',

         justifyContent:'center',
         textAlign:'center',
         alignItems:'center'
     },
     signup:{
       margin:15,
       fontSize:15
     },
     signupColor:{
       color:COLORS.HIGHTLIGHT
     }
  };
