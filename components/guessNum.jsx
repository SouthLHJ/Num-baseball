import { Pressable, StyleSheet, Text } from "react-native";
import FontText from "./fontText";

function GuessNumber({first, second, third}) {



    return ( 
        <>
            <FontText style={styles.text}>{first }</FontText>
            <FontText style={styles.text}>{second}</FontText>
            <FontText style={styles.text}>{third }</FontText>
        </>
    );
}

export default GuessNumber;

const styles = StyleSheet.create({
    text : {
        width : 50,
        height : 50,

        fontFamily : "RIDIBatang",
        fontSize : 30,
        // fontWeight : "bold",
        textAlign : "center",

        backgroundColor : "#00264d",
        color : "white",

        borderColor : "white",
        borderRadius : 8,
        borderWidth : 2,
        overflow : "hidden",

        margin : 10,
    }
})