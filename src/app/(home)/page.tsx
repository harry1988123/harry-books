import Banner from "./components/Banner"
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchBar />
      <BookList />
    </>
  );
}
