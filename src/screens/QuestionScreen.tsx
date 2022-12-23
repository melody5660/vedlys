import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';


const QuestionScreen = ({ element }: { element: any }) => {
    const navigation = useNavigation();

    const buttonClickedHandler = (e) => {
        console.log('You have been clicked a button!:', e);
        // do something
        //navigation.navigate(next, {});
    };
    return (
        <>
            {element.question !== "" && <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>{element.question}</Text>
            </View>
            }
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: element.grid ? element.grid : 'column' }}>

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
                                //width: 130,
                                minWidth: 130,
                                marginHorizontal: 20,
                                marginVertical: 10,
                            }}
                            titleStyle={{ fontWeight: 'bold', color: 'black' }}
                            onPress={() => { console.log('next1:', e.next); navigation.navigate(e.next, {}) }}

                        />

                    </View>)
                }

            </View>
            {
                element.showButton === 'true' && <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    {element.answers &&
                        element.answers.map((e: any) => <AntDesign key={`${e.id}-icon`} name={e.icon} size={100}
                            color={e.buttonColor} onPress={buttonClickedHandler}
                            style={{
                                marginHorizontal: 20,
                                marginVertical: 10,
                            }}
                            onPress={() => { console.log('next1:', e.next); navigation.navigate(e.next, {}) }}
                        />
                        )}
                </View>

            }
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <AntDesign name="arrowleft" size={100} color="black" onPress={() => { console.log('parent:', element.parent); navigation.navigate(element.parent, { }) }} />
                <AntDesign name="arrowright" size={100} color="black" onPress={buttonClickedHandler} />
            </View>
        </>
    );
}

export default QuestionScreen;