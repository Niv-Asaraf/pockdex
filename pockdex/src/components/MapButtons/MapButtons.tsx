import { useState } from "react";
import { ButtonsWrapper, MapButton } from "./MapButtons.styles";

interface MapButtonsProps {
  onChangeMode: (mode: google.maps.TravelMode) => void;
}
const TravelModeEmoji = {
  DrivingEmoji: "🚗",
  WalkingEmoji: "🚶‍♂️",
  TransitEmoji: "🚌",
};


export default function MapButtons({ onChangeMode }: MapButtonsProps) {
  const [selectedMode, setSelectedMode] = useState<google.maps.TravelMode>(
    google.maps.TravelMode.DRIVING
  );

  const onClickButton = (mode: google.maps.TravelMode) => {
    setSelectedMode(mode);
    onChangeMode(mode);
  };
  return (
    <ButtonsWrapper>
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.TRANSIT)}
        $isSelected={selectedMode === "TRANSIT"}
      >
        🚌
      </MapButton>
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.WALKING)}
        $isSelected={selectedMode === "WALKING"}
      >
        🚶‍♂️
      </MapButton>
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.DRIVING)}
        $isSelected={selectedMode === "DRIVING"}
      >
        🚗
      </MapButton>
    </ButtonsWrapper>
  );
}
