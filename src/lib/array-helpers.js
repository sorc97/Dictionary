import { compose } from 'redux'

export const getFirstArrayItem = array => array[0]

// Filter and find by id
export const filterArrayById = (array, id) => 
  array.filter(item => String(item.id) === id)
 
export const findById = compose(
  getFirstArrayItem,
  filterArrayById 
)

// Filter and find by title
export const filterArrayByTitle = (array, title) =>
  array.filter(
    item => item.eng === title || item.rus === title
  )

export const findByTitle = compose(
  getFirstArrayItem,
  filterArrayByTitle
)