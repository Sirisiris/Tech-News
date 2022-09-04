import React from "react";
import "../components/content.css"
import Grid from "@mui/material/Grid";

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
    <Grid item xs={12} md={4}>
      <section className="content-item">
        <img className="content-img" src={urlToImage} alt={urlToImage} />
    <div className="content-text">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <div className="content-detail">
        <p>{author}</p>
        <p>{publishedAt}</p>
        </div>
        <p>{description}</p>
        </div>
      </section>
    </Grid>
  );
}
