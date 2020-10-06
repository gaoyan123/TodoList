import { VISIBILITY_FILTER } from '../interface'
let initId = 0
export const addTodo = ( text: string ) => {
  return {
    type: 'ADD_TODO',
    id: initId++,
    text
  }
}

export const setVisibilityFilter = ( filter: VISIBILITY_FILTER ) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const removeTodo = ( id: number ) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const filterTodo = (  filter: VISIBILITY_FILTER) => {
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