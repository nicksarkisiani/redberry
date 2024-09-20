export interface IRegion {
    id: number
    name: string
}

export interface ICity {
    id: number
    name: string
    region_id: number
}