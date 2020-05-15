import React from 'react';
import { Alert, TextInput, Text, View, TouchableOpacity } from 'react-native';

import styles from './StylesSheets/Styles' 

function ShowButton(props) {
        
        let value = "Start!"
        
        if(props.val){
            value = "Stop!"
        }
        else{
            value = "Start!"
        }
        
        return(
            <View style={{flexDirection:'row',padding:30,paddingRight:50}}>
                <TouchableOpacity
                style = {styles.button}
                activeOpacity = {.5} 
                onPress = {props.onStart}
                >                           
                <Text style={styles.buttonText}>{value}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress = {props.onReset}
                >
                    <Text style={styles.buttonText}>Reset!</Text>
                </TouchableOpacity>
            </View>
            
    )
}

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            min : '00',
            sec : '00',
            hr  : '00',
            start: false,
        }
    } 
    
    _alertHandle = () => {
        
        Alert.alert(
            'Alert!!!!',
            'Time Up!',
            [
                {text: 'Yes', onPress: () => console.log('Yes Pressed')},
            ],
            { cancelable: false }
        );
    }

    decrement = () => { 
        if(this.state.start){
            if(this.state.sec > 0){
                this.setState(prevState => ({
                    sec: String(parseInt(prevState.sec) - 1),
                }))
            }else if(this.state.min > 0){
                
                this.setState(prevState => ({
                min: String(parseInt(prevState.min) - 1 ),
                sec: String(parseInt(prevState.sec) + 59),
              
                }))
            
            }else if(this.state.hr > 0){
                
                this.setState(prevState => ({
                    hr: String(parseInt(prevState.hr) - 1),
                    min: String(parseInt(prevState.min) + 59),
                    sec: String(parseInt(prevState.sec) + 59),
                
                }))
            }else{

                this.setState(prevState => ({
                    start: false,
                }))
                this._alertHandle()
            
            }

        }
    }

    onPressButton = () => {
        this.setState({
            start : !this.state.start
        })
    }

    onPressReset = () => {
        this.setState({
            hr: '00',
            min: '00',
            sec: '00',
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.decrement,1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.sec === ""){
            this.setState({
                sec: 0,
            })
        }
        if(this.state.min === ""){
            this.setState({
                min: 0,
            })
        }
        if(this.state.hr === ""){
            this.setState({
                hr: 0,
            })
        }
        if(this.state.sec >= 60 ){
            let changeMin = this.state.sec/60
            let changeSec = this.state.sec%60
            this.setState(prevState => ({
               min: String(parseInt(prevState.min) + parseInt(changeMin)),
               sec: String(parseInt(changeSec)),
            }))
         }
         if(this.state.min >= 60 ){
            let changeHr = this.state.min/60
            let changeMin = this.state.min%60
            this.setState(prevState => ({
               hr: String(parseInt(prevState.hr) + parseInt(changeHr)),
               min: String(parseInt(changeMin)),
            }))
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)   
    }
    
    render(){
        return(
        <View style = {styles.container}>

            <View style={{flex:4}}>  
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                
                <Text style={styles.text}> Hours </Text>
                <Text style={{color:'black',fontSize:30,}}> : </Text>
                <Text style={styles.text}> Minutes </Text>
                <Text style={{color:'black', fontSize:30,}}> : </Text>
                <Text style={styles.text}> Seconds </Text>
            
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                
                <TextInput
                    style = {styles.textInput} 
                    keyboardType={"numeric"}
                    editable={!this.state.start}
                    value = {String(this.state.hr)}
                    onChangeText = {(hr) => this.setState({hr : hr})}
                />
                <Text style={{color:'black' ,fontSize:30,}}> : </Text>
                <TextInput
                    style = {styles.textInput} 
                    keyboardType={"numeric"}
                    editable={!this.state.start}
                    value = {String(this.state.min)}
                    onChangeText = {(min) => this.setState({min : min})}
                />
                
                <Text style={{color:'black',fontSize:30,}}> : </Text>
                
                <TextInput
                    style = {styles.textInput} 
                    keyboardType={"numeric"}
                    editable={!this.state.start}
                    value = {String(this.state.sec)}
                    onChangeText = {(sec) => this.setState({sec : sec})}
                />

            </View>
            </View>
            <View style={{flex:1,padding:40}}>
            <ShowButton 
                onStart={this.onPressButton}
                onReset={this.onPressReset}
                val={this.state.start} 
            />
            </View>
        </View>
        );
    }
}

