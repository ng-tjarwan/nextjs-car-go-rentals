"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { DateValue } from "@mantine/dates";

import { ICountryProps, IRegionProps } from "@/models";

interface IAppState {
  country: ICountryProps | undefined;
  region: IRegionProps | undefined;
  carMake?: { label: string; value: string };
  pickupDate: DateValue | undefined;
  returnDate: DateValue | undefined;
}

interface IAppContext {
  state: IAppState;
  setCountry: (country: ICountryProps) => void;
  setRegion: (region: IRegionProps) => void;
  setCarMake: (selectedMake: { label: string; value: string }) => void;
  setPickupDate: (pickupDate: DateValue) => void;
  setReturnDate: (returnDate: DateValue) => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext>(undefined as any);

const initialState: IAppState = {
  country: undefined,
  region: undefined,
  carMake: undefined,
  pickupDate: undefined,
  returnDate: undefined,
};

export const AppContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<IAppState>(initialState);

  const setCountry = useCallback((country: ICountryProps) => {
    setState((prevState) => ({
      ...prevState,
      country,
    }));
  }, []);

  const setRegion = useCallback((region: ICountryProps) => {
    setState((prevState) => ({
      ...prevState,
      region,
    }));
  }, []);

  const setCarMake = useCallback(
    (carMake: { label: string; value: string }) => {
      setState((prevState) => ({
        ...prevState,
        carMake,
      }));
    },
    []
  );

  const setPickupDate = useCallback((pickupDate: DateValue) => {
    setState((prevState) => ({
      ...prevState,
      pickupDate,
    }));
  }, []);

  const setReturnDate = useCallback((returnDate: DateValue) => {
    setState((prevState) => ({
      ...prevState,
      returnDate,
    }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        setCountry,
        setRegion,
        setCarMake,
        setPickupDate,
        setReturnDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
