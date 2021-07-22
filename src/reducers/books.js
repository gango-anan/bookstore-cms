const initialState = {
  books: [
    { id: String(Math.floor(Math.random() * 1000000)), title: 'A Promised Land', category: 'Biography' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'Deep Learning', category: 'Learning' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'Wind the Bobbin Up', category: 'Kids' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'A Game Of Thrones', category: 'Action' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'The Haunting Of Hill House', category: 'Horror' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'Long walk To Freedom', category: 'History' },
    { id: String(Math.floor(Math.random() * 1000000)), title: 'The Martian', category: 'Sci-Fi' },
  ],
};

const bookReducer = (state = initialState, action) => {
  if (action.type === 'CREATE_BOOK') {
    return [
      ...state.books,
      action,
    ];
  }
  if (action.type === 'REMOVE_BOOK') {
    return state.books.filter((book) => book.id !== action.id);
  }
  return state.books;
};

export default bookReducer;
