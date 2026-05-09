import React from "react";
import { NationalNewsInfo, ListOfNews, NewsCategory } from "../components/news";

export default function HomePage() {
  return (
    <>
      <NationalNewsInfo />
      <ListOfNews />
      <NewsCategory />
    </>
  );
}
