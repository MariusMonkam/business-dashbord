import React from "react";
import ItemContainer from "../components/basic/ItemContainer";

export interface DashpoardProps {}

const Dashboard: React.FC<DashpoardProps> = ({}) => {
  return (
    <>
      <ItemContainer itemName="marketing">
        <div>Dashboard</div>
      </ItemContainer>
    </>
  );
};

export default Dashboard;
