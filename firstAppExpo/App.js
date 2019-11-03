import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView,FlatList} from 'react-native';
import { GoalItems } from './components/GoalItems';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler =(goals)=>{
    setCourseGoals(currentGoals=>[...currentGoals,
      {id:Math.random().toString(),value:goals}])
   setIsAddMode(false)
  }

  const deleteGoal = (goalId)=>{
    let goals =courseGoals.filter(goal=>goal.id!=goalId)
    setCourseGoals(goals)
  }
  const cancelModal = ()=>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={()=> setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoal={addGoalHandler} cancelModal={cancelModal} />
      <FlatList
      keyExtractor={(item,index)=>index.toString()} data={courseGoals} renderItem={itemData=>(
      <GoalItems onDelete={deleteGoal.bind(this,itemData.item.id)} goalItem={itemData.item.value}/>
      )}>
      
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   padding:50
 }
});
