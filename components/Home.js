import React from 'react';
import {Text, View,TouchableOpacity,Image } from 'react-native';
import userData from './Data'
import data from "./posts"

export default function Home(props) {
  console.log(props)
  const profiles =
     userData.map((user,index)=>{
      return(
        <View key={index} style={{ margin:10}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Pages',{user})} >
        <Image
        style={{ width: 50, height: 50, borderRadius: 50, }}
      source={{ uri: user.profilePic }}
    />
    </TouchableOpacity>
    <Text>{user.userName}</Text>
    </View>
      )
    })
    const post=data.map((val,index)=>{
      return(
        <View key={index} style={{backgroundColor:"grey",marginBottom:10,width:360,borderRadius:8}}>
          <View>
          <Text style={{marginLeft:15,marginBottom:15,fontWeight:"bold",color:"black"}}>{val.name}</Text>
          </View>
          <Image style={{marginLeft:10,marginBottom:10,width:340,height:250 ,borderRadius:8}} source={{uri:val.image}}/>
         <View style={{flexDirection:"row",justifyContent:"space-around"}}>
         <Text>Likes:{val.Likes}</Text>
         <Text>Comments:{val.comments}</Text>
         </View>
        </View>
      )
    })
  console.log("post",post)
  return (
   
    <View style={{flex:1, flexDirection:'row'}}>
      {profiles}
    </View>   
    
    
  );
}
 
