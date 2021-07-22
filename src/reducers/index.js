const initialState = {
  books: [
    { id: Math.random().toString(), title: 'A Promised Land', category: 'Biography' },
    { id: Math.random().toString(), title: 'Deep Learning', category: 'Learning' },
    { id: Math.random().toString(), title: 'Wind the Bobbin Up', category: 'Kids' },
    { id: Math.random().toString(), title: 'A Game Of Thrones', category: 'Action' },
    { id: Math.random().toString(), title: 'The Haunting Of Hill House', category: 'Horror' },
    { id: Math.random().toString(), title: 'Long walk To Freedom', category: 'History' },
    { id: Math.random().toString(), title: 'The Martian', category: 'Sci-Fi' },
  ],
};

const rootReducer = (state = initialState, action = null) => state;

export default rootReducer;
