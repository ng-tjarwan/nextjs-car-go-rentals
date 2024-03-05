"use client";

import { Container } from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./styles.module.css";

interface MapProps {
  height?: string;
}

const Map: React.FC<MapProps> = ({ height = "300px" }) => {
  return (
    <Container className={styles.container} size="100%">
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]}
        zoom={14}
        style={{ height: height }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Region Name.</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
