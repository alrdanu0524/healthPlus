import { Image } from "@mantine/core";
import React from "react";
import BannerNameDark from "../../assets/bannerImg.jpg";

function Banner() {
  return (
    <div
      style={{
        height: "500px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
      }}
    >
      <Image radius="md" w="100%" h="100%" fit="contain" src={BannerNameDark} />
    </div>
  );
}

export default Banner;
