import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { t } from 'i18next';
import CountDown from 'react-native-countdown-component';



const PageScreen = ({ element }: { element: any }) => {
    const navigation = useNavigation();
    console.log('pagescreen', element);
    console.log(element.content);
    const buttonClickedHandler = (e) => {
        console.log('You have been clicked a button!:', e);
        // do something
        //navigation.navigate(next, {});
    };
    return (
        <>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: element.grid ? element.grid : 'column' }}>

                {
                    element.content.map((e: any) => <View key={e.contentId}>
                        {
                            e.type === "text" && <Text>{t([`${e.contentId}`])}</Text>
                        }
                        {
                            e.type === "button" && <Button
                                title={t([`${e.contentId}`])}
                                buttonStyle={{
                                    backgroundColor: e.color ? e.color : '#3BB143',
                                    borderWidth: 2,
                                    height: 100,
                                    width: 200,
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
                                onPress={() => navigation.navigate(e.next, {})}

                            />
                        }
                        {
                            e.type === "countdown" && <CountDown
                                until={10}
                                size={30}
                                onFinish={() => alert('Finished')}
                                digitStyle={{ backgroundColor: '#FFF' }}
                                digitTxtStyle={{ color: '#1CC625' }}
                                timeToShow={['S']}
                                timeLabels={{ s: 'SS' }}
                            />
                        }
                    </View>)
                }
            </View>
            {/*
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: element.grid ? element.grid : 'column' }}>

                
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
            }
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
*/
            }
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <AntDesign name="arrowleft" size={100} color="black" onPress={() => { console.log('parent:', element.parent); navigation.navigate(element.parent, {}) }} />
                {
                    element.navigation?.next?.type === "button" && <Button
                        title={t([`${element.pageId}.next.title`])}
                        buttonStyle={{
                            backgroundColor: '#3BB143',
                            borderWidth: 2,
                            height: 100,
                            width: 200,
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
                        onPress={() => navigation.navigate(element.navigation.next.pageId, {})}

                    />
                }
                {
                    element.navigation?.next?.type === "arrow" && <AntDesign name="arrowright" size={100} color="black" onPress={() => navigation.navigate(element.navigation.next.pageId, {})} />
                }


            </View>
        </>
    );
}

export default PageScreen;