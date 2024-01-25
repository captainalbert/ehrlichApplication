import "./HomePage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../../components/Title/Title";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

interface HomePageProps {
  user: any;
}

const HomePage = ({ user }: HomePageProps) => {
  const { nickname } = user;

  const [city, setCity] = useState("");

  return (
    <div className="home">
      <Title title={nickname} />
      <a
        href={`https://github.com/${nickname}`}
      >{`https://github.com/${nickname}`}</a>

      <TextInput
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <Link to={`/weather/${city}`}>
        <Button
          title="Display Weather"
          onClick={() => console.log("Display weather")}
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </Link>
    </div>
  );
};

export default HomePage;
