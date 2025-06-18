
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/pokemon-logo.png'
import { ButtonGroup, Logo, NavButton, Wrapper } from './TopBar.styles';

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
     return location.pathname === path;
} 
    
  return (
     <Wrapper >
    <Logo src ={logo} alt="logo" />
       <ButtonGroup>
         <NavButton
          onClick={() => navigate('/')}
          $active = {isActive('/')}
        >
          Home
        </NavButton>
    
        <NavButton
          onClick = {() => navigate('/favorites')}
          $active = {isActive('/favorites')}
        >
          Favorites
        </NavButton>
      </ButtonGroup>
    
    </Wrapper>
  );
}


