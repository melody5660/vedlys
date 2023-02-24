import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native';

const MarkersList = ({ markersList }: { markersList: any }) => {
    const Item = ({ title, description }: any) => (
        <View style={styles.item} key={`marker-${Math.random()}`}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
    return (
        <>
            <FlatList
                data={markersList}
                renderItem={({ item }) => <Item title={`${item.title} - ${item.distance} km`} description={item.description}/>}
                keyExtractor={item => `items-${Math.random()}`}
                
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 22,
    },
    description: {
        fontSize: 12,
      },
  });
  

export default MarkersList;