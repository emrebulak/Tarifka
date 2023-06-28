import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './MealCard.styles';

const MealCard = ({ image, title, onPress }: any) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>

                <ImageBackground style={styles.image} source={{ uri: image }}>
                    <View style={styles.body_container}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </ImageBackground>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;