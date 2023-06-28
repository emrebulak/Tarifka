import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import styles from './CategoryCard.styles';

const CategoryCard = ({ image, title, onPress }: any) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;