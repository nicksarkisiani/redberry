export interface IRegion {
    id: number
    name: string
}

export interface ICity {
    id: number
    name: string
    region_id: number
    region?: IRegion
}

export interface IEstate {
    id: number
    address: string
    zip_code: number
    price: number
    area: number
    bedrooms: number
    image: string
    is_rental: number
    city_id: number
    city: ICity
}