import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './CategoryCard.style'

const CategoryCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={{uri: item.strCategoryThumb}}
          />
          <Text style={styles.title}>{item.strCategory}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard