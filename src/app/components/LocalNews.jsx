"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function LocalNews() {
  //state management
  const [news, setNews] = useState([]);

  //side effects
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news: ", error);
      }
    }
    fetchNews();
  }, []);
  return (
    <section>
      <h2 className="text-3xl text-blue-500 font-semibold mb-4 mx-3">
        Local News: In The Know!
      </h2>
      <div className="flex gap-x-2.5 gap-y-4 flex-wrap">
        {news.map((item, index) => (
          <NewsCard key={index} article={item} />
        ))}
      </div>
    </section>
  );
}
