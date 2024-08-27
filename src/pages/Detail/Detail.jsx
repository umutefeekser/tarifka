import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from './Detail.style'

import useFetch from '../../hooks/useFetch'
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function MealDetail({route}) {

  const { id } = route.params;
  const {loading, error, data} = useFetch(`lookup.php?i=${id}`);

  if(loading) return <Loading />

  if(error) return <Error />

  return (
    <FlatList 
      data={data.meals}
      key={({item}) => item.idMeal}
      renderItem={({item}) =>

      <View style={styles.container}>

        <Image style={styles.image} source={{uri: item.strMealThumb}} />
        <View style={styles.body}>
          <Text style={styles.meal_title}>{item.strMeal}</Text>
          <Text style={styles.meal_subtitle}>{item.strCategory} • {item.strArea}</Text>
        </View>

        <View style={{borderTopWidth: 1, borderColor: "lightgray"}} />

        <View style={styles.body}>
          <View style={styles.ingredients}>
            <Text style={styles.title}>Ingredients</Text>
            {renderIngredients(item)}
          </View>
          
          <Text style={styles.title}>Instructions</Text>
          <Text style={styles.description}>
            {item.strInstructions}
          </Text>
          
          <TouchableOpacity onPress={()=>Linking.openURL(item.strYoutube)} style={styles.button}>
            <Text style={styles.button_text}>Watch on YouTube</Text>
          </TouchableOpacity>
        </View>

      </View>

    }
    />
  )
}

const renderIngredients = item => {
  const ingredients = [];

  for (let i = 0; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    
    if(item[ingredientKey]) {
      ingredients.push(
        <Text key={ingredientKey} style={styles.ingredient}>
          {item[ingredientKey]} - {item[measureKey]}
        </Text>
      );
    }
  }

  return ingredients
}