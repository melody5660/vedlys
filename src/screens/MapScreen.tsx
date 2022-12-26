import { useState } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE = 55.17;
const LONGITUDE = 23.57;
const LATITUDE_DELTA = 0.0922;
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
    const [urlTemplate, setUrlTemplate] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    return (

        <View style={styles.container}>
            <ScrollView
                style={StyleSheet.absoluteFill}
                contentContainerStyle={styles.scrollview}
            >
                <MapView
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

                </MapView>
            </ScrollView>
        </View>


    );
}

export default MapScreen;


