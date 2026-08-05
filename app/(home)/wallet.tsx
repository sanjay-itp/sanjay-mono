import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import PageBackground from "@/assets/svg/page_bg.svg";
import { HeaderBackground } from '@react-navigation/elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    flex: 1,
    marginRight: 46,
  },
  transactionContainer: {
    backgroundColor: 'white',
    flex: 1,


  }
});
export default function Expense() {
  return (
    <View style={styles.container}>
      <PageBackground style={styles.HeaderBackground}/>
    </View>
  );
}