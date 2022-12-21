import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import CustomButton from "../components/custiomButton";


function End({onClose,target,inform}) {
    const current = useWindowDimensions();

    return (
    <View style={styles.endArea}>
        <View style={styles.playInform}>
            <Text style={styles.informText}>정답 : {target[0]} {target[1]} {target[2]}</Text>
            <Text style={styles.informText}>플레이타임 : { (inform.end-inform.start)/1000 } 초 </Text>
            <Text style={styles.informText}>추측횟수 : {inform.totalGuess}</Text>
        </View>
        <Text style={[styles.title, current.height <370 ? {fontSize : 23} : null]}>WINNER</Text>
        <Text style={[styles.title, current.height <370 ? {fontSize : 23} : null]}>WINNER</Text>
        <Text style={[styles.title, current.height <370 ? {fontSize : 23} : null]}>CHICHKEN</Text>
        <Text style={[styles.title, current.height <370 ? {fontSize : 23} : null]}>DINNER!!</Text>
        <View style={styles.closeArea}>
            <CustomButton styleBtn={styles.button} styleText={styles.buttonText} onPress={onClose}>홈 화면</CustomButton>
        </View>
    </View>
    );
}

export default End;



const styles = StyleSheet.create({
    endArea: {
      flex: 1,
    },
    button : {
        borderColor : "black", backgroundColor : "black"
    },
    buttonText : {
        color :"white" ,
    },

    playInform : {
        flexDirection : "row",
        justifyContent : "center",

        marginTop : 20,
        marginHorizontal : 10,

        borderRadius : 7,
        backgroundColor  : "white"
    },
    informText : {
        marginLeft : 5
    },

    title : {
        flex: 3,
        fontSize : 50,
        color : "yellow",
        fontWeight : "bold",
        marginTop : 50,
        textAlign : "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },

    closeArea : {

        flexDirection : "column"
    },
});