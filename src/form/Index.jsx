import React from "react";
import { Form, Input, Button, Select, InputNumber, Spin } from "antd";
import { useSelector } from "react-redux";
import { handleCreateBook, handleUpdateBook } from "../api/BooksApi";

const AddEditForm = () => {
  const [form] = Form.useForm();
  const { isEdit, selectedBook, isFormLoading } = useSelector(
    (state) => state.bookLib
  );

  const onFinish = async (values) => {
    if (isEdit) {
      handleUpdateBook(selectedBook.id, values);
    } else {
      handleCreateBook(values);
    }
  };

  return (
    <Spin spinning={isFormLoading}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={isEdit ? selectedBook : {}}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input placeholder="e.g. Clean Code" />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Author is required" }]}
        >
          <Input placeholder="e.g. Robert C. Martin" />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rating"
          rules={[
            { required: true, message: "Rating is required" },
            {
              type: "number",
              min: 0,
              max: 5,
              message: "Rating must be between 0 and 5",
            },
          ]}
        >
          <InputNumber
            step={0.1}
            min={0}
            max={5}
            placeholder="e.g. 4.5"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select placeholder="Select category">
            <Option value="Programming">Programming</Option>
            <Option value="JavaScript">JavaScript</Option>
            <Option value="Algorithms">Algorithms</Option>
            <Option value="Design Patterns">Design Patterns</Option>
            <Option value="UX Design">UX Design</Option>
            <Option value="Software Engineering">Software Engineering</Option>
            <Option value="Career">Career</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Cover Image URL"
          name="cover"
          rules={[
            { required: true, message: "Cover image URL is required" },
            { type: "url", message: "Enter a valid URL" },
          ]}
        >
          <Input placeholder="e.g. https://example.com/cover.jpg" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={isFormLoading}
          >
            {isEdit ? "Edit" : "Add"} Book
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default AddEditForm;
