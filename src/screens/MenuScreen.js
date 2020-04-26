import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text } from 'react-native';
import icon from "../json/icon.json"
import me from '../json/me.json';



const MenuScreen = ({ album, navigation }) => {
    return (
        <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
            <View style={styles.headerContentStyle}>
                <View  style={styles.headerLeft}>
                    <Image source={{uri:icon.logo}}
                     style={{width: 71, height: 30}}/>
                </View>
                <View style={styles.headerMiddle}>
                    <Text  style={styles.titleStyle}>菜單</Text>
                </View>
                <View style={styles.headerRight}>
                     <Image source={{uri:icon["shopping-cart"] }}
                      style={{width: 24, height: 24}}/>
                </View>
               
               
            </View>
        <ScrollView >
            <View  style={styles.containerStyle}>
            < View style={styles.sectionStyle}>
            <View style={styles.cardStyle}>
                     <TouchableOpacity 
                         onPress={() => navigation.navigate('Tea')}
                    >
                     <Image
                        style={styles.imageStyle}
                        source={{
                            uri:"https://github.com/yoruki1104/APP-midterm/blob/master/img/img-menu/img_menu-tea.png?raw=true"
                         }}
                     />
                     </TouchableOpacity>
                    <Text style={styles.textStyle}>原茶</Text>
                </View>
                <View style={styles.cardStyle}>
                     <TouchableOpacity 
                        onPress={() => navigation.navigate('MilkTea')}
                    >
                    <Image
                        style={styles.imageStyle}
                        source={{
                          uri:"https://github.com/yoruki1104/APP-midterm/blob/master/img/img-menu/img_menu-milktea.png?raw=true"
                        }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>鮮奶茶</Text>
                </View>
            </View>
         </View>
         <View  style={styles.containerStyle}>
            < View style={styles.sectionStyle}>
                <View style={styles.cardStyle}>
                     <TouchableOpacity 
                     onPress={() => navigation.navigate('Flavor')}
                    >
                     <Image
                        style={styles.imageStyle}
                        source={{
                            uri:"https://github.com/yoruki1104/APP-midterm/blob/master/img/img-menu/img_menu-flavor.png?raw=true"
                         }}
                     />
                     </TouchableOpacity>
                    <Text style={styles.textStyle}>特調</Text>
                </View>
                <View style={styles.cardStyle}>
                     <TouchableOpacity 
                      onPress={() => navigation.navigate('Season')}
                    >
                        <Image
                         style={styles.imageStyle}
                            source={{
                             uri:"https://github.com/yoruki1104/APP-midterm/blob/master/img/img-menu/img_menu-season.png?raw=true"
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>季節限定</Text>
                </View>
            </View>
         </View>
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
    containerStyle:{
        flexDirection:"column",
       
        marginTop:50,
        marginRight:16,
        marginLeft:16
    },
    sectionStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    cardStyle:{
        
        flexDirection:"column",
        justifyContent:"center",
      
    },
    imageStyle: {
      height: 165,
      width: 165
    },
    textStyle: {
       color:"#40230D",
       fontSize:18,
       textAlign:"center"
      }
  });
export default MenuScreen;
