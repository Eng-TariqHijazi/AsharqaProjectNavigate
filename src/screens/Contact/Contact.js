import {
    View,
    Image,
    Text,
    ImageBackground,
  } from "react-native";
  
  import Styles from './Styles'
  import { useFonts } from "expo-font";
  import { StatusBar } from "expo-status-bar";
import { Header } from "../HomeList/List";
  export default function Contact() {
   
    const [cairo] = useFonts({
      Cairo: require("../../../assets/fonts/Cairo-VariableFont_wght.ttf"),
      CairoBold: require("../../../assets/fonts/static/Cairo-Bold.ttf"),
      CairoSBold: require("../../../assets/fonts/static/Cairo-SemiBold.ttf"),
      CairoMeadiam: require("../../../assets/fonts/static/Cairo-Medium.ttf"),
      CairoRegular: require("../../../assets/fonts/static/Cairo-Regular.ttf"),
    });
    if (!cairo) return null;
    return (
      <View style={Styles.container}>
        <Header title={'تواصل معنا'} />
        <ImageBackground
          source={require("../../../assets/imag/scan1.png")}
          style={Styles.scan}
        >
          <Image source={require("../../../assets/imag/scan2.png")} />
          <Image
            source={require("../../../assets/imag/Scan3.png")}
            style={{ position: "absolute", top: 197 }}
          />
        </ImageBackground>
        <View style={Styles.txt}>
          <Text style={Styles.txt1}>تواصل معنا على:  </Text>
          <Text style={Styles.txt2}>
            infa@afaa8.com{"\n"}0096652709005
            {" \n"}العنوان : المملكة العربية السعودية
          </Text>
        </View>
      </View>
    );
  }