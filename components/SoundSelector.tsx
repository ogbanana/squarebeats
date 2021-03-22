import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const SoundSelector = () => {
  return (
    <Combobox aria-label="Choose an sound category">
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="Drum" />
          <ComboboxOption value="Piano" />
          <ComboboxOption value="Violin" />
          <ComboboxOption value="Guitar" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default SoundSelector