import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  let [userName, setUserName] = useState("");
  let [name1, setName] = useState("");
  let [userImg, setUserImg] = useState("");
  let [userTitle, setUserTitle] = useState("");
  let [userFollowers, setUserFollowers] = useState("");
  let [userFollowing, setUserFollowing] = useState("");

  const fetchData = async () => {
    try {
      const userData = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      console.log(userData.data);
      setUserName(userData.data.login);
      setUserImg(userData.data.avatar_url);
      setName(userData.data.name);
      setUserTitle(userData.data.bio);
      setUserFollowers(userData.data.followers);
      setUserFollowing(userData.data.following);
      console.log("HEKJklsjakldfj");
    } catch (error) {
      alert(error.code);
    }
  };
  // fetchData();

  const searchHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="bg-dark bg-gradient mainParent">
      <h1 className="text-center">Github Finder</h1>
      <form className="d-flex justify-content-center" onSubmit={searchHandler}>
        <input
          className="rounded-3 px-1 fs-6 border-0 bg-grey"
          type="text"
          placeholder="Enter User Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </form>
      <div className=" container my-5 text-white">
        <img src={userImg} height={200} width={200} />
        <h5 className="">{name1}</h5>
        <p className="">{`${userTitle.slice(0, 30)}...`}</p>
        <div className="d-flex gap-2 fsSmall align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="iconSize"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <div className="d-flex gap-1">
            <p className="m-0">{userFollowers}</p>
            <p className="m-0">Follower</p>
          </div>
          <div className="d-flex gap-1">
            <p className="m-0">{userFollowing}</p>
            <p className="m-0">Following</p>
          </div>
        </div>
      </div>
      {/* <h5>user name:{userName} </h5> */}
    </div>
  );
}

export default App;
