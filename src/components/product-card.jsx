import { Box, Button } from "@mui/material";
import React from "react";

const ProductCard = (props) => {
  return (
    <Box textAlign={"center"} border={1} sx={{ p: 2 }} maxWidth={200}>
      <div>
        <img src={props.img} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{props.rame}</p>
        <p>${props.color}</p>
        <p>${props.brand}</p>
      </div>
      <p>${props.price}</p>
      <Button color="success" sx={{ mb: 2 }} fullWidth variant="contained">
        Add
      </Button>
      <Button color="error" sx={{ mb: 2 }} fullWidth variant="contained">
        delete
      </Button>
    </Box>
  );
};

export default ProductCard;
