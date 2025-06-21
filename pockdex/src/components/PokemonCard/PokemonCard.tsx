

import type { FullPokemonData } from "../../types/pokemon";
import { Card,DescriptionContent,DividerLine,FirstContentWrapper, Image,SecondContentWrapper,
        Span, SpanTitle, StatsBox, StatsContent, TopContentWrapper, TypeBox, TypesWrapper } from "./PokemonCard.styles";


interface PokemonCardProps {
  index: number;
  name: string;
  imgUrl: string;
  ispokemonDetails:boolean;
 setSelectedName: React.Dispatch < React.SetStateAction < string> >;
 selectedPokemon: FullPokemonData | null;

}

export default function PokemonCard( {index,name,imgUrl,ispokemonDetails,
                                      setSelectedName,selectedPokemon}:PokemonCardProps) {
    
    
    const calcTotalStats = () : number => {     
        let total = 0;
        selectedPokemon?.stats.map((s)=>total += s.base_stat)
        return total;
    };


    return(
       
        <Card onClick={ () => setSelectedName(name) } $ispokemondetails={ispokemonDetails}> 

            <FirstContentWrapper id="A">

            <TopContentWrapper >
                <SpanTitle >
                #{(index)}
                </SpanTitle>
            </TopContentWrapper>
            <Image src={imgUrl} alt={index + " - " + name} $ispokemondetails={ispokemonDetails}/>

            <Span $ispokemondetails={ispokemonDetails}>{name}</Span>
            
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
               
                <SecondContentWrapper  id= "B">
                
                        {/* description - Box */}
                <div>
                    <SpanTitle >Description</SpanTitle>
                    <DescriptionContent>{selectedPokemon?.description}</DescriptionContent>
                </div>

                <StatsBox>

                <SpanTitle style={{fontSize:'22px',fontWeight:'500'}} >Stats</SpanTitle>
                
                <StatsContent >

                <span>Hp: {selectedPokemon?.stats[0].base_stat}</span>
                <span>Attack: {selectedPokemon?.stats[1].base_stat}</span>
                <span>Defense: {selectedPokemon?.stats[2].base_stat}</span>
                <span>Special Atk: {selectedPokemon?.stats[3].base_stat}</span>
                <span>Special Def: {selectedPokemon?.stats[4].base_stat}</span>
                <span>Speed: {selectedPokemon?.stats[5].base_stat}</span>
                <span>Total: {calcTotalStats()} </span>

                </StatsContent >

                </StatsBox>

                </SecondContentWrapper>
               </>

                }
        </Card>
    )
}