import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,ScrollView, ImageBackground } from 'react-native';
import icon from"../json/icon.json"
//import homelist from"../homelist.json";


const HomeScreen = ({navigation})=>{
  return(
    <View style={{flex: 1,backgroundColor:"#F9D9A6"}}>
      <View style={styles.headerContentStyle}>
        <View style={styles.headerLeft}>
          <Image source={{uri:icon.logo}}
          style={{width:71,height:30}}/>
        </View>
        <View style={styles.headerMiddle}>
        <Text style={styles.titleStyle}>首頁</Text>
      </View>
      <TouchableOpacity style={styles.headerRight}>
        <Image source={{uri:icon.change}}
        style={{width:24,height:24}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerRight_1}>
        <Image source={{uri:icon.assignment}}
        style={{width:24,height:24}}/>
      </TouchableOpacity>
      </View>
    <ScrollView>
      <View style={styles.picture_setting}>
       <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-1.jpg?raw=true"}}
       style={styles.image}>
         <Text style={styles.information}>店面資訊</Text>
         <TouchableOpacity style={styles.arrow}>
            <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
       </ImageBackground>  
      </View>
      <View style={styles.picture_setting}>
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-2.jpg?raw=true"}}
          style={styles.image}>
              
            <Text style={styles.information}>最近活動</Text>
         <TouchableOpacity style={styles.arrow}>
            <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
        </ImageBackground>  
      </View>
      <View style={styles.picture_setting2}>
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-3.jpg?raw=true"}}
          style={styles.image}>
            <Text style={styles.information}>最新飲品</Text>
         <TouchableOpacity style={styles.arrow}>
             <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
        </ImageBackground>  
      </View>
    </ScrollView>
     </View>
  );
 
}
const styles=StyleSheet.create({

  headerContentStyle:{
    height:80,
    backgroundColor:"#40230D",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    elevation:2,
    paddingTop:24
    
  },
  headerLeft:{
    width:"20%",
    paddingLeft:16,
    
  },
  headerMiddle:{
    width:"55%",
    alignItems:"center",
    paddingLeft:25,
  },
  headerRight:{
    width:"13%",
  
   paddingLeft:10,

  },
  headerRight_1:{
    width:"12%",
  
    paddingRight:5,
  },
  titleStyle:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"bold",
    
  },
  picture_setting:{
    height:200,
    marginBottom:8,
    justifyContent:"flex-start",
  },
  picture_setting2:{
    height:200,
    marginBottom:0,
    justifyContent:"flex-start",
  },
  image:{
    height:200,
  },
  arrow:{
    marginLeft:220,
    marginTop:100,
    width:120,
    height:35,
    backgroundColor:"#40230D",
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 14,
    shadowRadius:3,
    elevation: 3,
   
  },
  information:{
     
    paddingTop:20,
    paddingLeft:10,
    fontSize:20,
    color:"#FFF",
  },
  information_2:{
    paddingLeft:15,
    paddingTop:5,
   fontSize:18,
   color:"#FFF", 
  },
 
});
export default HomeScreen;  