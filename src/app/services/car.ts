export interface CarModel{
    id: number;
    make: string;
    model: string;
    year: number;
    mileage: number;
    price: number;
    fuelType: string;
    transmission: string;
    engine: string;
    horsepower: number;
    features: string[];
    owners: number;
    image: string;
}

export interface TypeModel {
    id: number;
    name: string;
}