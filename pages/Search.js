import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [pickupn, setPickupn] = useState("");
  const [dropn, setDropn] = useState("");
  const { flag } = router.query;
  return (
    <Wrapper>
      <Link href="/">
        <BtnContainer>
          <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BtnContainer>
      </Link>
      <InputContainer>
        <Icons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </Icons>
        <InputBox>
          <Input
            placeholder="Enter pick up location"
            value={pickupn}
            onChange={(e) => setPickupn(e.target.value)}
          />
          <Input
            placeholder="Enter Destination"
            value={dropn}
            onChange={(e) => setDropn(e.target.value)}
          />
        </InputBox>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <Places>
        <Star src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </Places>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickupn: pickupn,
            dropn: dropn,
            flag: flag,
          },
        }}
      >
        <ConfirmBtn>Confirm Location</ConfirmBtn>
      </Link>
    </Wrapper>
  );
}
const Wrapper = tw.div`bg-gray-200 h-screen`;
const BtnContainer = tw.div`bg-white px-4`;
const BackBtn = tw.img`h-12 ml-0 cursor-pointer`;
const InputContainer = tw.div`bg-white flex items-center mb-2`;
const Icons = tw.div` w-10 flex flex-col mr-2 items-center`;
const Circle = tw.img`h-2.5`;
const Line = tw.img`h-10`;
const Square = tw.img`h-2.5`;
const InputBox = tw.div`flex flex-col flex-1 px-4 mb-2`;
const Input = tw.input`h-10 bg-gray-200 my-2 p-2 rounded-4 outline-none border-none `;
const PlusIcon = tw.img`w-10 h-10 bg-gray-200 rounded-full mr-3`;
const Places = tw.div`flex items-center bg-white px-4 py-2`;
const Star = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;
const ConfirmBtn = tw.div`bg-black m-2 text-white text-center p-2 cursor-pointer `;
