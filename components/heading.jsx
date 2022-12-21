import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import FontText from "./fontText";

function Heading({style,children,height}) {
    return ( 
        <View>
            <FontText style={{...style,fontFamily : "RIDIBatang"}}>{children}</FontText>
        </View>
     );
}

export default Heading;

const styles = StyleSheet.create({
    heading : {
        color : "black",
        fontSize : 10,
        fontWeight : "bold",
    }
    
})