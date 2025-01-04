import { Movie } from "@/types/Movie";
import { atom } from "recoil";


export const searchedMoviesAtom = atom<Movie[]>({
    key: "searchedMovies",
    default: []
})


export const popularMoviesAtom = atom<Movie[]>({
    key: "popularMoviesKey",
    default: []
})

export const searchQueryAtom = atom({
    key: "searchQueryKey",
    default: ""
})

export const debouncedTermAtom = atom({
    key: "debouncedTermKey",
    default: ""
})


