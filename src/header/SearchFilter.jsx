import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space, Input } from "antd";
import { setBooks } from "../store/bookLibStore";

const { Search } = Input;

const options = [
  { value: "title", label: "By title" },
  { value: "author", label: "By author" },
];

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { originalBooks } = useSelector((state) => state.bookLib);

  const [searchKey, setSearchKey] = useState("title");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce input
  useEffect(() => {
    setLoading(true); // start loading on input change

    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim());
      setLoading(false); // stop loading after debounce
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  // Filter when debounce completes
  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      const filtered = originalBooks.filter((book) =>
        book[searchKey].toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      dispatch(setBooks(filtered));
    } else if (debouncedQuery.length === 0) {
      dispatch(setBooks(originalBooks));
    }
  }, [debouncedQuery, searchKey, originalBooks, dispatch]);

  return (
    <Space.Compact>
      <Select
        defaultValue="title"
        options={options}
        onChange={setSearchKey}
        style={{ minWidth: 120 }}
      />
      <Search placeholder="Search (min 3 characters)"
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      allowClear
      loading={loading}
      />
    </Space.Compact>
  );
};

export default SearchFilter;
