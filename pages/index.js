import Head from "next/head";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user)
        setUser({
          name: user.displayName,
          photourl: user.photoURL,
        });
      else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  return (
    <Wrapper>
      <Map />

      <ActionItems>
        <Header>
          <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImg
              src={user && user.photourl}
              onClick={() => signOut(auth)}
              title="Log Out"
            />
          </Profile>
        </Header>
        <ActionBtns>
          <Link
            href={{
              pathname: "/Search",
              query: {
                flag: 1,
              },
            }}
          >
            <ActionBtn>
              <ActionBtnImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionBtn>
          </Link>
          <Link
            href={{
              pathname: "/Search",
              query: {
                flag: 0,
              },
            }}
          >
            <ActionBtn>
              <ActionBtnImg src="https://i.ibb.co/n776JLm/bike.png" />
              Bikes
            </ActionBtn>
          </Link>
          <ActionBtn>
            <ActionBtnImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionBtn>
        </ActionBtns>
        <InputBtn>Enter destination</InputBtn>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
  flex flex-col h-screen
`;
const Header = tw.div`
flex justify-between items-center
`;
const ActionItems = tw.div`flex-1 p-4`;
const Uberlogo = tw.img`
h-28
`;
const Profile = tw.div`
flex items-center
`;
const Name = tw.div` mr-4 w-20 text-sm`;
const UserImg = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`;
const ActionBtns = tw.div`flex `;
const ActionBtn = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer`;
const ActionBtnImg = tw.img`h-3/5`;
const InputBtn = tw.div`h-20 bg-gray-200 p-4 text-2xl flex items-center mt-8`;
