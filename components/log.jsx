import { FlatList, StyleSheet, Text, View } from "react-native";
import FontText from "./fontText";

function Log({log}) {
    return ( 
        <FlatList data={log} style={styles.logContainer} renderItem={(one)=>{
            return (
                <View key={Date.now()} style={styles.logArea} >
                    <FontText style={styles.guessNum}>{one.item[0]}</FontText>
                    <FontText style={styles.guessNum}>{one.item[1]}</FontText>
                    <FontText style={styles.guessNum}>{one.item[2]}</FontText>
                    <View style={styles.resultArea}>
                        <FontText style={[styles.guessNum, styles.resultB]}>{one.item[4]}B</FontText>
                        <FontText style={[styles.guessNum, styles.resultS]}>{one.item[3]}S</FontText>
                        <FontText style={[styles.guessNum, styles.resultO]}>{one.item[5]}O</FontText>
                    </View>
                </View>
            )
        }}
        />
     );
}

export default Log;

const styles = StyleSheet.create({
    logContainer :{
        margin : 20,

        borderColor : "black",
        backgroundColor : "#e6f2ff",
        overflow : "hidden"
    },

    logArea : {
        flexDirection : "row",
        justifyContent : "space-evenly",

        borderColor : "#66b3ff",
        borderWidth : 1,


        padding : 5,
        
    },
    guessNum : {
        fontSize : 17,
        fontFamily :"RIDIBatang"
    },


    resultArea :{
        flexDirection : "row",

    },
    resultS : {
        fontWeight : "bold",
        color : "#004080",
        marginLeft : 8,
        fontFamily :"NotoSansKR-Bold"

    },
    resultB : {
        fontWeight : "bold",
        color : "#0073e6",
        fontFamily :"NotoSansKR-Bold"

    },
    resultO : {
        fontWeight : "bold",
        color : "red",
        marginLeft : 8,
        fontFamily :"NotoSansKR-Bold"

    },
})