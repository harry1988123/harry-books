import Image from "next/image";
import Banner from "./components/Banner"
import BookList from "./components/BookList";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <Banner />
      <Input />
      <BookList />
    </>
  );
}
