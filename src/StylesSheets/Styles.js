import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    container: {
        flex: 5,
        backgroundColor:'#8DAFBC', 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:100,
    },
    button: {
        alignItems: "center",
        justifyContent:'space-evenly',
        backgroundColor: 'black',
        width:100,
        margin:50,
        height:100,
        borderWidth:5,
        borderRadius:50,
        borderColor:'#729CC2',
    },
    buttonText: {
        justifyContent:'space-evenly',
        color: 'white',
        fontSize: 20,
       
    },
    textInput: {
        alignItems:'center',
        fontSize:25,
        fontWeight:'bold',
        textAlign: 'center',
        height:80,
        width:80,
        alignSelf:'stretch',
        borderRadius:40,
        borderWidth:4,
        margin:10,
        borderColor:'#ABC9D2',
        backgroundColor :'gray',
        color:'white',
    
    },
    text:{
        fontSize: 15,
        textAlign: 'center',
        alignItems:'center',
        paddingTop:28,
        fontWeight:'bold',
        height:80,
        width:80,
        borderRadius:40,
        borderWidth:4,
        margin:10,
        borderColor:'#ABC9D2',
        backgroundColor :'gray',
        color:'white',
    }
    
});
