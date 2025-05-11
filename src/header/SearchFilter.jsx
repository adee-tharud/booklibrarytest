import { Select, Space, Input } from "antd"

const { Search } = Input;

const options = [
    { value: "title", label: "By title" },
    { value: "author", label: "By author" },
  ];

const SearchFilter = () => {
    return(
        <Space.Compact>
            <Select
            defaultValue="title"
            options={options}
            style={{ minWidth: 120 }}
            />
            <Search
            placeholder="Search (min 3 characters)"
            />
            
        </Space.Compact>
    )
}

export default SearchFilter;