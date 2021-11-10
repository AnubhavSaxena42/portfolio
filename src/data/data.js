import javascript from "../assets/images/skills/javascript.png";
import react from "../assets/images/skills/react.png";
import expo from "../assets/images/skills/expo.png";
import amplify from "../assets/images/skills/amplify.png";
import graphql from "../assets/images/skills/graphql.png";
import typescript from "../assets/images/skills/typescript.png";
import yt1 from "../assets/images/projects/yt1.png";
import yt2 from "../assets/images/projects/yt2.png";
import appsync from "../assets/images/skills/appsync.png";
import sp1 from "../assets/images/projects/sp1.png";
import tt1 from "../assets/images/projects/tt1.png";
import csharp from "../assets/images/skills/csharp.png";
import tt2 from "../assets/images/projects/tt2.png";
import mysql from "../assets/images/skills/mysql.png";
import tw1 from "../assets/images/projects/tw1.png";
import angular from "../assets/images/skills/angular.png";
import tw2 from "../assets/images/projects/tw2.png";
import ionic from "../assets/images/skills/ionic.png";
import netcore from "../assets/images/skills/netcore.png";
import firebase from "../assets/images/skills/firebase.png";
import { BsSpotify, BsYoutube, BsTwitter, BsCode } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { RiMentalHealthFill } from "react-icons/ri";
export const personalProjects = {
  type: "Personal projects",
  desc: "",
  projects: [
    {
      id: "yt",
      name: "YOUTUBE CLONE",
      type: "Personal",
      icon: () => <BsYoutube color={"white"} size={40} />,
      tags: "React Native.Amplify.GraphQL",
      description:
        "Youtube Feed clone where users can watch videos posted by other users with features such as authentication and likes/dislikes implemented",
      skills: [react, expo, typescript, amplify, graphql],
      screens: [yt1, yt2],
    },
    {
      id: "sp",
      name: "SPOTIFY CLONE",
      type: "Personal",
      icon: () => <BsSpotify color={"white"} size={40} />,
      tags: "React Native.Amplify.GraphQL",
      description:
        "Users can scroll through a feed of albums divided by different categories and listen to their own playlists and favourite songs",
      skills: [react, expo, typescript, amplify, graphql, appsync],
      screens: [sp1],
    },
    {
      id: "tk",
      name: "TIKTOK CLONE",
      tags: "React Native.Amplify.GraphQL",
      type: "Personal",
      icon: () => <FaTiktok color={"white"} size={40} />,
      description:
        "Fullscreen video feed where users can browse tiktoks posted by other users or record and post their own",
      skills: [react, expo, javascript, amplify, graphql, appsync],
      screens: [tt1, tt2],
    },
    {
      id: "tw",
      name: "TWITTER CLONE",
      tags: "React Native.Amplify.GraphQL",
      type: "Personal",
      icon: () => <BsTwitter color={"white"} size={40} />,
      description:
        "Twitter app clone where users can tweet as well as interact with tweets by other users, features such as twitter fleets also implemented",
      skills: [react, expo, typescript, amplify, graphql, appsync],
      screens: [tw1, tw2],
    },
  ],
};
export const workProjects = {
  type: "Professional projects",
  desc: "",
  projects: [
    {
      id: "ka",
      name: "KAYAN",
      type: "Work",
      icon: () => <GiHealthNormal color={"white"} size={40} />,
      tags: "React Native.NET CORE.Firebase",
      description:
        "A healthcare app which allows patients to connect with doctors as well as track their health by making use of wearables",
      skills: [react, netcore, firebase],
      screens: [yt1, yt2],
    },
    {
      id: "ra",
      name: "RAYNA",
      type: "Work",
      icon: () => <RiMentalHealthFill color={"white"} size={40} />,
      tags: "React Native.NET CORE.Firebase",
      description:
        "A healthcare app which allows patients to connect with doctors specializing in mental well being",
      skills: [react, netcore, firebase],
      screens: [yt1, yt2],
    },
    {
      id: "wi",
      name: "WALK-IN",
      type: "Work",
      icon: () => <IoMdRestaurant color={"white"} size={40} />,
      tags: "Angular.Ionic.MySQL",
      description:
        "An app in which a user can order food or dine in at the restaurant by scanning QR codes on the table ",
      skills: [angular, ionic, mysql],
      screens: [yt1, yt2],
    },
    {
      id: "nc",
      name: "NO-CODE",
      type: "Work",
      icon: () => <BsCode color={"white"} size={40} />,
      tags: "React.Java.C#",
      description: "A no-code app which allows users to create mobile app using drag and drop widgets",
      skills: [react, netcore, csharp],
      screens: [yt1, yt2],
    },
  ],
};

export const allprojects = [
  {
    id: "ka",
    name: "KAYAN",
    type: "Work",
    icon: () => <GiHealthNormal color={"white"} size={40} />,
    tags: "React Native.NET CORE.Firebase",
    description:
      "A healthcare app which allows patients to connect with doctors as well as track their health by making use of wearables",
    skills: [react, netcore, firebase],
    screens: [yt1, yt2],
  },
  {
    id: "ra",
    name: "RAYNA",
    type: "Work",
    icon: () => <RiMentalHealthFill color={"white"} size={40} />,
    tags: "React Native.NET CORE.Firebase",
    description:
      "A healthcare app which allows patients to connect with doctors specializing in mental well being",
    skills: [react, netcore, firebase],
    screens: [yt1, yt2],
  },
  {
    id: "wi",
    name: "WALK-IN",
    type: "Work",
    icon: () => <IoMdRestaurant color={"white"} size={40} />,
    tags: "Angular.Ionic.MySQL",
    description:
      "An app in which a user can order food or dine in at the restaurant by scanning qr codes on the table ",
    skills: [angular, ionic, mysql],
    screens: [yt1, yt2],
  },
  {
    id: "nc",
    name: "NO-CODE",
    type: "Work",
    icon: () => <BsCode color={"white"} size={40} />,
    tags: "React.Java.C#",
    description: "A no-code app which allows users to create mobile app using drag and drop widgets",
    skills: [react, netcore, csharp],
    screens: [yt1, yt2],
  },
  {
    id: "yt",
    name: "YOUTUBE CLONE",
    type: "Personal",
    icon: () => <BsYoutube color={"white"} size={40} />,
    tags: "React Native.Amplify.GraphQL",
    description:
      "This is a clone of the youtube feed which enables authentication as well as viewing of videos by other users",
    skills: [react, expo, typescript, amplify, graphql],
    screens: [yt1, yt2],
  },
  {
    id: "sp",
    name: "SPOTIFY CLONE",
    type: "Personal",
    icon: () => <BsSpotify color={"white"} size={40} />,
    tags: "React Native.Amplify.GraphQL",
    description:
      "This is a clone of the spotify UI which enables authentication as well as browsing playlists and playing songs",
    skills: [react, expo, typescript, amplify, graphql, appsync],
    screens: [sp1],
  },
  {
    id: "tk",
    name: "TIKTOK CLONE",
    tags: "React Native.Amplify.GraphQL",
    type: "Personal",
    icon: () => <FaTiktok color={"white"} size={40} />,
    description:
      "This is a clone of the Tiktok UI which enables authentication as well as viewing tiktoks posted by others",
    skills: [react, expo, javascript, amplify, graphql, appsync],
    screens: [tt1, tt2],
  },
  {
    id: "tw",
    name: "TWITTER CLONE",
    tags: "React Native.Amplify.GraphQL",
    type: "Personal",
    icon: () => <BsTwitter color={"white"} size={40} />,
    description:
      "This is a clone of the Youtube UI which enables authentication as well as viewing tweets by other users",
    skills: [react, expo, typescript, amplify, graphql, appsync],
    screens: [tw1, tw2],
  },
];
