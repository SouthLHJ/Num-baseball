import { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CustomButton from "../components/custiomButton";
import Heading from "../components/heading";
import Manual from '../components/manual.jsx';

// Dimensions을 쓰면 얻을 수 있는 결과 값  : window (실제 뷰 영역) , screen (위에 툴바랑 아래 버튼 영역까지 포함한 크기)
const {height,width} = Dimensions.get("window");
// console.log(height,width)
// orienation 을 landscape 혹은 portrait 하나로 고정을 해두었다면 가로 세로가 변화가 없으므로 하나만 설정하면 된다.
// 만약 orienation을 default 로 해두었다면 동적으로 변경을 해줘야한다. :  useWindowDimensions(); 사용

function Ready({onStart}) {
    const current = useWindowDimensions();
    // console.log(current)
    const [manual, setManual] = useState(false);
    
    const handleManual = ()=>{
        setManual(!manual);
    }
    

    return (
    <>
        <View style={styles.manualArea}>
            <CustomButton styleBtn={styles.button} styleText={styles.buttonText} onPress={handleManual}><AntDesign name="book" size={24} color="white" /></CustomButton>
            <Manual visible={manual} handleManual={handleManual}/>
        </View>
        <View style={styles.readyArea}>
            <View  style={styles.readyText}>
                <Heading style={styles.heading} height={current.height}>숫 자 야 구 게 임</Heading>
            </View>
            <View style={styles.readyButton}>
                <CustomButton styleBtn={styles.button} styleText={styles.buttonText} onPress={onStart}>START</CustomButton>
            </View>
        </View>
    </>
    );
}

export default Ready;


const styles = StyleSheet.create({
    button : {
        borderColor : "#00264d", backgroundColor : "#00264d"
    },
    buttonText : {
        color :"white" ,
    },

    
    manualArea :{
        flexDirection : "row",
        justifyContent: "flex-end",
        marginTop : 15
    },


    heading : {
        fontSize : width<370 ? 30 : 40,
        color : "#00264d",
    },

    readyArea: {
      flex: 1,
      marginTop : 10,
      padding : 30,
    },
    readyText : {
        flex : 1,
        alignItems : "center"
    },
});