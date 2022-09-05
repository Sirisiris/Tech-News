import React, { useState, useEffect } from "react";
import ContentItem from "../components/ContentItem";
import { Grid } from "@mui/material";

export default function ContentList({articles}) {

  return (
    // mapeado + props
    <Grid container spacing={2} style={{paddingTop: "6rem"}}>
      {articles.map((article) => {
        return (
          <ContentItem
            title={article.title}
            author={article.author}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            source={article.source.name}
          />
        );
      })}
    </Grid>
  );
}
