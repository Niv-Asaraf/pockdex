import {
  FilterLabel,
  FilterSelect,
  FilterWrapper,
} from "./PokemonTypeFilter.styles";

type Props = {
  selectedType: string;
  onChangeType: (value: string) => void;
};

export default function PokemonTypeFilter({
  selectedType,
  onChangeType,
}: Props) {
  const types = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="type-filter"> Filter by type: </FilterLabel>

      <FilterSelect
        id="type-filter"
        value={selectedType}
        onChange={(e) => onChangeType(e.target.value)}
      >
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </FilterSelect>
    </FilterWrapper>
  );
}
