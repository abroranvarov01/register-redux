import React from "react";
import { useGetPhonesQuery } from "../../redux/service/phone";
import ProductCard from "../../components/product-card";
import { Button, Container, Typography } from "@mui/material";
import { useGetCompsQuery } from "../../redux/service/computer";
import { Grid2 } from "@mui/material";

const Home = () => {
  const { data: dataComps } = useGetCompsQuery();
  const { data: dataPhones } = useGetPhonesQuery();
  const [activeTab, setActiveTab] = React.useState("Phones"); // Использование строки "Phones"

  return (
    <div>
      <Container>
        <Button onClick={() => setActiveTab("Phones")}>
          <Typography
            color="primary"
            variant="h4"
            textAlign={"center"}
            style={{ color: activeTab === "Phones" ? "black" : "inherit" }}
          >
            Phones
          </Typography>
        </Button>
        <Button onClick={() => setActiveTab("Computers")}>
          <Typography
            color="primary"
            variant="h4"
            textAlign={"center"}
            style={{ color: activeTab === "Computers" ? "black" : "inherit" }}
          >
            Computers
          </Typography>
        </Button>
        {activeTab === "Phones" && (
          <div>
            <Grid2 container spacing={2} columns={6} alignItems={"center"}>
              {dataPhones?.map((phone) => (
                <ProductCard key={phone.id} {...phone} />
              ))}
            </Grid2>
          </div>
        )}
        {activeTab === "Computers" && (
          <div>
            <Grid2 container spacing={2} columns={6} alignItems={"center"}>
              {dataComps?.map((comp) => (
                <ProductCard key={comp.id} {...comp} />
              ))}
            </Grid2>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
