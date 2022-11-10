import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    SafeAreaView,
    FlatList,
    Image,
    useWindowDimensions,
    Pressable,
  } from "react-native";
  import { useFonts } from "expo-font";
  import { StatusBar } from "expo-status-bar";
  import { useNavigation } from "@react-navigation/native";
  import styles from './styles'
  import Detailes from '../Detailes'
import { DATA } from "../../utiles/HomeData";

export const Header = ({title}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/image.png")}
      style={[styles.header, { width:'100%'}]}
    >
      <StatusBar style="auto" />
      <Text style={styles.headerText}>{title}</Text>
    </ImageBackground>
  );
}; 
  export default function List() { 
  const { width, height } = useWindowDimensions();
  const {navigate} = useNavigation()
  const [cairo] = useFonts({
    Cairo: require("../../../assets/fonts/Cairo-VariableFont_wght.ttf"),
    CairoBold: require("../../../assets/fonts/static/Cairo-Bold.ttf"),
    CairoSBold: require("../../../assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoMeadiam: require("../../../assets/fonts/static/Cairo-Medium.ttf"),
  });
  if (!cairo) return null;
//   **************************************************
//   Header Component
 

//   *************************************************
//   Item Component 
  const Item = ({ title, image, extratitle,item }) => (
    <Pressable onPress={()=>navigate('Detailes',{ item })}
      style={styles.boxContainer}
    >
      <View style={styles.boxImage}>
        <Image source={image} />
      </View>
      <Text style={styles.boxTitle}>{title}</Text>
      <Text style={[styles.boxTitle, { fontSize: 11 }]}>{extratitle}</Text>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} extratitle={item.extratitle} item={item} />
  );
//   ******************************************
// return 
return (
    <View style={[styles.container, { width, height }]}>
      <Header title={"الرئيسية"} />
      <SafeAreaView style={styles.itemContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={[styles.boxTitle,styles.textheader]}>
                الفهرس
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    
    </View>
);
}