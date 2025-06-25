import { useState } from "react";
import { theme } from "../../styles/theme";
import { MapButton } from "./MapButtons.styles";

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
    <div
      style={{
        display: "flex",
        gap: "5px",
        position: "absolute",
        top: 11,
        right: 70,
        zIndex: 1,
      }}
    >
      <MapButton
        onClick={() => onClickButton(google.maps.TravelMode.TRANSIT)}
        $selectedMode={selectedMode}
      >
        {TravelModeEmoji.TransitEmoji}
      </MapButton>
      <MapButton $selectedMode={selectedMode}>
        {TravelModeEmoji.WalkingEmoji}
      </MapButton>
      <MapButton
        $selectedMode={selectedMode}
        style={{
          backgroundColor:
            selectedMode === "DRIVING"
              ? theme.colors.green
              : theme.colors.lightGray,
          borderRadius: "12px",
          padding: "2px 8px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={() => onClickButton(google.maps.TravelMode.DRIVING)}
      >
        {TravelModeEmoji.DrivingEmoji}
      </MapButton>
    </div>
  );
}
