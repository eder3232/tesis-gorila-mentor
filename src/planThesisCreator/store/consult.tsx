import { atom } from "jotai";
import { Joke } from "../actions/action";

const atomConsult = atom<Joke>({});

export const atomGetConsult = atom((get) => get(atomConsult));

export const atomSetConsult = atom(
  null,
  (_get, set, payload: Joke | undefined) => {
    if (payload === undefined) return;
    set(atomConsult, payload);
  },
);
