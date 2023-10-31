import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

import { dataCredential } from "../types";

interface UserState {
  user: dataCredential;
  update: (by: dataCredential) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: {} as dataCredential,
  update: (by) => set((state) => ({ user: by })),
}));

export const useUserStore1 = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {} as dataCredential,
        update: (by) => set((state) => ({ user: by })),
      }),
      { name: "userStore" }
    )
  )
);
