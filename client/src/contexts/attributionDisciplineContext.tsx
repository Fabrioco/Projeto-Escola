"use client";
import {
  AttributionContextType,
  AttributionProviderType,
} from "@/types/AttributionContextType";
import axios from "axios";
import React from "react";

const AttributionDisciplineContext =
  React.createContext<AttributionContextType | null>(null);

export const AttributionDisciplineProvider: React.FC<
  AttributionProviderType
> = ({ children }) => {
  const fetchAllAttributions = async () => {
    await axios
      .get("http://localhost:5000/api/attribution")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchAllAttributions();
  }, []);

  return (
    <AttributionDisciplineContext.Provider value={{ fetchAllAttributions }}>
      {children}
    </AttributionDisciplineContext.Provider>
  );
};

export const useAttributionDisciplineContext = () => {
  const context = React.useContext(AttributionDisciplineContext);
  if (!context) {
    throw new Error(
      "useAttributionDisciplineContext deve ser usado dentro do AttributionDisciplineProvider"
    );
  }
  return context;
};
