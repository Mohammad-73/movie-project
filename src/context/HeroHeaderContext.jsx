import React, { useState, createContext } from "react";

export const HeroHeaderContext = createContext("./images/header-bg.jpg");

export default function HeroHeaderProvider({ children }) {
  const [backgroundImg, setBackgroundImg] = useState("./images/header-bg.jpg");
  return (
    <HeroHeaderContext.Provider value={[backgroundImg, setBackgroundImg]}>
      {children}
    </HeroHeaderContext.Provider>
  );
}
