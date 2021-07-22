const initialState = {
  books: [
    { book_id: Date.now().toString, title: 'A Promised Land', category: 'Biography' },
    { book_id: Date.now().toString, title: 'Deep Learning', category: 'Learning' },
    { book_id: Date.now().toString, title: 'Wind the Bobbin Up', category: 'Kids' },
    { book_id: Date.now().toString, title: 'A Game Of Thrones', category: 'Action' },
    { book_id: Date.now().toString, title: 'The Haunting Of Hill House', category: 'Horror' },
    { book_id: Date.now().toString, title: 'Long walk To Freedom', category: 'History' },
    { book_id: Date.now().toString, title: 'The Martian', category: 'Sci-Fi' }
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;