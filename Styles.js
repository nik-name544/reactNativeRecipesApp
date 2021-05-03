import { StyleSheet, Platform } from 'react-native';

export const colors = {
    primary: "#4a148c",
    accent: "#ff6f00",
    white: "#ffffff",
    black: "#000000"
}

export const ms = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 18,
    }
});

export const ci = StyleSheet.create({
    item: {
        marginHorizontal: "10%",
        marginVertical: 10,
        width: "80%",
        padding: 10,
        borderColor: colors.black,
        borderRadius: 8,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, 
    },
    itemWrapper: {
        flex: 1,
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        marginHorizontal: "auto",
        marginVertical: 10,
    }
})

export const headerConfig = (props) => {
    return {
        headerTitle: props,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? colors.white : colors.primary,
    }
}