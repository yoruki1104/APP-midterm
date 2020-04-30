import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text,FlatList } from 'react-native';
import icon from "../json/icon.json"
import shoplist from'../json/shoplist.json';
import ShopDetail from'../components/ShopDetail';

// Make a component
const MeScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
      <View style={styles.headerContentStyle}>
        <View  style={styles.headerLeft}>
            <Image source={{uri:icon.logo}}
             style={{width: 71, height: 30}}/>
        </View>
        <View style={styles.headerMiddle}>
            <Text  style={styles.titleStyle}>門市</Text>
        </View>
        <TouchableOpacity style={styles.headerRight}>
             <Image source={{uri:icon["search"] }}
              style={{width: 24, height: 24}}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <Image source={{uri:"https://raw.githubusercontent.com/ntue110719041/mid/master/img/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202020-04-24%20%E4%B8%8B%E5%8D%883.30%201.png"}}
          style={{height:230}} />
      <View style={{flexDirection:"row",}}>
       <Image source={{uri:icon.shop}} style={{width:24,height:24,marginLeft:16,marginTop:9,marginBottom:8}}/>
       <Text style={{fontSize:16,color:"#40230E",marginLeft:3,marginTop:10,marginBottom:10}}>附近門市</Text>
      </View>
      <FlatList data={shoplist} 
    renderItem={({item})=> <ShopDetail
    shoplist={item}
    navigation={navigation}
    />}
    keyExtractor={(item,index) => index.toString()}
    />
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

});
export default MeScreen;
