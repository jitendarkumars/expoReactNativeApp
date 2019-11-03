import React,{useState} from 'react'

import { StyleSheet,  View ,Button,TextInput,Modal} from 'react-native';

export const GoalInput=props=>{
    
  const [enteredGoals, setEnteredGoals] = useState('');
    const goalInputHandler= (enteredText)=>{
        setEnteredGoals(enteredText);
     }

    const addGoal=()=>{
        props.addGoal(enteredGoals)
        setEnteredGoals('')
     }
    return(
        <Modal animationType="slide" visible={props.visible}>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Goal"  style={styles.inputText} onChangeText={goalInputHandler} 
        value={enteredGoals}/>
        <View style={styles.buttonView}>
       <Button  title="Add" onPress={addGoal} />
        <Button  title="Cancel" color="red" onPress={props.cancelModal} />
         </View>  
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    inputText:{
      width:'80%',
      justifyContent:'center',
      alignContent:'center',
      borderColor:'black',
      padding:10,
      borderWidth:0.7,
      marginBottom:10
    }
    ,
    buttonView:{
       width:'60%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
     
    }
})