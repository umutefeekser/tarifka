import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Categories.style'

import useFetch from '../../hooks/useFetch'
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CategoryCard from '../../components/Cards/CategoryCard';

export default function Categories({navigation}) {

  const {loading, error, data} = useFetch(`categories.php`)

  const handleClickCategory = (title) => {
    navigation.navigate("MealsPage", {title})
  }

  const renderItem = ({item}) => <CategoryCard onPress={() => handleClickCategory(item.strCategory)} item={item} />

  if(loading) return <Loading />

  if(error) return <Error />

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
      />
    </View>
  )
}