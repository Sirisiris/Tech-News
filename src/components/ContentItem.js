import React from "react";
import "../components/card.css";
import Grid from "@mui/material/Grid";
import { Chip, Container, Box } from "@mui/material";

export default function ContentItem({
  title,
  author,
  description,
  url,
  urlToImage,
  source,
}) {
  return (
    // Estructura Noticia
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Container className="content-item">
        <a href={url}>
          <img className="content-img" src={urlToImage} alt={urlToImage} />
          <Box className="content-text">
            <Box className="content-detail">
              <Chip label={author} />
              <Chip label={source} variant="outlined" />
            </Box>
            <Box className="line-1"></Box>
            <h2 className="content-title">{title}</h2>
            <Box className="line-1"></Box>
            <p className="content-description">{description}</p>
          </Box>
        </a>
      </Container>
    </Grid>
  );
}
