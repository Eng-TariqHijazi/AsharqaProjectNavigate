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
  const DATA = [
    {
      id: "1",
      title: "متطلبات تأسيس   منشاة مقاولات",
      image: require("../../../assets/imag/2.png"),
    },
    {
      id: "2",
      title: "التعريف بقطاع المقاولات ",
      image: require("../../../assets/imag/3.png"),
    },
    {
      id: "3",
      title: " قواعد وإجراءات أساسية بشأن التعاقد ",
      image: require("../../../assets/imag/4.png"),
    },
    {
      id: "4",
      title: "تراخيص مزاولة نشاط المقاولات",
      image: require("../../../assets/imag/5.png"),
    },
    {
      id: "5",
      title: " منصات الكترونية في خدمة المقاول ",
      image: require("../../../assets/imag/6.png"),
    },
    {
      id: "6",
      title: "الجهات\n ذات العلاقة   ",
      image: require("../../../assets/imag/7.png"),
    },
    {
      id: "7",
      title: " آليات تسليم مشاريع المقاولات ",
      image: require("../../../assets/imag/8.png"),
    },
    {
      id: "8",
      title: "خطة عمل المشروعات وتدفقاتها المالية",
      image: require("../../../assets/imag/9.png"),
    },
    {
      id: "9",
      title: "علاقة المقاول مع مكاتب ",
      image: require("../../../assets/imag/10.png"),
    },
    {
      id: "10",
      title: "أنظمة\n عقود المقاولات ",
      image: require("../../../assets/imag/11.png"),
    },
    {
      id: "11",
      title: " لجنة المقاولات :",
      image: require("../../../assets/imag/12.png"),
      extratitle: "رسالتها- أهدافها – إنجازاتها",
    },
    {
      id: "12",
      title: "الجانب\n الاجتماعي والوطني ",
      image: require("../../../assets/imag/13.png"),
    },
  ];
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
  const Header = () => {
        return (
          <ImageBackground
            resizeMode="cover"
            source={require("../../../assets/image.png")}
            style={[styles.header, { width}]}
          >
            <StatusBar style="auto" />
            <Text style={styles.headerText}>المقاولات</Text>
          </ImageBackground>
        );
      };

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
      <Header />
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