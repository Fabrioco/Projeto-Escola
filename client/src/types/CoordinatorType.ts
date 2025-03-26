import React from "react";
import { UserProps } from "./AuthContextType";

export type CoordinatorContextType = {
  name: string;
  email: string;
  password: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  allCoordinator: UserProps[];
  setAllCoordinator: React.Dispatch<React.SetStateAction<UserProps[]>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  addCoordinator: (e: React.FormEvent) => void;
  fetchAllCoordinator: () => void;
  fetchCoordinator: (id: number) => void;
  deleteCoordinator: (id: number) => void;
  updateCoordinator: (e: React.FormEvent) => void;
  clearForm: () => void;
};

export type CoordinatorProviderType = {
  children: React.ReactNode;
};
