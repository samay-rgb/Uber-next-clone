import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
export default function RideSelector({ pickup, drop }) {
  const [duration, setDuration] = useState();
  useEffect(() => {
    console.log(pickup + "\n");
    console.log(drop + "\n");
    duration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${drop[0]},${drop[1]}?access_token=pk.eyJ1IjoiZGFydGhza3l3YWxrZXIiLCJhIjoiY2t3YXhjdXl0MG5pdTJ1cWxhaGgyN2g3cyJ9.rM-nEsb2PRzbBqlyObuLeQ`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.routes) setDuration(data.routes[0].duration / 100);
      });
  }, [pickup, drop]);
  return (
    <Wrapper>
      <Title>Select your ride, swipe for more</Title>
      <CarList>
        {carList.map((item, idx) => {
          return (
            <Car key={idx}>
              <CarImg src={item.imgUrl} />
              <CarDetails>
                <CarName>{item.service}</CarName>
                <Time>5 mins away</Time>
              </CarDetails>
              <Price>$ {(duration * item.multiplier).toFixed(2)}</Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex-1 overflow-y-scroll flex flex-col`;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b`;
const CarList = tw.div`overflow-y-scroll`;
const Car = tw.div`flex p-4 items-center`;
const CarImg = tw.img`h-14 mr-4`;
const CarName = tw.div`font-medium `;
const Time = tw.div`text-sm text-blue-500`;
const Price = tw.div`text-sm font-medium`;
const CarDetails = tw.div`flex-1`;
