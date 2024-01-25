/**
 * HomePage screen
 *
 * @param {user} object - The user info object to be displayed in home page
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
  const [error, setError] = useState("");

  return (
    <div className="home">
      <div className="user-info">
        <Title title={nickname} />
        <Link
          to={`https://github.com/${nickname}`}
        >{`https://github.com/${nickname}`}</Link>
      </div>

      <TextInput
        placeholder="City"
        onChange={(e) => {
          setCity(e.target.value), setError("");
        }}
        value={city}
        error={error ? true : false}
      />

      <Link to={city ? `/weather/${city}` : "/"}>
        <Button
          title="Display Weather"
          onClick={() =>
            !city ? setError("Please enter city first.") : setError("")
          }
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </Link>
    </div>
  );
};

export default HomePage;
