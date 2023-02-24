import { useState, useEffect } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { UrlTile, LocalTile, Marker } from 'react-native-maps';
import MarkersList from '../components/markers.component';
import * as Location from "expo-location";
import { getDistance } from 'geolib';
import { FontAwesome } from '@expo/vector-icons'; 
import markersInstance from '../data/markers.data';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE = 54.689691;
const LONGITUDE = 25.272889;
const LATITUDE_DELTA = 0.2222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
    },
    map: {
        width: SCREEN_WIDTH,
        height: height * 0.6
    },
    view: {
        alignItems: 'flex-start',
        width: SCREEN_WIDTH
    }
});



const MapScreen = () => {
    const [markerFlatList, setMarkerFlatList] = useState(new Array());
    const [markersList, setMarkersList] = useState(new Array());

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log('location: ', location);
          const mList = new Array();
          markersInstance.getMarkersList().forEach((a) => {
              if (a.lat !== '' && a.lng !== '') {
                  mList.push(a);
              }
          });
  
          setMarkersList(mList);
          getWithinDistance(mList, location);
        })();
      }, []);


    const [urlTemplate, setUrlTemplate] = useState("http://c.tile.openstreetmap.org/{z}/{x}/{y}.png");
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const getWithinDistance = (markersList: any, location: any) => {
        var selectedMarker = [];
        console.log(region);
        var lat1 = location.coords.latitude;
        var lon1 = location.coords.longitude;

        for (var i = 0; i <= markersList.length; i++) {
            var lat2 = markersList[i]?.lat;
            var lon2 = markersList[i]?.lng;
            if (lat2 && lon2) {
                
                const d = getDistance(
                    {
                        lng: lon1,
                        lat: lat1
                    }, {
                    lng: lon2,
                    lat: lat2
                });
                if (d <= 10000) {
                    markersList[i].distance = Math.round(d / 100) / 10;

                    selectedMarker.push(markersList[i]);
                }
            }
        }
        selectedMarker.sort((a,b) => a.distance - b.distance);
        console.log('selectedMarker:', selectedMarker);
        setMarkerFlatList(selectedMarker)
    }


    return (

        <View style={styles.container}>
            <View
                style={StyleSheet.absoluteFill}
            >
                <MapView
                    provider={undefined}
                    followsUserLocation={true}
                    showsUserLocation={true}
                    style={styles.map}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}
                    initialRegion={region}

                >
                    <UrlTile
                        /**
                         * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
                         * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
                         */
                        urlTemplate={urlTemplate}
                        /**
                         * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
                         * MKTileOverlay. iOS only.
                         */
                        maximumZ={19}
                        /**
                         * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
                         * to be used. Its default value is false.
                         */
                        flipY={false}


                    />
                    {markerFlatList.map((marker: any, index: any) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng) }}
                            title={marker.title}
                            description={marker.description}
                        >
                            <FontAwesome name="heartbeat" size={24} color="green" />
                        </Marker>

                    ))}
                </MapView>
                
                    <MarkersList markersList={markerFlatList} />
            </View>
        </View >


    );
}

export default MapScreen;


