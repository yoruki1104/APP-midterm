import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity, Button,Alert } from 'react-native';
import shoplist from'../json/shoplist.json';
import icon from "../json/icon.json"

const ShopDetail = ({shoplist}) => {
  return (
    <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
        <TouchableOpacity style={styles.shopcard}
        onPress={()=>Alert.alert(shoplist.shopname,
                    '營業時間：'+shoplist.week+'\n　　　　　'+shoplist.time+'\n　　　　　'
                    +'\n地址：'+shoplist.address+'\n\n電話：'+shoplist.tel)}>
            <Text style={{color:"#40230E",fontSize:14,marginBottom:6}}>{shoplist.shopname}</Text>
            <Text style={{color:"#40230E",fontSize:12}}>距離{shoplist.distance}</Text>
            <Image source={{uri:icon.information}} style={{width:24,height:24,position:"absolute",marginLeft:285}}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shopcard:{
    width:328,
    height:67,
    backgroundColor:"#FFF",
    borderRadius:8,
    alignContent:"center",
    justifyContent: 'center',
    marginBottom:10,
    marginLeft:16,
    padding:16,
    elevation:3,
  },
});

export default ShopDetail;