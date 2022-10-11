import { View, StyleSheet, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
  import Styles from './Styles'
  export default function About() {
  const [cairo] = useFonts({
    Cairo: require("../../../assets/fonts/static/Cairo-Light.ttf"),
    CairoBold: require("../../../assets/fonts/static/Cairo-Bold.ttf"),
    CairoSBold: require("../../../assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoMeadiam: require("../../../assets/fonts/static/Cairo-Medium.ttf"),
  });
  if (!cairo) return null;
  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />

      <View style={Styles.image}>
        <Image source={require("../../../assets/imag/imageT.png")} />
      </View>
      <View>
        <Text style={Styles.titel}>من نحن</Text>
      </View>
      <View style={{ width: "87%" }}>
        <Text style={Styles.text}>
          نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
          الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
          والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
          {"   \n\n"}
          نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات
          والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من
          الوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.
          {"   \n\n"}
          نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة
          والاشكال العصرية
        </Text>
      </View>
    </View>
  );
}