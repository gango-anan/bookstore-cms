const initialState = {
  books: [
    { id: String(Math.floor(Math.random() * 1000000)), title: 'A Promised Land', category: 'Biography' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'Deep Learning', category: 'Learning' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'Wind the Bobbin Up', category: 'Kids' },
  ],
};

const bookReducer = (state = initialState, action) => {
  if (action.type === 'CREATE_BOOK') {
    return {
      books: [...state.books, action.payload],
    };
  }
  if (action.type === 'REMOVE_BOOK') {
    return { ...state, books: state.books.filter((book) => book.id !== action.payload.id) };
  }
  return state;
};

export default bookReducer;
