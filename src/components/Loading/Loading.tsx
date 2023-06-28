import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
    return (
        <Lottie style={{ flex: 1 }} source={require('../../assets/animation/loading.json')} autoPlay loop />
    );
}

export default Loading;