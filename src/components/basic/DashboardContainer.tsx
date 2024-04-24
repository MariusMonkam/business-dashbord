import React, { ReactNode } from "react";
import Container, { ContainerProps } from "@mui/material/Container";

interface DashboardContainerProps extends ContainerProps {
  children: ReactNode;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};

export default DashboardContainer;
