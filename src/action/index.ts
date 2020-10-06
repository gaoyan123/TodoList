import { VisibilityFilter } from '../interface'
let initId = 0
export const addTodo = ( text: string ) => {
  return {
    type: 'ADD_TODO',
    id: initId++,
    text
  }
}

export const setVisibilityFilter = ( filter: VisibilityFilter ) => {
  return {
    type: 'SET_VisibilityFilter',
    filter
  }
}

export const removeTodo = ( id: number ) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const filterTodo = (  filter: VisibilityFilter) => {
  return {
    type: 'FILTER_TODO',
    filter
  }
}

export const toggleTodo = ( id: number ) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}