import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput ,
          TouchableWithoutFeedback, TouchableOpacity,Alert, Keyboard} from 'react-native';

const currencyPerRupee = {

  Dollar: 0.014,
  Euro: 0.012,
  Pound: 0.011,
  Yen: 0.013,
  Rupee: 1,
  CanDollar: 0.017,
  Bitcoin: 0.000001,
  Dinar: 0.0043,
  Rubel:0.99,
}


export default class App extends React.Component {

  
convertCurrency = currency =>{
  if(this.state.inputValue === "")
  {
    Alert.alert("Please enter a value ");
  }
  let result = parseFloat(this.state.inputValue )* currencyPerRupee[currency];

  this.setState({
    resultValue: result.toFixed(2),
  })
};    

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: '0.0',
    }
  }

    render() {
        return (

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View style={styles.screenView}>

              <View style = {styles.resultContainer}>
                <Text style={styles.resultValue}>

                  {this.state.resultValue}

                </Text>
              </View>

              <View style = {styles.inputContainer}>

                  <TextInput style={styles.input}
                    selectionColor = '#FFF'
                    keyboardType = 'numeric'
                    placeholder = 'Enter Value'
                    placeholderTextColor = '#DBFCFF'
                    value = {this.state.inputValue}
                    onChangeText = {(inputValue) => 
                        this.setState(
                          {inputValue}
                          )}
                  ></TextInput>
              
              </View>

              <View style = {styles.convertContainer}>
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Dollar')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> $ </Text>
                  
              </TouchableOpacity>
        
              <TouchableOpacity  
                onPress={()=> {this.convertCurrency('Euro')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> € </Text>
                  
              </TouchableOpacity>
        
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Pound')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> £ </Text>
                  
              </TouchableOpacity>
           
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Yen')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> ¥ </Text>
                  
              </TouchableOpacity>
        
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Rupee')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> ₹ </Text>
                  
              </TouchableOpacity>
           
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('CanDoller')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> Can$ </Text>
                  
              </TouchableOpacity>
          
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Bitcoin')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> ₿ </Text>
                  
              </TouchableOpacity>
            
                <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Dinar')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> DA </Text>
                  
              </TouchableOpacity>

              <TouchableOpacity 
                
                onPress={()=> {this.convertCurrency('Rubel')}}
                style={styles.convertButton}>
                        <Text style = {styles.convertText}> RUB </Text>
                  
              </TouchableOpacity>
           
            </View>
          </View>
        </SafeAreaView>

        </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#083D77',
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    height:70,
    marginTop:20,
    justifyContent: 'center',
    borderColor: '#C7EFCF',
    backgroundColor: '#EEF5DB',
    alignItems: 'center',
    borderWidth: 5  ,
    borderRadius: 20,
  },
  resultValue:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#333745',
  },
  inputContainer:{
    height:70,
    fontSize:60,
    color: '#333745',
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',  
    borderColor: '#C1c1c1',
    borderWidth: 5  ,
    borderRadius: 20,
  },
  input:{
    fontSize:20,
    color: '#CAD5E2',
  },
  inputValue: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#333745',
  },
  convertButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //marginTop:20,
    height:100,
    width:"33.3%",
    backgroundColor: '#03203C',
    borderRadius: 8,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  convertContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:20,
    backgroundColor: '#c1c1c1',
    borderRadius: 10,
    borderWidth: 3,
  },
  convertText:{
    fontSize:28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
});
