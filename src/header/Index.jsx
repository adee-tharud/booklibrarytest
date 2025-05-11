import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleGridView } from "../store/bookLibStore"
import { IoGrid, IoReorderFour } from "react-icons/io5"
import SearchFilter from "./SearchFilter";

const HeaderContent = () => {

    const dispatch = useDispatch();
    const { isGridView } = useSelector((state) => state.bookLib);

    return (
        <div className="header-content">
            {/* logo */}
            <div className="logo">
                Book Wise
            </div>
            {/* search bar */}
            <div className="search-bar">
            <SearchFilter/>
            </div>
            {/* toggle view */}

            <div className="toggle" onClick={()=> dispatch(toggleGridView())}>
            {isGridView ? <IoGrid /> : <IoReorderFour />}
            </div>
        </div>
    )
}

export default HeaderContent;