"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import eventsData from "@/app/therapistdata";
import { Star, StarHalf } from "lucide-react";
import FlyToMarker from "./FyToMarker";
import Filter from "./Filter";
import { Header } from "@/app/header";

export interface HistoricalEvent {
  id: number;
  title: string;
  description: string;
  position: [number, number];
  category: string;
  name?: string;
  titlec?: string;
  phonec?: string;
  mobilephonec?: string;
  picturec?: string;
}

const defaultPosition2: [number, number] = [51.505, -0.09];
const defaultPosition: [number, number] = [30.3937298,-97.7451442];

const emptyStar = <StarHalf className="size-4"></StarHalf>;
const fullStar = (
  <Star
    className="size-4"
    style={{
      color: "#fdc401",
    }}
  ></Star>
);

const Map = () => {
  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<HistoricalEvent | null>(null);
  const [favourites, setFavourites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem("favourites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleFavouriteClick = (eventId: number) => {
    let updatedFavourites = favourites.filter((id) => id !== eventId);

    if (!favourites.includes(eventId)) {
      updatedFavourites = [eventId, ...updatedFavourites];
    }

    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleListItemClick = (eventId: number) => {
    //find by id
    const event = eventsData.find((event) => event.id === eventId);

    if (event) {
      //set the active to open the popup
      setActiveEvent(event);
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      {/* <div className="w-full h-12 border-b"></div> */}
      <Header />
      <Filter setSelectedCategory={setSelectedCategory}/>
      <div className="flex gap-8 pt-4 px-4">
        <div className=" w-4/5">
          <MapContainer
            center={defaultPosition}
            zoom={13}
            className="w-[80vw] h-[80vh] overflow-y-scroll overflow-x-scroll no-scrollbar rounded-xl p-3"
            // style={{ height: "100vh", width: "100vw" }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <Marker position={defaultPosition} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
            {eventsData
              .filter(
                (event) =>
                  !selectedCategory || event.category === selectedCategory
              )
              .map((event) => {
                return (
                  <Marker
                    key={event.id}
                    position={event.position}
                    icon={icon}
                    eventHandlers={{
                      click: () => {
                        setActiveEvent(event);
                      },
                    }}
                  />
                );
              })}
            {activeEvent && (
              <Popup position={activeEvent.position}>
                {/* Popup content */}
                <div className="popup-inner">
                  <h2 className="popup-inner__title">{activeEvent.title}</h2>
                </div>
                <p className="popup-inner__description">
                  {activeEvent.description}
                </p>

                <button
                  className="popup-inner__button"
                  onClick={() => handleFavouriteClick(activeEvent.id)}
                >
                  {favourites.includes(activeEvent.id) ? (
                    <span className="flex gap-1">{fullStar} Unfavourite</span>
                  ) : (
                    <span className="flex">{emptyStar} Favourite</span>
                  )}
                </button>
              </Popup>
            )}

            {activeEvent && (
              <FlyToMarker position={activeEvent.position} zoomLevel={15} />
            )}
          </MapContainer>
        </div>

        <div className="liked-events flex-1 rounded-md bg-black text-white pt-4 overflow-y-scroll auto px-2">
          <h2 className="liked-events__title font-bold text-base flex mb-4 gap-1 items-center">
            <Star className="text-yellow-200" /> Favourite Therapists
          </h2>
          <ul>
            {favourites
              .map((id) => {
                return eventsData.find((event) => event.id === id);
              })
              .map((event) => {
                return (
                  <li
                    key={event?.id}
                    className="liked-events__event p-4 mb-4 font-bold rounded-lg bg-gray-500"
                    onClick={() => {
                      handleListItemClick(event?.id as number);
                    }}
                  >
                    <h3>{event?.title}</h3>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;
