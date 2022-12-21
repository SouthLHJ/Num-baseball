import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import { useCallback } from 'react';
import FontText from "./fontText";

// console.log(Platform.OS);

function CustomButton({children,onPress, styleBtn,styleText}) {
    return ( 
        <View style={styles.container}>
            <Pressable onPress={onPress}  android_ripple={{color :  "#000033"}} 
            style={[styles.buttonOutContainer,styleBtn]}
            >
                <View style={styles.buttonInContainer} >
                    <Text style={[styles.buttonText,styleText,{fontFamily: "RIDIBatang"}]}>{children}</Text>
                </View>
            </Pressable>
        </View>
     );
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        overflow : "hidden"
    },

    buttonOutContainer : {
        backgroundColor : "black",
        borderColor : "black",
        borderWidth : 1,
        borderRadius : 8,

        marginVertical : 8,
        marginHorizontal : 8,
        paddingHorizontal : 5,
        paddingVertical : 5,
        elevation : 9,
        opacity : 1
    },
    buttonInContainer : {
        borderColor : "black"
    },
    buttonText : {
        textAlign : "center",
        color : "white",
        fontSize : 16
    }
})