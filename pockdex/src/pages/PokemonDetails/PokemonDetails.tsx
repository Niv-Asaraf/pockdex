
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import type { PokemonFullDetails } from "../../types/pokemon";
import { BackHomeButton, CardDetailsWrapper } from "./PokemonDetails.styles";


interface PokemonDetailsProps {
    setSelectedName: React.Dispatch < React.SetStateAction < string> >;
    setShowLoadButton: React.Dispatch < React.SetStateAction < boolean> >;
    selectedPokemon: PokemonFullDetails;
    
}
export default function PokemonDetails({setSelectedName,selectedPokemon,setShowLoadButton}: PokemonDetailsProps) {

    useEffect(()=>{

        setShowLoadButton(false);
    },[])

    const backToHome = () =>{
        setShowLoadButton(true);
        setSelectedName("");
    }

    return(
        
        <CardDetailsWrapper>   

            <BackHomeButton onClick={backToHome}> ← Home page </BackHomeButton>     
                            
                <PokemonCard 
                    name={selectedPokemon.name} 
                    imgUrl={selectedPokemon.sprites.front_default} 
                    index={selectedPokemon.id} 
                    ispokemonDetails={true} 
                    setSelectedName={setSelectedName}
                    selectedPokemon={selectedPokemon} 
                    />
        </CardDetailsWrapper>
    )
}