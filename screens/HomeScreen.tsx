import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';


const HomeScreen = ({ next }: { next: string }) => {
    const navigation = useNavigation();

    console.log('next: ', next);
    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button
                title="Start"
                buttonStyle={{
                    backgroundColor: 'red',
                    borderWidth: 2,
                    height: 100,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 300,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={buttonClickedHandler}
            />
        </View >
    );
}
//<Text style={styles.text}>Start</Text>
const styles = StyleSheet.create({


    roundButton: {
        marginTop: 20,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FF0000',
    },
    text: {
        fontWeight: '700',
    },
});

export default HomeScreen;