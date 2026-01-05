

export type Book={
    id:number,
    author:string,
    genre:Genre,
    status:Status,
    coverUrl:string,
    name:string,
    description?:string,
    publishingYear:number
}
export type Filter={
    status:Status|null,
    genre:Genre|null,
}
export type Genre="Fantasy"| "Sci-Fi"| "Romance"| "Mystery"| "Thriller"| "Horror"| "Historical Fiction"| "Biography"| "Self-Help"| "History"
export type Status="Already read"|"Want to read"|"Reading"