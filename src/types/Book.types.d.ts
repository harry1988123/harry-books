export type Books = Book[];

export interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number | string;
  genre: string[];
  description: string;
  cover_image: string;
}
