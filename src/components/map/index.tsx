"use client";

import { Container } from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./styles.module.css";

const Map = () => {
  return (
    <Container className={styles.container}>
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]}
        zoom={14}
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
