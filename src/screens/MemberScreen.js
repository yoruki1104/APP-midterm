import React from "react";
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text } from 'react-native';
import icon from "../json/icon.json"

// Make a component
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
        <View style={styles.headerContentStyle}>
          <View  style={styles.headerLeft}>
              <Image source={{uri:icon.logo}}
               style={{width: 71, height: 30}}/>
          </View>
          <View style={styles.headerMiddle}>
              <Text  style={styles.titleStyle}>會員</Text>
          </View>
          <TouchableOpacity style={styles.headerRight}>
               <Image source={{uri:icon["mail"] }}
                style={{width: 24, height: 24}}/>
          </TouchableOpacity>
       
      </View>
        <ScrollView>
          <TouchableOpacity style={styles.personal}>
            <Image source={{uri:icon["personal"]}} style={{width: 36, height: 36}}/>
            <Text style={styles.textname}>王大明</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["mycard"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>我的卡片</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:200}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["ticket"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>優惠卷</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:216}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["receipt"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>電子發票</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:200}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["setting"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>設定</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:232}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["phone"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>客服專區</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:200}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycard}>
            <Image source={{uri:icon["logout"]}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>登出</Text>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginLeft:232}}/>
          </TouchableOpacity>
        </ScrollView> 
  </View>
    );
}
const styles = StyleSheet.create({
  headerContentStyle:{
      height: 80 ,
      backgroundColor: "#40230D",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection:"row",
      elevation: 2,
      paddingTop:24
  },
  headerLeft:{
      width: "20%",
      paddingLeft:16,
  },
  headerMiddle:{

      width: "60%",
      alignItems: "center",
  },
  headerRight:{
     
      width: "20%", 
      paddingRight:16,
      alignItems: "flex-end",
  },
  titleStyle:{
      
      color:"#FFF",
      fontSize:18,
      fontWeight:"bold",
     
  },
  personal:{
      height:53,
      alignItems: "center",
      flexDirection:"row",
      paddingLeft:15,
  },
  textname:{
      fontSize:16,
      color:"#40230E",
      fontWeight:"bold",
      marginLeft:7,
  },
  mycard:{
      height:46,
      backgroundColor:"#FFFFFF",
      alignItems: "center",
      flexDirection:"row",
      paddingLeft:16,
      marginBottom:10,
  },
  text:{
      fontSize:16,
      color:"#40230E",
      marginLeft:16,
  },
});
export default SettingsScreen;
