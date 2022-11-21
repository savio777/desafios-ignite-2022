import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type INote = {
  id: string;
  text: string;
  done: boolean;
};

type IState = {
  notes: INote[];
  addNotes: (note: INote) => void;
  removeNote: (id: string) => void;
  changeStatusNote: (id: string) => void;
  deleteAllNotes: () => void;
};

const useNoteStore = create(
  persist<IState>(
    (set) => ({
      notes: [],

      addNotes: (note: INote) => {
        set((state) => ({
          notes: [...state.notes, note],
        }));
      },
      removeNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((notes) => notes.id !== id),
        }));
      },
      changeStatusNote: (id: string) => {
        set((state) => {
          const noteFindIndex = state.notes.findIndex(
            (notes) => notes.id === id
          );

          const newListNotes = state.notes;

          newListNotes[noteFindIndex].done = !newListNotes[noteFindIndex].done;

          return {
            notes: newListNotes,
          };
        });
      },
      deleteAllNotes: () => {
        set({ notes: [] });
      },
      deleteEverything: () => set({}, true), // clears the entire store, actions included
    }),
    { name: "notes", getStorage: () => AsyncStorage }
  )
);

export default useNoteStore;
