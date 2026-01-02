

export type Book={
    id:number,
    author:string,
    genre:Genres,
    status:Statuses,
    coverUrl:string,
    name:string,
    description?:string,
    publishingYear:number
}
export type Genres="Fantasy"| "Sci-Fi"| "Romance"| "Mystery"| "Thriller"| "Horror"| "Historical Fiction"| "Biography"| "Self-Help"| "History"
export type Statuses="Already read"|"Want to read"|"Reading"