import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/pokemon-logo.png";
import { ButtonGroup, Logo, NavButton, Wrapper } from "./TopBar.styles";
import {
  ALT_LOGO,
  NAV_BUTTON_FAVORITES,
  NAV_BUTTON_HOME,
} from "../../data/appTexts";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Wrapper>
      <Logo src={logo} alt={ALT_LOGO} />
      <ButtonGroup>
        <NavButton onClick={() => navigate("/")} $active={isActive("/")}>
          {NAV_BUTTON_HOME}
        </NavButton>

        <NavButton
          onClick={() => navigate("/favorites")}
          $active={isActive("/favorites")}
        >
          {NAV_BUTTON_FAVORITES}
        </NavButton>
      </ButtonGroup>
    </Wrapper>
  );
}
