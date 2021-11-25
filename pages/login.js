import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import router, { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "@firebase/auth";
import { auth, provider } from "../firebase";
export default function login() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, []);
  return (
    <Wrapper>
      <Uberlogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title> Login to access your account</Title>
      <CoverImg src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignBtn
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      >
        Login with google
      </SignBtn>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-100 p-4`;
const SignBtn = tw.button`bg-black text-white text-center py-4 mt-8 w-full self-center`;
const Uberlogo = tw.img`h-5 w-auto object-contain self-start`;
const Title = tw.div`text-5xl pt-4 text-gray-500`;
const CoverImg = tw.img`object-contain w-full`;
