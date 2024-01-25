/**
 * HomePage screen
 *
 * @param {user} object - The user info object to be displayed in home page
 * @returns {HomePage Screen}
 */

// react
import { useState } from "react";

// package
import { Link } from "react-router-dom";

// styles
import "./HomePage.css";

// components
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
      <Link
        to={`https://github.com/${nickname}`}
      >{`https://github.com/${nickname}`}</Link>

      <TextInput
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <Link to={`/weather/${city}`}>
        <Button
          title="Display Weather"
          onClick={() => console.log("Navigate to weather page")}
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </Link>
    </div>
  );
};

export default HomePage;
