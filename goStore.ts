import { create } from "zustand";
import { FRIENDS } from "./data";
import { FriendType } from "./components/Card";

type GoStoreType = {
  allFriends: FriendType[];
  friendList: FriendType[];
  currentFriend: FriendType | null;
  getFriendById: (id: number) => void;
  message: string;
  handleSend: () => void;
  showCallOption: boolean;
  setShowCallOption: (value: boolean) => void;
  toggleCallOption: () => void;
  filterFriends: (username: string) => void;
}

export const use2goStore = create<GoStoreType>((set, get) => ({
  allFriends: FRIENDS,
  friendList: FRIENDS,
  filterFriends: (username) => {
    const query = username.toLowerCase();
    if (!query) {
      // Reset to full list when input is empty
      set({friendList: get().allFriends})
      return;
    }
    const filtered = get().allFriends.filter(friend => (
      friend?.username.toLowerCase().includes(query)
    ));

    set({ friendList: filtered });
  },
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