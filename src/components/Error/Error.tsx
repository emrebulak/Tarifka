import React from 'react';
import Lottie from 'lottie-react-native';

const Error = () => {
    return (
        <Lottie style={{ flex: 1 }} source={require('../../assets/animation/error.json')} autoPlay loop />
    );
}

export default Error;