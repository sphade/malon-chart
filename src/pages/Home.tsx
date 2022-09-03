import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip  } from 'recharts';
import { useGetAwards } from "../hooks/queries";

const Home = () => {
  const awards = useGetAwards();
 

  console.log(awards.data?.data.resource.awards);
  if (awards.isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <LineChart width={800} height={400} data={awards.data?.data.resource.awards} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="year" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="awardName" />
        <Tooltip />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Home;
