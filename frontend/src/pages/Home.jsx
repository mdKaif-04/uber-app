import React from "react";
import uber_logo from "../assets/uber_logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../component/LocationPanel";
import uber_car from "../assets/Uber-car.png";
import uber_auto from "../assets/uber_auto.png";

const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };
  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.2,
      ease: "power3.out",
    });
  }, [panelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src={uber_logo}
        alt=""
        className="mix-blend-darken w-15 absolute left-5 top-5"
      />
      <div className="w-screen h-screen ">
        {/* temp img */}
        <img
          className="h-full w-full object-cover"
          src="https://www.netmaps.uk/wp-content/uploads/2016/03/Riga-Vector-Map-717x1024.jpg"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative shadow-md rounded-t-3xl">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              handleSumbit(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[46%] rounded-full bg-[#3d3636]"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg  w-full mt-5 border outline-none border-[#767272]"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3 border outline-none border-[#767272]"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white ">
          <LocationPanel />
        </div>
      </div>
      <div className="fixed z-10 w-full bottom-0 bg-white px-3 ">
        <h3 className="text-lg font-medium mb-3">Choose a vehicle</h3>
        <div className="flex w-full p-3 items-center justify-between">
          <img src={uber_car} alt="" className="h-16" />
          <div className=" w-1/2" >
            <h4 className="text-base font-medium ">
              Uber Go{" "}
              <span className="">
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="text-sm font-medium ">2 mins away</h5>
            <p className="text-xs text-gray-600 ">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">$19.3</h2>
        </div>
        <div className="flex w-full p-3 items-center justify-between">
          <img src={uber_auto} alt="" className="h-13" />
          <div className=" w-1/2" >
            <h4 className="text-base font-medium ">
              Uber Go{" "}
              <span className="">
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="text-sm font-medium ">2 mins away</h5>
            <p className="text-xs text-gray-600 ">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">$19.3</h2>
        </div>
        <div className="flex w-full p-3 items-center justify-between">
          <img src={uber_car} alt="" className="h-16" />
          <div className=" w-1/2" >
            <h4 className="text-base font-medium ">
              Uber Go{" "}
              <span className="">
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="text-sm font-medium ">2 mins away</h5>
            <p className="text-xs text-gray-600 ">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">$19.3</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
