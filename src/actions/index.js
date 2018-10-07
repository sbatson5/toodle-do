let nextTodoId = 0
export const addTodo = (text) => {
  return function(dispatch) {
    Promise.resolve(dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    }));
  };
}

export const setVisibilityFilter = (filter) => {
  return function(dispatch) {
    Promise.resolve(dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    }));
  };
}

export const toggleTodo = (id) => {
  return function(dispatch) {
    Promise.resolve(dispatch({
      type: 'TOGGLE_TODO',
      id
    }));
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
