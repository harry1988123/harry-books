import { Book } from "@/types/Book.types";
import { Card } from "antd";
import Image from "next/image";
import React from "react";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

const BookCard = ({
    id,
    author,
    title,
    publication_year,
    genre,
    description,
    cover_image,
}: Book) => {
    return (
        <>
            <Link href={`book/${id}`}>
                <Card
                    hoverable={true}
                    style={{ width: 350 }}
                    cover={<Image alt={title} src={cover_image} width={300} height={0} />}
                >
                    <Meta title={title} description={<>{description}
                        <h1>Author: {author}</h1>
                        <div>Publication Year: {publication_year}</div>
                        <div>Genre: {genre}</div>
                    </>} />
                </Card>
            </Link>
        </>
    );
};

export default BookCard;
