import {compose} from 'redux'

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) => 
  array.filter(item => String(item.id) === id)


export const findById = compose(
  getFirstArrayItem,
  filterArrayById 
)

export const filterArrayByTitle = (array, title) =>
  array.filter(item => item.eng === title || item.rus === title)
  // array.filter(item => item.eng === title)

export const findByTitle = compose(
  getFirstArrayItem,
  filterArrayByTitle
)
