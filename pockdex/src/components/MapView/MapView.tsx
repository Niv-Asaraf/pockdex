import { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import MapButtons from "../MapButtons/MapButtons";
import type { PokemonMapDetails } from "../../types/pokemon";
import { MapWrapper } from "./MapView.styles";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface MapProps {
  pokemon: PokemonMapDetails;
}

interface PlaceType {
  lat: number;
  lng: number;
}

export default function MapView({ pokemon }: MapProps) {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [travelMode, setTravelMode] = useState<google.maps.TravelMode | null>(
    null
  );
  // const [error, SetError] = useState<boolean>(false);
  const [errorMessage, SetErrorMessage] = useState<string>("");

  interface PlaceType {
    lat: number;
    lng: number;
  }
  const MOVEO_LOCATION: PlaceType = {
    lat: 32.063331,
    lng: 34.768214,
  };

  const handleDirectionsCallback = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus
  ): void => {
    if (status === "OK" && result) {
      setDirections(result);
    } else {
      SetErrorMessage("Directions are unavailable");
    }
  };

  const changeTravelMode = (mode: google.maps.TravelMode) => {
    setDirections(null);
    setTravelMode(mode);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY} onLoad={() => setIsLoaded(true)}>
      {isLoaded && (
        <MapWrapper>
          {(!directions || !isLoaded) && (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}

          <GoogleMap
            mapContainerStyle={{
              height: "70vh",
              width: "85vw",
              borderRadius: "15px",
              display: "flex",
              position: "relative",
            }}
            center={{ lat: 32.0853, lng: 34.7818 }}
            zoom={13}
          >
            <MapButtons onChangeMode={changeTravelMode} />
            <Marker position={MOVEO_LOCATION} title="Moveo Group" />
            <Marker
              position={pokemon.location}
              title={pokemon.name}
              icon={{
                url: pokemon.iconUrl,
                scaledSize: new window.google.maps.Size(110, 110),
                anchor: new window.google.maps.Point(55, 55),
              }}
              animation={google.maps.Animation.BOUNCE}
            />
            {!directions ? (
              <DirectionsService
                options={{
                  origin: pokemon.location,
                  destination: MOVEO_LOCATION,
                  travelMode: travelMode || google.maps.TravelMode.DRIVING,
                }}
                callback={handleDirectionsCallback}
              />
            ) : (
              directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{ suppressMarkers: true }}
                />
              )
            )}
          </GoogleMap>
        </MapWrapper>
      )}
    </LoadScript>
  );
}
