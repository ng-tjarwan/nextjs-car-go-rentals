"use client";

import { Container } from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { useAppContext } from "@/context/app-context";

import styles from "./styles.module.css";
import { useEffect } from "react";

interface MapProps {
  height?: string;
}

interface MapMarkerPros {
  latitude: number;
  longitude: number;
  name: string;
}

const Map: React.FC<MapProps> = ({ height = "300px" }) => {
  const {
    state: { region, country },
  } = useAppContext();

  const getCoordinations = (): [number, number] => {
    if (region) {
      return [region.latitude || 0, region.longitude || 0];
    }

    if (country) {
      return [country.latitude || 0, country.longitude || 0];
    }

    return [51.505, -0.09];
  };

  return (
    <Container className={styles.container} size="100%">
      <MapContainer
        className={styles.mapContainer}
        center={getCoordinations()}
        zoom={14}
        style={{ height: height }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <MapMarker
          latitude={getCoordinations()[0]}
          longitude={getCoordinations()[1]}
          name={region?.name || country?.name || ""}
        />
      </MapContainer>
    </Container>
  );
};

const MapMarker: React.FC<MapMarkerPros> = ({ latitude, longitude, name }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude]);
  }, [latitude, longitude, map]);

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default Map;
