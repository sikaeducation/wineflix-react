import React, { createContext, useContext, useState } from 'react';

const HeroContext = createContext();

export const HeroContextProvider = ({ children }) => {
  const [heroState, setHeroState] = useState({
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/rex-goliath-logo.png',
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad as hell. Experience the unapologetic flavor burst of Rex Goliath.`,
  });

  return (
    <HeroContext.Provider value={[heroState, setHeroState]}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => useContext(HeroContext);

export default HeroContext;