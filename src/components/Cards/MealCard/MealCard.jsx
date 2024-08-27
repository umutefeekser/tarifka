import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './MealCard.style'

const CategoryCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={{uri: item.strMealThumb}}
          />
          <View style={styles.text_container}>
            <Text numberOfLines={1} style={styles.title}>{item.strMeal}</Text>
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard