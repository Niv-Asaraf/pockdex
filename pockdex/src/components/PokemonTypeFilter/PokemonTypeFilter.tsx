import { PokemonTypes } from "../../data/appConstants";
import {
  FILTER_LABLE,
  FILTER_SELECT_ID,
  OPTION_ALL_TEXT,
  OPTION_ALL_VALUE,
} from "../../data/appTexts";
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
  const types = Object.values(PokemonTypes);

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={FILTER_SELECT_ID}> {FILTER_LABLE} </FilterLabel>

      <FilterSelect
        id={FILTER_SELECT_ID}
        value={selectedType}
        onChange={(e) => onChangeType(e.target.value)}
      >
        <option value={OPTION_ALL_VALUE}>{OPTION_ALL_TEXT}</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </FilterSelect>
    </FilterWrapper>
  );
}
