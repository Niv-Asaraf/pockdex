
export type PokemonBasic = {
    name: string,
    url: string
}

             //PokemonCardPreview
export type PokemonCardDetails = {
    id:number,
    name: string,
    sprites : {
        front_default:string;
    }
}

export type PokemonFullDetails = PokemonCardDetails & {
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  types: {
    type: { name: string };
  }[];
  description: string;
};


export type PokemonDescription = {
  flavor_text_entries: {
    flavor_text: string,
    language: {
      name: string
    };
  }[];
};


export type FullPokemonData = PokemonFullDetails & {
  description: string;
};

