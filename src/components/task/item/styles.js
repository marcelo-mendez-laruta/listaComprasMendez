import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#9A848F',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',        
        justifyContent: 'space-between',
    },
    listItemContainerCompleted: {
        paddingVertical: 25,
        backgroundColor: '#b3b3b3',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
    },
    listItem: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
    ButtonComplete: {
        backgroundColor: '#2cc908',
        paddingVertical: 3,
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 5,
    }
});