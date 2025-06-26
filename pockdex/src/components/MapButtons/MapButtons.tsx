import { useState } from "react";
import { ButtonsWrapper, MapButton } from "./MapButtons.styles";
import { TravelModeEmoji } from "../../data/appConstants";

interface MapButtonsProps {
  onChangeMode: (mode: google.maps.TravelMode) => void;
}

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
        $isSelected={selectedMode === google.maps.TravelMode.TRANSIT}
      >
        {TravelModeEmoji.TransitEmoji}
      </MapButton>
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.WALKING)}
        $isSelected={selectedMode === google.maps.TravelMode.WALKING}
      >
        {TravelModeEmoji.WalkingEmoji}
      </MapButton>
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.DRIVING)}
        $isSelected={selectedMode === google.maps.TravelMode.DRIVING}
      >
        {TravelModeEmoji.DrivingEmoji}
      </MapButton>
    </ButtonsWrapper>
  );
}
