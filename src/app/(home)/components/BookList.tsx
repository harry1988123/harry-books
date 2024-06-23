import { Flex } from "antd";
import React from "react";
import BookCard from "./BookCard";
import { Book, Books } from "@/types/Book.types";

const BookList = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/books");
    const data: Books = await response.json();

    return (
        <Flex wrap gap={"40px"} align="center" justify="center">
            {data.map((ele: Book) => (
                <BookCard key={ele.id} {...ele} />
            ))}
        </Flex>
    );
};

export default BookList;
