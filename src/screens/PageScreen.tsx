import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { t } from 'i18next';
import CountDown from 'react-native-countdown-component';
import { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';



const PageScreen = ({ element }: { element: any }) => {
    const navigation = useNavigation();
    console.log('pagescreen', element);
    console.log(element.content);
    const [counter, setCounter] = useState(10);
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        setCounter(10);
    }, []);

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
                            e.type === "countdown1" && <CountDown
                                until={counter}
                                size={80}
                                onFinish={() => { setCounter(10); console.log('c', counter); }}
                                //onFinish={() => alert('Finished')}
                                digitStyle={{ backgroundColor: '#FFF' }}
                                digitTxtStyle={{ color: '#1CC625' }}
                                timeToShow={['S']}
                                timeLabels={{ s: 'SS' }}
                            />
                        }
                        {
                            e.type === "countdown" &&
                            <CountdownCircleTimer
                                key="countdownCircle"
                                isPlaying
                                duration={counter}
                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                onComplete={() => ({ shouldRepeat: true, delay: 2 })}
                                colorsTime={[7, 5, 2, 0]}
                            >
                                {({ remainingTime }) => <Text style={{fontSize: 60}}>{remainingTime}</Text>}
                            </CountdownCircleTimer>
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