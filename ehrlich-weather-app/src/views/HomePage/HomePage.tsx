import "./HomePage.css";

import Title from "../../components/Title/Title";

type userObject = {
  name: string;
  nickname: string;
};
interface HomePageProps {
  user: userObject;
}

const HomePage = ({ user }: HomePageProps) => {
  const { nickname } = user;
  console.log(user);
  return (
    <div className="home">
      <Title title={nickname} />
      <a
        href={`https://github.com/${nickname}`}
      >{`https://github.com/${nickname}`}</a>
    </div>
  );
};

export default HomePage;
