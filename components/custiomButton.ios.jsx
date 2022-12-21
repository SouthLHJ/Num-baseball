import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import { useCallback } from 'react';
import FontText from "./fontText";

// console.log(Platform.OS);

function CustomButton({children,onPress, styleBtn,styleText}) {
    const [fontsLoaded] = useFonts({
        'NotoSansKR-Medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
        "RIDIBatang" : require("../assets/fonts/RIDIBatang.otf")
      });
    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
    return null;
    }



    return ( 
        <View style={styles.container}  onLayout={onLayoutRootView}>
            <Pressable onPress={onPress}
            style={({pressed})=>pressed ? [styles.buttonOutContainer,{opacity : 0.8},styleBtn] : [styles.buttonOutContainer,styleBtn]}
            >
                <View style={styles.buttonInContainer} >
                    <FontText style={[styles.buttonText,styleText,{fontFamily: "RIDIBatang"}]}>{children}</FontText>
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
        paddingHorizontal : 16,
        paddingVertical : 8,
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