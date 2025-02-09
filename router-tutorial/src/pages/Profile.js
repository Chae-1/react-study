import { useParams } from "react-router-dom";

const data = {
  velopart: {
    name: "채형일",
    description: "리액트 연습하는 개발자",
  },
  hyeongil: {
    name: "hyeongil",
    description: "hyeongil",
  },
};

const Profile = () => {
  const params = useParams(); // url parameter 조회 가능

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
