import React from "react";
import CreateTable from "./CreateTable";

const Stats = () => {
  return (
    <div className="rosterContainer">
      <CreateTable num={1} />
      <CreateTable num={2} />
      <CreateTable num={3} />
      <CreateTable num={4} />
      <CreateTable num={5} />
      <CreateTable num={6} />
    </div >
  );
};

export default Stats;
