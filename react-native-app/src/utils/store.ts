// Govind Singh: CountMe
import { create } from "zustand";

type User = {
  readonly userId: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly isAdmin: boolean;
  readonly registeredAt: string;
};

type Login = {
  readonly isLoggedIn: boolean;
  readonly email: string;
  readonly password: string;
};

type Store = {
  readonly user: User | undefined;
  readonly registrationHistory: readonly User[] | undefined;
  readonly setUserDetails: (user: User) => void;
  readonly setUserHistory: (history: User) => void;
  readonly deleteUser: (userId: string) => void;
  readonly loginDetails: Login | undefined;
  readonly setLogin: (login: Login) => void;
};

export const useUserStore = create<Store>((set) => ({
  user: undefined,
  loginDetails: undefined,
  registrationHistory: [],
  setUserDetails: (user: User) => {
    set({ user });
  },
  setUserHistory: (history: User) => {
    set((state) => ({
      registrationHistory:
        state.registrationHistory !== undefined
          ? [...state.registrationHistory, history]
          : [history],
    }));
  },
  deleteUser: (id: string) => {
    set((state) => ({
      user: state.user?.userId === id ? undefined : state.user,
      registrationHistory:
        state.registrationHistory !== undefined
          ? [...state.registrationHistory.filter(({ userId }) => userId !== id)]
          : [],
    }));
  },
  setLogin: (loginDetails: Login) => {
    set({ loginDetails });
  },
}));
