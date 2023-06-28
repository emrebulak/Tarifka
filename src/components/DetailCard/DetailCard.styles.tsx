import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        padding: 5
    },
    image: {

        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 3,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#A52A2A',
        fontSize: 27,
        fontWeight: 'bold'
    },
    hometown: {
        color: '#A52A2A',
        fontSize: 19,

    },
    divider: {
        borderWidth: 1,
        margin: 3
    },
    description: {
        color: 'black',
        fontSize: 17
    },
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 10,
        margin: 5

    },
    button_text: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 17,
        fontWeight: 'bold'
    }

});