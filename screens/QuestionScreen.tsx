import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';


const QuestionScreen = ({ element }: { element: any }) => {
    console.log('element:', element);
    const navigation = useNavigation();

    const buttonClickedHandler = (e) => {
        console.log('You have been clicked a button!:', e);
        // do something
        //navigation.navigate(next, {});
    };
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 20}}>{element.question}</Text>
            </View>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>

            {
                element.answers && element.answers.map((e: any) => <View style={{ flex: 1, marginLeft: 10 }}>
               
                        <Button
                            title={e.text}
                            buttonStyle={{
                                backgroundColor: e.color,
                                borderWidth: 2,
                                height: 100,
                                borderColor: 'black',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 330,
                                marginHorizontal: 20,
                                marginVertical: 10,
                            }}
                            titleStyle={{ fontWeight: 'bold', color: 'black' }}
                            onPress={() => { console.log('next1:', e.next); navigation.navigate(e.next, {}) }}

                            />
                </View>)
            }
            </View>
        </>
    );
}

export default QuestionScreen;