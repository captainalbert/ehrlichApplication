import React from "react";

interface HomePageProps {
  user: object | undefined;
}

const HomePage = ({ user }: HomePageProps) => {
  console.log("user", user);
  return <div>HomePage</div>;
};

export default HomePage;
