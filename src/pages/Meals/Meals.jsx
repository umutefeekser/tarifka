import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Meals.style'

import useFetch from '../../hooks/useFetch'
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealCard from '../../components/Cards/MealCard';

export default function Meals({navigation, route}) {

  const { title } = route.params;

  const {loading, error, data} = useFetch(`filter.php?c=${title}`);

  const handleClickMeal = (id) => {
    navigation.navigate("DetailPage", {id})
  }

  const renderItem = ({item}) => <MealCard onPress={()=>handleClickMeal(item.idMeal)} item={item} />

  if(loading) return <Loading />

  if(error) return <Error />

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderItem}
      />
    </View>
  )
}