import React from 'react';
import {View,Text,StyleSheet , TouchableOpacity} from 'react-native';
export const GoalItems = props=>{
    return(
    <TouchableOpacity onPress={props.onDelete}>
     <View  style={styles.listItems}>
        <Text >{props.goalItem}</Text>
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:0.3,
        marginVertical:10
      }
})