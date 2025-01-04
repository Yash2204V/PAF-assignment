export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
}

export interface MovieMain {
    backdrop_path: string;
    original_title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    release_date: string;
    genres: Genre[];
    overview: string;
    poster_path: string;
    homepage: string | null;
    imdb_id: string | null;
    production_companies: ProductionCompany[];
}