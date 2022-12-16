import tw from "tailwind-styled-components";
import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { useRouter } from "next/router";
import RideSelector from "../components/RideSelector";
import Link from "next/link";

export default function confirm() {
  const router = useRouter();
  const { pickupn, dropn, flag } = router.query;
  //   console.log(pickupn + " " + dropn);
  const [pickup, setPickup] = useState([0, 0]);
  const [drop, setDrop] = useState([0, 0]);
  console.log(flag);

  const getCoordinates = (pickupn) => {
    // const location = "Patna";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupn}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGFydGhza3l3YWxrZXIiLCJhIjoiY2t3YXhjdXl0MG5pdTJ1cWxhaGgyN2g3cyJ9.rM-nEsb2PRzbBqlyObuLeQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setPickup(data.features[0].center));
  };
  const dropCoordinates = (dropn) => {
    // const location = "Jabalpur";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropn}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGFydGhza3l3YWxrZXIiLCJhIjoiY2t3YXhjdXl0MG5pdTJ1cWxhaGgyN2g3cyJ9.rM-nEsb2PRzbBqlyObuLeQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setDrop(data.features[0].center));
  };
  useEffect(() => {
    getCoordinates(pickupn);
    dropCoordinates(dropn);
  }, [pickupn, dropn]);
  return (
    <Wrapper>
      <Link href="/Search">
        <BtnContainer>
          <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BtnContainer>
      </Link>
      <Map pickup={pickup} drop={drop} />
      <Rides>
        <RideSelector pickup={pickup} drop={drop} flag={flag} />
        <ConfirmBtn>Book ride</ConfirmBtn>
      </Rides>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen flex-1`;
const Rides = tw.div`flex-1 flex flex-col h-1/2`;
// const RideSelector = tw.div``;
const ConfirmBtn = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl `;
const BtnContainer = tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;
const BackBtn = tw.img`h-full object-contain`;
