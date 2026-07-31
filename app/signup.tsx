import react from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '@/assets/svg/background.svg';
import { InputField } from '@/components/input';

const style=StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff"
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
    toptext:{ 
        fontSize: 25,
      fontWeight: '600',
      color: "black",
      
    },
    topbelowtext:{
        fontSize: 15,
        color:"#5A8C88",
        paddingTop: 10,
    },
    inputs:{
        position: "absolute",
        top: 300,
        alignSelf: "center",
        width: "90%",
    }
})


export default function Login() {
    return (
        <View style={style.container}>
        <Background/>
        <View style={style.top}>
            <AntDesign name="left" size={24} color="black" />
        </View>
        <View style={style.topContainer}>
            <Text style={style.toptext}>Create</Text>
            <Text style={style.toptext}>Account ✨</Text>
            <Text style={style.topbelowtext}>Join to start tracking your finances</Text>
        </View>
        <View style={style.inputs}>
            <InputField placeholder="Jane Doe"  label='Full Name' style={style.inputs}/>
            <InputField placeholder="jane.doe@example.com" label='Email Address' style={style.inputs}/>
            <InputField placeholder="Create a strong password" label='Password' style={style.inputs}/>
        </View>
    </View>
    )
}
