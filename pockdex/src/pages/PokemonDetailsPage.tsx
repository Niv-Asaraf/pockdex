import { useParams } from "react-router-dom"

export default function PokemonDetailsPage () {

    const {name} = useParams<{name:string}>();

    return(
        <p>Description Page - {name}</p>
    )
}