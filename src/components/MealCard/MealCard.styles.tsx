import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        justifyContent: "flex-end",
        resizeMode: "cover",
        overflow: 'hidden',


    },
    body_container: {
        backgroundColor: 'black',
        opacity:0.7,
        alignItems:'center'
       
    },
    title: {
        fontSize:28,
        color: 'white',
        fontWeight: 'bold'
    }

});