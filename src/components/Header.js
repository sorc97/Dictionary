import React from 'react'
import {
  AddToggler,
  ChangeLang,
  Search,
  ToggleableAdding,
  NewWord
} from './Containers'

const headerStyle = {
  position: "relative"
}

const Header = () =>
  <header style={headerStyle}>
    <ToggleableAdding className="adding-wrapper">
      <NewWord />
    </ToggleableAdding>

    <AddToggler className="addingToggler" />
    <ChangeLang />
    <Search />
  </header>

export default Header
