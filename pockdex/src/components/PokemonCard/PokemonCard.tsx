
import { Card, Image, Span, TopContentWrapper } from "./PokemonCard.styles";


interface PokemonCardProps {
  index: number;
  name: string;
  imgUrl: string;
}
export default function PokemonCard( {index,name,imgUrl}:PokemonCardProps) {
    return(
       
        <Card>
            <TopContentWrapper >
                <Span>
                #{(index)}
                </Span>
            </TopContentWrapper>
            <Image src={imgUrl} alt={index + " - " + name}/>
            <Span >{name}</Span>
            </Card>
    )
}