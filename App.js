import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import End from './screens/end.jsx';
import Play from './screens/play.jsx';
import Ready from './screens/Ready.jsx';

export default function App() {
  const [target,setTarget] = useState(null);
  const [screen, setScreenNumber] = useState(0);

  const [inform, setInform] = useState();
  
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Medium': require('./assets/fonts/NotoSansKR-Medium.otf'),
      'NotoSansKR-Bold': require('./assets/fonts/NotoSansKR-Bold.otf'),
      'NotoSansKR-Thin': require('./assets/fonts/NotoSansKR-Thin.otf'),
      "RIDIBatang" : require("./assets/fonts/RIDIBatang.otf")
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);



  if (!fontsLoaded) {
    return null;
  }


  const targetCreatehandle = ()=>{
    // console.log("버튼 눌림")
    let ar=  [];
    // console.log(label.findIndex(i=>num==i))
    while(ar.length < 3){
      let num = Math.floor(Math.random()*10);
      // console.log(num);
      if(!ar.includes(num)){
        ar.push(num);
      }
    }
    console.log(ar);
    setScreenNumber(1);
    setTarget(ar);
    setInform({start : Date.now(), end : null, totalGuess : 0})
  }

  const hanleClose = ()=>{
    setTarget(null);
    setScreenNumber(0);
  }

  const handleSreen = (screen,log)=>{
    setScreenNumber(screen);
    setInform({...inform, end : Date.now(), totalGuess : log.length+1});
  }

  let currentScreen = (<Ready onStart={targetCreatehandle}/>);

  if(screen == 1){
    currentScreen = <Play target={target} onClose={hanleClose} setScreenNumber={handleSreen}/>
  }else if (screen == 2){
    currentScreen = <End onClose={hanleClose} target={target} inform={inform}/>
  }

  return (
    <>
    <StatusBar style="auto" />
      <View style={styles.container}  onLayout={onLayoutRootView}>
        <ImageBackground source={require("./assets/images/number0.jpg")} style={styles.image} resizeMode="cover">
          {currentScreen}
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    button : {
      borderColor : "#00264d", backgroundColor : "#00264d"
    },
    buttonText : {
        color :"white" ,
    },

  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    opacity : 0.9
  },
});
