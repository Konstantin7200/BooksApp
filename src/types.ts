

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
    searchQueue:string
}
export type SortSettings={
    sortBy:sortByOptions
    sortOrder:sortOrderOptions
}
export type sortOrderOptions='ascending'|'descending'
export type sortByOptions='publishingYear'|'name'
export type Genre="Fantasy"| "Sci-Fi"| "Romance"| "Mystery"| "Thriller"| "Horror"| "Historical Fiction"| "Biography"| "Self-Help"| "History"
export type Status="Already read"|"Want to read"|"Reading"