import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentItem from "../components/ContentItem";

export default function ContentList() {

  //consumo de la Api
  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tech&apiKey=931f99f8b8bb4d07996f4ba09eb0273b`
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (

    // mapeado + props

    <section>
      {articles.map((article) => {
        return (
          <ContentItem
            title={article.title}
            author={article.author}
            description={article.description}
            publishedAt={article.publishedAt}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </section>
  );
}
