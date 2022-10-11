import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Detailes = () => {
  const { params } = useRoute();
  const { item } = params;
  return (
    <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
      <Text style={{fontSize:25}}>{item.title}</Text>
      <Image source={item.image} />
    </View>
  );
};

export default Detailes;
