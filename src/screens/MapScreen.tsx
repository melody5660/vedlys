import { useState } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { UrlTile, LocalTile, Marker } from 'react-native-maps';

import markers from '../../markers.json';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE = 54.689691;
const LONGITUDE = 25.272889;
const LATITUDE_DELTA = 0.0222;
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
        height: 500,
    },
});


const MapScreen = () => {
    console.log("map screen start");
    const markersList = new Array();
    markers.items.forEach((a) => {
        if (a.lat !== '' && a.lng !== '') {
            markersList.push(a);
        }
    });
    const [urlTemplate, setUrlTemplate] = useState("http://c.tile.openstreetmap.org/{z}/{x}/{y}.png");
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {

        const toRadian = (n: number) => (n * Math.PI) / 180

        /*let lat2 = lattitude2;
        let lon2 = longittude2;
        let lat1 = lattitude1;
        let lon1 = longittude1;*/

        let R = 6371  // km
        let x1 = lat2 - lat1
        let dLat = toRadian(x1)
        let x2 = lon2 - lon1
        let dLon = toRadian(x2)
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        let d = R * c
        console.log("distance==?", d)
        return d
    }

    return (

        <View style={styles.container}>
            <ScrollView
                style={StyleSheet.absoluteFill}
                contentContainerStyle={styles.scrollview}
            >
                <MapView
                    provider={undefined}
                    followsUserLocation={true}
                    showsUserLocation={false}
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
                    {markersList.map((marker: any, index: any) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng) }}
                            title={marker.title}
                            description={marker.description}

                        />
                    
                    ))}
            </MapView>
        </ScrollView>
        </View >


    );
}

export default MapScreen;


