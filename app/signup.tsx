import react from 'react';
import { Button } from '@/components/buttons';
import {StyleSheet, View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '@/assets/svg/background.svg';
import { InputField } from '@/components/input';

const style=StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  top:{
    position: "absolute",
    top: 50,
    left: 20,
  },
  topContainer:{
    position: "absolute",
    top: 90,
    left: 40,
  },
    heading:{ 
        fontSize: 30,
      fontWeight: '600',
      color: "black",
      
    },
    subhead:{
        fontSize: 17,
        color:"#5A8C88",
        paddingTop: 10,
    },
    inputs:{
        marginTop: 15,
        borderColor: "#C8EDEA",
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
        color: "black",
        width: "95%",
    }, 
    place:{
        position: "absolute",
        top: 250,
        alignSelf: "center",
        width: "90%",
        padding: 10,
        left: 20,
    },
    button:{
    backgroundColor:"#549B96",
    // paddingVertical: 12,
    // margin:10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
    borderWidth:1,
    boxShadow: "0px 6px 16px -3px rgba(0,0,0,0.46)",
    height:55,
    alignSelf:'center',
    width:'90%',
    marginTop:0,
    padding: 10,
    position : "absolute",
    },
    buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    }, 
    textblwbtn:{
    marginTop:10,
    textAlign:"center",
    fontSize:14,},
    logintxt:{
      color:"#428581",
    },

    
})


export default function Login() {
    return (
        <View style={style.container}>
        <Background/>
        <View style={style.top}>
            <AntDesign name="left" size={24} color="black" />
        </View>
        <View style={style.topContainer}>
            <Text style={style.heading}>Create</Text>
            <Text style={style.heading}>Account ✨</Text>
            <Text style={style.subhead}>Join to start tracking your finances</Text>
        </View>
        <View style={style.place}>
            <InputField placeholder="Jane Doe"  label='Full Name' style={style.inputs}/>
            <InputField placeholder="jane.doe@example.com" label='Email Address' style={style.inputs}/>
            <InputField placeholder="Create a strong password" label='Password' style={style.inputs}/>
        </View>
        <SafeAreaView>
            <Button title="Create Accoount" type="primary" style={style.button} textStyle={style.buttonTitle} />
            <Text style={style.textblwbtn}>Already have an account? <Text style={style.logintxt}>Login</Text></Text>
        </SafeAreaView>
    </View>
    )
}
