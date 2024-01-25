import "./HomePage.css";

import Title from "../../components/Title/Title";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";
import Button from "../../components/Button/Button";

type userObject = {
  name: string;
  nickname: string;
};
interface HomePageProps {
  user: userObject;
}

const HomePage = ({ user }: HomePageProps) => {
  const { nickname } = user;
  const [city, setCity] = useState("");

  console.log(user);
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

      <Button
        title="Display Weather"
        onClick={() => console.log("Display weather")}
        style={{ alignSelf: "center", marginTop: 20 }}
      />
    </div>
  );
};

export default HomePage;
