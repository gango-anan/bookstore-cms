export const createBook = (id, title, category) => ({
  type: 'CREATE_BOOK', payload: { id, title, category },
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK', payload: { id },
});

export const changeFilter = (name) => ({
  type: 'CHANGE_FILTER', payload: name,
});
