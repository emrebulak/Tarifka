import { View, Text } from 'react-native';
import React from 'react';
import styles from './Detail.styles';

//Componenets
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

//Hooks
import useFetch from '../../hooks/useFetch';

//Api Url
import { API_URL } from '@env';

const Detail = ({ navigation, route }: any) => {

  const { data, loading, error }: any = useFetch(`${API_URL}/lookup.php?i=${route.params.idMeal}`);

  if (loading) {
    return <Loading />
  }

  if (error != null) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <DetailCard detail={data.meals} />
    </View>
  )
}

export default Detail;