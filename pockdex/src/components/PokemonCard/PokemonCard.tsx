

import type { FullPokemonData } from "../../types/pokemon";
import { Card,DescriptionBox,DescriptionContent,DividerLine,FirstContentWrapper, Image,SecondContentWrapper,
        Span, SpanPokemonIndex, SpanTitle, StatColumnWrapper, StatsBox, StatsContent, TypeBox, TypesWrapper } from "./PokemonCard.styles";


interface PokemonCardProps {
  index: number;
  name: string;
  imgUrl: string;
  ispokemonDetails:boolean;
 setSelectedName: React.Dispatch < React.SetStateAction < string> >;
 selectedPokemon: FullPokemonData | null;
 
 pokemon: {
    id:number,
    name:string,
     sprites : {
        front_default:string;
    }
 }

}

export default function PokemonCard( {pokemon,ispokemonDetails,
                                      setSelectedName,selectedPokemon}:PokemonCardProps) {
    
    const {id,name,sprites} = pokemon;                                 
    
    const calcTotalStats = () : number => {     
        let total = 0;
        selectedPokemon?.stats.map((s)=>total += s.base_stat)
        return total;
    };

    const addZerosToNumber = (index: number) : string => { 
        return `#${index.toString().padStart(3, '0')}`;
    }


    return(
       
        <Card onClick={ () => setSelectedName(name) } $isPokemonDetails={ispokemonDetails}> 

            <FirstContentWrapper >

            <SpanPokemonIndex>{addZerosToNumber(id)}</SpanPokemonIndex>
            <Image src={sprites.front_default} alt={id + " - " + name} $isPokemonDetails={ispokemonDetails}/>

            <Span $isPokemonDetails={ispokemonDetails}>{name}</Span>
            
                {

                ispokemonDetails && 
               <TypesWrapper>
                    {
                    selectedPokemon?.types.map( (t,index) => 
                    <TypeBox $typeName={t.type.name} key={index}>{t.type.name}</TypeBox>)                                  
                    }   
                </TypesWrapper>

                }

            </FirstContentWrapper>

               {          
               ispokemonDetails && 
               <>
               <DividerLine/>
               
                <SecondContentWrapper >
                
                        {/* description - Box */}
                <DescriptionBox >
                    <SpanTitle>Description</SpanTitle>
                    <DescriptionContent>{selectedPokemon?.description}</DescriptionContent>
                </DescriptionBox>

                <StatsBox>

                <SpanTitle>Stats</SpanTitle>
                
                <StatsContent >
                
                <StatColumnWrapper >

                <span>Hp: {selectedPokemon?.stats[0].base_stat}</span>
                <span>Attack: {selectedPokemon?.stats[1].base_stat}</span>
                <span>Defense: {selectedPokemon?.stats[2].base_stat}</span>
                </StatColumnWrapper>

                <StatColumnWrapper >
                <span>Special Atk: {selectedPokemon?.stats[3].base_stat}</span>
                <span>Special Def: {selectedPokemon?.stats[4].base_stat}</span>
                <span>Speed: {selectedPokemon?.stats[5].base_stat}</span>
                </StatColumnWrapper>

                <StatColumnWrapper >  
                <span>Total: {calcTotalStats()} </span>
                </StatColumnWrapper>


                </StatsContent >

                </StatsBox>

                </SecondContentWrapper>
               </>

                }
        </Card>
    )
}