import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "20rem",
        marginLeft: "30rem",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
      <h1> Please wait while it's Loading </h1>
    </Box>
  );
}
