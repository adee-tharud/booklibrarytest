import React, { useEffect} from "react";
import { Card, List, Grid, Avatar, FloatButton, Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsAddEditModalOpen,
  setIsEdit,
  setSelectedBook,
} from "../store/bookLibStore";
import UseResponsive from "../hooks/UseResponsive";
import { MdAddBox } from "react-icons/md";
import ItemCard from "./ItemCard";
import { handleFetchBooks } from "../api/BooksApi";
import AddEditForm from "../form/Index";

const Books = () => {
  const { isGridView, isLoading, books, isAddEditModalOpen, isEdit } =
    useSelector((state) => state.bookLib);

  const dispatch = useDispatch();
  const resScreen = UseResponsive();

  useEffect(() => {
    // fetch books when the component mount
    handleFetchBooks();
  }, []);

  console.log("resScreen", isAddEditModalOpen);

  const getGridCount = () => {
    if (isGridView) {
      if (resScreen === "mobile") {
        return 1;
      }
      if (resScreen === "tablet") {
        return 2;
      }
      if (resScreen === "desktop") {
        return 4;
      }
    }
    return 1;
  };
  return (
    <>
      <List
        grid={{
          gutter: 16,
          column: getGridCount(),
        }}
        itemLayout={isGridView ? "vertical" : "horizontal"}
        dataSource={books}
        loading={isLoading}
        renderItem={(item, key) => (
          <List.Item
            key={key}
            className={isGridView ? "grid-item" : "list-item"}
          >
            <ItemCard item={item} key={key} />
          </List.Item>
        )}
      />
      <FloatButton
        icon={<MdAddBox className="add-btn" />}
        onClick={() => dispatch(setIsAddEditModalOpen(true))}
      />

      {/* for add,edit */}
      <Drawer
        title={isEdit ? "Edit Book" : "Add Book"}
        closable={{ "aria-label": "Close Button" }}
        onClose={() => {
          dispatch(setIsAddEditModalOpen(false));
          dispatch(setIsEdit(false));
          dispatch(setSelectedBook(null));
        }}
        open={isAddEditModalOpen}
        // clear the selected book when the modal is closed
        destroyOnHidden
        maskClosable={false}
      >
        <AddEditForm />
      </Drawer>
    </>
  );
};

export default Books;