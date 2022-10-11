import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import {Dots} from '../../component/';
import styles from "./styles";

const Data = [
  {
    id: 1,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image
            source={require("../../../assets/1-removebg-preview.png")}
          ></Image>
          <Text style={styles.textStyle}>CONTRACTING</Text>
        </View>
      );
    },
  },
  {
    id: 2,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image source={require("../../../assets/card1.png")}></Image>
        </View>
      );
    },
  },
];
export default function Slider() {
  const {navigate} = useNavigation();
  const { height,width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  return (
    <View style={{alignItems: "center", height}}>
      <ScrollView
        onScroll={handleOnScroll}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {Data.map((myItem) => {
          return (
            <View key={myItem.id} style={[styles.container, { width }]}>
              {myItem.item()}
            </View>
          );
        })}
      </ScrollView>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ index }) => (
        <Dots index={index} activeIndex={activeIndex} />
        )}
      />
      <TouchableOpacity style={styles.next} onPress ={ ()=>navigate('BottomStack')}>
          <Text style={styles.buttomText}>التالي</Text>
        </TouchableOpacity>
    </View>
  );
}
