import { Book } from '@/types/Book.types';
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

const page = async ({ params }: { params: { bookId: string } }) => {
    const { bookId } = params;
    const response = await fetch(`https://freetestapi.com/api/v1/books/${bookId}`);
    const data: Book = await response.json();
    const { title, cover_image, description, author, genre, publication_year } = data

    return (
        <>
            <Card className='mt-5 w-45 mx-auto'>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                Author: {author}
                            </div>
                            <div>
                                Publication year: {publication_year}
                            </div>
                        </div>
                        <Image src={cover_image} alt={''} width={80} height={0} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    Genre: {genre}
                </CardFooter>
            </Card>
        </>
    )
}

export default page