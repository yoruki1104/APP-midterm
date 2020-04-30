import React from "react";
import { View, FlatList ,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import Header from "../components/Header";
import DrinkDetail from "../components/DrinkDetail";
import albumData from "../json/albums.json";
import seasonList from "../json/season.json"
import icon from "../json/icon.json"
const MilkTeaScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.headerContentStyle}>
                <View  style={styles.headerLeft}>
                <TouchableOpacity
                     onPress={() => navigation.navigate('菜單')}>
                    <Image source={{uri:icon.back}}
                     style={{width: 24, height: 24}}/>
                </TouchableOpacity>    
                </View>
                <View style={styles.headerMiddle}>
                    <Text  style={styles.titleStyle}>{seasonList.menuTitle}</Text>
                </View>
                <TouchableOpacity style={styles.headerRight}>
                     <Image source={{uri:icon["shopping-cart"]}}
                      style={{width: 24, height: 24}}/>
                </TouchableOpacity>
               
               
        </View>
      <FlatList
        data={seasonList.menuList}
        renderItem={({ item }) =>
          <DrinkDetail
            drink={item}
            key={item.id}
            navigation={navigation}
          />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

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
       
    }
 
  });

export default MilkTeaScreen;