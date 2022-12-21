import { useRef, useState } from "react";
import { Alert, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CustomButton from "../components/custiomButton";
import GuessNumber from "../components/guessNum";
import Log from "../components/log";

function Play({target,onClose,setScreenNumber}) {
    const current = useWindowDimensions();


    const [guess, setGuess] = useState([" "," "," "]);
    const [log, setLog] = useState([])
    const [text, setText] = useState("");

    const inputRef = useRef();

    const handleGuess = (text)=>{
        if(guess.includes(text) || text === "," || text === "."){
            Alert.alert(
                "알람", text + " 은 입력한 숫자이거나 숫자가 아닙니다.",[
                  {
                    text : "확인", onPress : ()=>{setText(""); inputRef.current.blur();}
                  }
                ]
              )
            
        }else{
            if(guess[0] == " "){
                setGuess([text," "," "])
                setText("");
                // inputRef.current.blur();
            }else if(guess[1] == " "){
                setGuess([guess[0],text, " "])
                setText("");
                // inputRef.current.blur();
            }else{
                // setGuess([guess[0],guess[1],text])
                // checkTarget(target, [guess[0],guess[1],text])
                let gueN = [guess[0],guess[1],text];
                let strike =0  ;
                let ball =0 ;
                for(let i = 0 ; i < target.length ; i++ ){
                    if(target[i] == gueN[i]){
                        strike += 1;
                    }else{
                        if(target.includes(Number(gueN[i]))){
                            ball +=1;
                        }
                    }
                }
                console.log(strike,ball)
                let out = 0;
                if(strike==0 && ball ==0){
                    out = 1;
                }

                setGuess([" "," "," "])
                setText("");
                inputRef.current.blur();
                setLog([...log,[guess[0],guess[1],text,strike,ball,out]])

                if(strike === 3){
                    setScreenNumber(2,log);
                }
            }
        }

    }

    

    return ( 
    <View style={styles.playArea}>
        <SafeAreaView style={{flex : 1}}>
            <View style={styles.closeArea}>
                <CustomButton styleBtn={styles.button} styleText={styles.buttonText} onPress={onClose}><AntDesign name="close" size={24} color="white" /></CustomButton>
            </View>
            
            <Pressable  onPress={()=>{inputRef.current.focus()}}>
                <View style={styles.guessArea}>
                    <GuessNumber first={guess[0]} second={guess[1]} third={guess[2] } handleGuess={handleGuess} />
                </View>
            </Pressable>
        </SafeAreaView>

        <View style={styles.keyboardArea}>
            <TextInput onChangeText={(text)=>{handleGuess(text);} } value={text}  keyboardType="number-pad" ref={inputRef} />
        </View>

        <View style={styles.logArea}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled>
                <Log log={log}/>
            </KeyboardAvoidingView>
        </View>


    </View>
    );
}

export default Play;


const styles = StyleSheet.create({
    button : {
        borderColor : "#00264d", backgroundColor : "#00264d"
    },
    buttonText : {
        color :"white" ,
    },

    playArea: {
      flex: 1,
      marginTop : 50,
    },
    
    closeArea : {
        flexDirection:"row",
        justifyContent:"flex-end",
    },

    guessArea : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-evenly",
        marginBottom : 5,
    },

    keyboardArea : {
        flex : 1,
    },


    logArea : {
        flex : 5,
        flexDirection : "column",
    },

});