import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isGridView: true,
  books: [],
  // use this to store the original books list for filtering
  originalBooks: [],
  selectedBook: null,
  isAddEditModalOpen: false,
  isEdit: false,
  isFormLoading: false,
};

export const bookLibSlice = createSlice({
  name: "bookLib",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleGridView: (state) => {
      state.isGridView = !state.isGridView;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
      if (!state.originalBooks.length) {
        state.originalBooks = action.payload;
      }
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    setIsAddEditModalOpen: (state, action) => {
      state.isAddEditModalOpen = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setIsFormLoading: (state, action) => {
      state.isFormLoading = action.payload;
    },
    resetBooks: (state) => {
      state.books = state.originalBooks;
    },
  },
});

export const {
  setLoading,
  toggleGridView,
  isGridView,
  books,
  setSelectedBook,
  selectedBook,
  setIsAddEditModalOpen,
  isAddEditModalOpen,
  setIsEdit,
  isEdit,
  setIsFormLoading,
  isFormLoading,
  resetBooks,
  setBooks,
} = bookLibSlice.actions;

export default bookLibSlice.reducer;
