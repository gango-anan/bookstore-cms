export const createBook = (id, title, category) => ({
  type: 'CREATE_BOOK', payload: { id, title, category },
});

export const removeBook = ({ id, title, category }) => ({
  type: 'REMOVE_BOOK', payload: { id, title, category },
});
