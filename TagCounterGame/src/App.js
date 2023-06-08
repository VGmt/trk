import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import nfcManager from "react-native-nfc-manager";

const App = (props) => {
    const [hasNfc, setHasNfc] = useState(null);


    useEffect(() => {
        async function checkNfc() {
            setHasNfc(await nfcManager.isSupported());
        }
        checkNfc();
    }, []);

    return (
        <View style={styles.wrapper}>
            <Text>Hello NFC !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App;