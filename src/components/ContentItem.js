import React from "react";
import "../components/content.css"
import Grid from "@mui/material/Grid";

export default function ContentItem({
  title,
  author,
  description,
  url,
  urlToImage,
}) {
  return (

    // estructura noticia
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <section className="content-item">
        <a href={url}>
        <img className="content-img" src={urlToImage} alt={urlToImage} />
    <div className="content-text">
        <h3>
          {title}
        </h3>
        <div className="content-detail">
        <p>{author}</p>
        </div>
        <p className="content-description">{description}</p>
        </div>
      </a>
      </section>
    </Grid>
  );
}
