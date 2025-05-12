import React from "react";
import { Card, Rate, List, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsAddEditModalOpen,
  setIsEdit,
  setSelectedBook,
} from "../../store/bookLibStore";

import { MdDelete, MdEdit } from "react-icons/md";
import { handleDeleteBook } from "../../api/BooksApi";

const { Meta } = Card;

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { isGridView } = useSelector((state) => state.bookLib);

  const handleActionClick = async (action) => {
    if (action === "delete") {
      await handleDeleteBook(item.id);
    }
    if (action === "edit") {
      // wait for the setSelectedBook to be set before opening the modal
      await dispatch(setSelectedBook(item));
      await dispatch(setIsEdit(true));
      dispatch(setIsAddEditModalOpen(true));
    }
  };

  if (!isGridView) {
    return (
      <>
        <List.Item.Meta
          avatar={
            <img
              alt="cover"
              src={item.cover}
              style={{
                height: "8rem",
                aspectRatio: "9/16",
              }}
            />
          }
          title={item.title}
          description={
            <div>
              <Rate disabled allowHalf defaultValue={item.rating} />
              <p>{item.author}</p>
              <p>{item.description}</p>
              <MdEdit
                className="card-action-btn edit-icon"
                key="edit"
                onClick={() => handleActionClick("edit")}
              />
              <Popconfirm
                title="Delete the book"
                description="Are you sure to delete this book?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => handleActionClick("delete")}
              >
                <MdDelete
                  className="card-action-btn delete-icon"
                  key="delete"
                />
              </Popconfirm>
            </div>
          }
        />
      </>
    );
  }
  return (
    <Card
      hoverable
      //   style={{ width: 240 }}
      cover={
        <img
          alt="cover"
          src={item.cover}
          style={{
            height: "20rem",
            borderRadius: "0.5rem",
          }}
        />
      }
      actions={[
        <MdEdit
          className="card-action-btn edit-icon"
          key="edit"
          onClick={() => handleActionClick("edit")}
        />,
        <Popconfirm
          title="Delete the book"
          description="Are you sure to delete this book?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleActionClick("delete")}
        >
          <MdDelete className="card-action-btn delete-icon" key="delete" />
        </Popconfirm>,
      ]}
    >
      <Rate disabled allowHalf defaultValue={item?.rating} />
      <Meta title={item?.title} description={item?.author} />
    </Card>
  );
};

export default ItemCard;
