import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/reducer/product-reducer";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(props));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(props.id));
  };

  return (
    <Box textAlign={"center"} border={1} sx={{ p: 2 }} maxWidth={200}>
      <div>
        <img style={{ width: "200px" }} src={props.img} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{props.rame}</p>
        <p>${props.color}</p>
        <p>${props.brand}</p>
      </div>
      <p>${props.price}</p>
      <Button
        onClick={handleAddProduct}
        color="success"
        sx={{ mb: 2 }}
        fullWidth
        variant="contained"
      >
        Add
      </Button>
      <Button
        onClick={handleRemoveProduct}
        color="error"
        sx={{ mb: 2 }}
        fullWidth
        variant="contained"
      >
        Delete
      </Button>
    </Box>
  );
};

export default ProductCard;
