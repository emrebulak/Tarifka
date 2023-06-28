import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './Meals.styles';

//Componenets
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

//Hooks
import useFetch from '../../hooks/useFetch';

//Url
import { API_URL } from '@env';

const Meals = ({ navigation, route }: any) => {
  const { data, loading, error }: any = useFetch(`${API_URL}/filter.php?c=${route.params.strCategory}`);
  const renderItem = ({ item }: any) => <MealCard onPress={() => navigateToMealDetailPage(item)} image={item.strMealThumb} title={item.strMeal} />;
  const keyExtractor = (item: any) => item.idMeal;
  const navigateToMealDetailPage = (item: any) => {
    navigation.navigate('DetailPage', item);
  }

  if (loading) {
    return <Loading />
  }

  if (error != null) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={keyExtractor} data={data.meals} renderItem={renderItem} />
    </View>
  )
}

export default Meals;