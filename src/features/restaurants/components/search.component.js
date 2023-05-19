import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
padding: 16px;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword);
    }, [])
    return (
        <SearchContainer>
            <Searchbar
                value={searchKeyword}
                placeholder="Search for a location"
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={setSearchKeyword}
            />
        </SearchContainer>
    )
};

