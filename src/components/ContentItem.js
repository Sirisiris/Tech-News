import React from "react";

export default function ContentItem({
  title,
  author,
  description,
  publishedAt,
  url,
  urlToImage,
}) {
  return (

    // estructura noticia

    <div className="content">
      <div className="content-item">
        <img className="content-img" src={urlToImage} alt={urlToImage} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{author}</p>
        <p>{publishedAt}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
