import { create } from "zustand";
import { FRIENDS } from "./data";
import { FriendType } from "./components/Card";

type GoStoreType = {
  friendList: FriendType[];
  currentFriend: FriendType | null;
  getFriendById: (id: number) => void;
  message: string;
  handleSend: () => void;
  showCallOption: boolean;
  setShowCallOption: (value: boolean) => void;
  toggleCallOption: () => void;
}

export const use2goStore = create<GoStoreType>((set, get) => ({
  friendList: FRIENDS,
  currentFriend: null,
  getFriendById: (id: number) => {
    const selctedFriend = get().friendList.find((friend) => friend.id === id) || null;
    set({ currentFriend: selctedFriend })
  },
  message: "",
  handleSend: () => {

  },
  showCallOption: false,
  setShowCallOption: (value: boolean) => set({ showCallOption: value}),
  toggleCallOption: () => set((state) => ({ showCallOption: !state.showCallOption}))
}))