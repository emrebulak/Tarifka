import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React from 'react';
import styles from './DetailCard.styles';

const DetailCard = ({ detail }: any) => {
    const item = detail[0];

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <Text style={styles.title}>{item.strMeal}</Text>
                <Text style={styles.hometown}>{item.strArea}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.description}>{item.strInstructions}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(item.strYoutube)} style={styles.button}>
                    <Text style={styles.button_text}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailCard;