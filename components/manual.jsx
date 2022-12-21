import { Modal, StyleSheet, Text, View } from "react-native";
import CustomButton from "./custiomButton";

function Manual({visible,handleManual}) {
    return ( 
    <Modal visible={visible} animationType="slide" transparent={false}>
        <View style={styles.textArea}>
            <Text>1. 설정된 랜덤 숫자는 겹치지않는 0 ~ 9 사이의 숫자 3개로 이루어집니다.</Text>
            <Text></Text>
            <Text>2. Ball : 추측 숫자 3개 중, 위치는 틀리지만 있는 숫자의 갯수</Text>
            <Text></Text>
            <Text>3. Strike : 추측 숫자 3개 중, 위치를 맞춘 숫자의 갯수</Text>
            <Text></Text>
            <Text>4. Out : 추측한 숫자가 모두 틀렸을 경우</Text>
            <Text></Text>
            <Text>5. Strike 3개를 하면 승리하게 됩니다.</Text>
            
        </View>
        <CustomButton styleBtn={styles.button} styleText={styles.buttonText} onPress={handleManual}>닫기</CustomButton>
    </Modal>
     );
}

export default Manual;

const styles = StyleSheet.create({
    button : {
      borderColor : "#00264d", backgroundColor : "#00264d"
    },
    buttonText : {
        color :"white" ,
    },

    textArea : {
        flex : 1,
        padding : 10
    },
})