import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./MapScreen.style";

import MapView, { Marker } from "react-native-maps";

interface MapScreenProps {}

type RegionType = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type MarkerType = {
  latlng: LatLng;
  title: string;
  description: string;
};

type LatLng = {
  latitude: number;
  longitude: number;
};

type Point = {
  x: number;
  y: number;
};

const MapScreen: React.FC<MapScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [region, setRegion] = useState<RegionType>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [marker, setMarker] = useState<[MarkerType]>([
    {
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: "custom_pin",
      description: "custom_pin",
    },
  ]);

  const onRegionChange = (region: React.SetStateAction<RegionType>) => {
    setRegion(region);
  };

  return (
    <View style={styles.body}>
      <MapView
        style={styles.map}
        region={region}
        // onRegionChange={onRegionChange}
      >
        {marker.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
