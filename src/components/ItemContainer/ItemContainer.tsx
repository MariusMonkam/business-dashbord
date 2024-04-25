import React, { ReactNode } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import itemConfig from "../../configurator/item.config.json";

// Import the JSON configuration

// Define props interface for the ItemContainer component
interface ItemContainerProps {
  children?: ReactNode; // To allow any children components
  itemName: string; // The name of the item to retrieve configuration
}

// Define styled component for the card container
const StyledContainer = styled(Container)(
  ({ itemName }: ItemContainerProps) => ({
    // Default styles
    width: itemConfig[itemName as keyof typeof itemConfig].width, // Retrieve width from JSON config
    height: itemConfig[itemName as keyof typeof itemConfig].height, // Retrieve height from JSON config
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.08)",
  })
);

// ItemContainer component
const ItemContainer: React.FC<ItemContainerProps> = ({
  children,
  itemName,
}) => {
  console.log(itemName);
  return <StyledContainer itemName={itemName}>{children}</StyledContainer>;
};

export default ItemContainer;
