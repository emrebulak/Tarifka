import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#ECEFF1',
        margin: 10,
        padding: 15,
        paddingLeft: 1,
        borderRadius: 10,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray'
    },
    image: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        borderRadius:50
    },
    body_container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 21,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});