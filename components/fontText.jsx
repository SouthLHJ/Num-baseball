import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import { useCallback } from 'react';
import { Text } from 'react-native';

function FontText({style,children}) {
    return ( 
    <Text style={style}>{children}</Text>
    );
}

export default FontText;