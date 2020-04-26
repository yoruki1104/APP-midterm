import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Alert } from "react-native";
import icon from "../json/icon.json"


const DrinkDetail = ({ drink, navigation }) => {
 
  
  return (
    <View  style={{ flex:1,backgroundColor:"#F9D9A6"}}>
       <View style={styles.cardContainerStyle}>
         <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: drink.image }}
          />
         <View style={{ justifyContent:"space-between" ,flexDirection:"row",width:240}}>
           <View  style={styles.midSecStyle}>
            <Text style={{color:"#40230D"}}>{drink.name}</Text>
            <View  style={styles.sizeBtnContainerStyle}>
               <Image source={{uri:icon["M-btn-selected"]}}  style={styles.sizeBtn}/>
               <Image source={{uri:icon["L-btn-unselected"]}}  style={styles.sizeBtn}/>
            </View>
           </View>
           <View  style={styles.leftSecStyle}>
             <Text style={{color:"#40230D"}}>{drink.price}</Text>
             <TouchableOpacity 
               
                 title="Simple Alert"
                 onPress={() => {
                  Alert.alert(' ','已成功加入一項商品至購物車!');
                }
                  }>
                     <Image source={{uri:icon["add-btn"]}}  style={{ width:24,height:24,marginTop:8}}/>
              </TouchableOpacity>
            
           </View>
           </View>
       
        
          </View>
       </View>
    </View>
  
  )
};
const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    
  },
  thumbnailStyle: {
    height: 56,
    width: 56,
    marginTop:0
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {

    alignItems:"center",
    backgroundColor:"#F9D9A6",
    
  },
  cardSectionStyle: {
    width:328,
    height:84,
    padding: 10,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius:6,
    elevation: 6,
  },
  imageStyle: {
    height: 300,
    width: null
  },
  midSecStyle:{
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:16
  },
  sizeBtnContainerStyle:{
  
    flexDirection:"row",
    paddingTop:8
   
  },
  sizeBtn:{
    width:24,
    height:24,
    marginRight:16
  },
  leftSecStyle:{
    flexDirection:"column",
    justifyContent:"center",
   alignItems:"center",

  }

});
export default DrinkDetail;