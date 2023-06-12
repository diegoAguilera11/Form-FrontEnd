import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    newUserContainer: {
        alignItems: 'flex-end',
        color:'white',
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
    }, 
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
});
