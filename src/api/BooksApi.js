import axios from "axios";
import { notification } from "antd";
import { bookLibSlice } from "../store/bookLibStore";
import { store } from "../store/Store";

const API_URL = "http://localhost:3001/books";

// error notification
export const errorNotification = () => {
  notification.error({
    message: "Something went wrong",
    description: "Please check your internet connection or try again later.",
  });
};

// success notification
const succesNotification = () => {
  return notification.success({
    message: "Success",
    description: "Your request was successful.",
    onClick: () => {
      console.log("Notification Clicked");
    },
  });
};

// API call with axios
const fetchBooks = () => axios.get(API_URL);
const createBook = (book) => axios.post(API_URL, book);
const updateBook = (id, data) => axios.put(`${API_URL}/${id}`, data);
const deleteBook = (id) => axios.delete(`${API_URL}/${String(id)}`);

export const handleFetchBooks = async () => {
  store.dispatch(bookLibSlice.actions.setLoading(true));
  try {
    const response = await fetchBooks();

    if (response.status === 200) {
      store.dispatch(bookLibSlice.actions.setBooks(response.data));
      succesNotification();
    } else {
      store.dispatch(bookLibSlice.actions.setBooks([]));
      errorNotification();
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    errorNotification();
    store.dispatch(bookLibSlice.actions.setBooks([]));
  } finally {
    store.dispatch(bookLibSlice.actions.setLoading(false));
  }
};

export const handleDeleteBook = async (id) => {
  store.dispatch(bookLibSlice.actions.setLoading(true));
  try {
    const response = await deleteBook(id);

    if (response.status === 200 || response.status === 204) {
      succesNotification();
      handleFetchBooks();
    } else {
      errorNotification();
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    errorNotification();
  } finally {
    store.dispatch(bookLibSlice.actions.setLoading(false));
  }
};

export const handleCreateBook = async (book) => {
  store.dispatch(bookLibSlice.actions.setIsFormLoading(true));
  try {
    const response = await createBook(book);

    if (response.status === 201) {
      succesNotification();
      handleFetchBooks();
    } else {
      errorNotification();
    }
  } catch (error) {
    console.error("Error creating book:", error);
    errorNotification();
  } finally {
    // close the modal after the request is completed
    store.dispatch(bookLibSlice.actions.setIsFormLoading(false));
    store.dispatch(bookLibSlice.actions.setIsAddEditModalOpen(false));
  }
};

export const handleUpdateBook = async (id, data) => {
  store.dispatch(bookLibSlice.actions.setIsFormLoading(true));
  try {
    const response = await updateBook(id, data);

    if (response.status === 200) {
      succesNotification();
      handleFetchBooks();
    } else {
      errorNotification();
    }
  } catch (error) {
    console.error("Error updating book:", error);
    errorNotification();
  } finally {
    // close the modal after the request is completed
    store.dispatch(bookLibSlice.actions.setIsFormLoading(false));
    store.dispatch(bookLibSlice.actions.setIsAddEditModalOpen(false));
  }
};
