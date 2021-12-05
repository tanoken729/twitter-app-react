import React, { useState } from "react";
import styles from "./TweetInput.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase/app";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase";

const TweetInput = () => {
  // reduxのstateからuserstateを取得し、ローカルのuser変数に格納
  const user = useSelector(selectUser);
  return (
    <div>
      <Avatar
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={async () => {
          await auth.signOut();
        }}
      />
    </div>
  );
};

export default TweetInput;
