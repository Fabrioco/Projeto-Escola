export type SignInProps = {
  email: string;
  password: string;
  keepLogged: boolean;
  role: string;
};

export type UserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
  class_id?: number;
  period?: string;
  admin?: boolean;
};

export type AuthContextType = {
  signIn: ({ email, password, keepLogged, role }: SignInProps) => Promise<void>;
  loading: boolean;
  logOut: () => void;
  user: UserProps | null;
  fetchUser: () => Promise<void>;
};

export type AuthContextProviderProps = {
  children: React.ReactNode;
};
