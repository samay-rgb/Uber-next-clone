import React from "react";
import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFydGhza3l3YWxrZXIiLCJhIjoiY2t3YXhjdXl0MG5pdTJ1cWxhaGgyN2g3cyJ9.rM-nEsb2PRzbBqlyObuLeQ";

export default function Map({ pickup, drop }) {
  // console.log(pickup + " " + drop);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [77.1025, 28.7041],
      zoom: 3,
    });
    if (pickup) addToMap(map, pickup);
    if (drop) addToMap(map, drop);
    if (pickup && drop) {
      map.fitBounds(
        [
          pickup, // southwestern corner of the bounds
          drop, // northeastern corner of the bounds
        ],
        {
          padding: 60,
        }
      );
    }
  }, [pickup, drop]);
  const addToMap = (map, loc) => {
    const marker1 = new mapboxgl.Marker().setLngLat(loc).addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
}
const Wrapper = tw.div`flex-1 h-1/2`;
