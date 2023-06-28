import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './Categories.styles';
//Componenets
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

//Hooks
import useFetch from '../../hooks/useFetch';

//API_URL
import { API_URL } from '@env';

const Categories = ({ navigation, route }: any) => {

    const { data, loading, error }: any = useFetch(`${API_URL}/categories.php`);
    const renderItem = ({ item }: any) => <CategoryCard onPress={() => navigateToMealsPage(item)} image={item.strCategoryThumb} title={item.strCategory} />;
    const keyExtractor = (item: any) => item.idCategory;
    const navigateToMealsPage = (item: any) => {
        navigation.navigate('MealsPage', item);
    }


    if (loading) {
        return <Loading />
    }

    if (error != null) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={keyExtractor} data={data.categories} renderItem={renderItem} />
        </View>
    )
}

export default Categories;