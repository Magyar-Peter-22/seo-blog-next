'use client';

import Typography from "@mui/material/Typography";
import Editor from "./ui/editor/ArticleEditor";
import React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import { Toolbar } from "@mui/material";
import NoSSR from "./ui/NoSSR";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Toolbar />
      <Typography variant="h4">
        Article editor
      </Typography>
      <Typography>
        Images can be uploaded only via external url. To use your own images here, use a cloud service like google drive.
      </Typography>
      <Box sx={{ fontFamily: 'var(--font-roboto)' }}>
        <NoSSR>
          <Editor />
        </NoSSR>
      </Box>
    </Container>
  );
}
