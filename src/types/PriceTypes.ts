export interface Card {
    id: string;
    name: Name;
    image_id: string;
    products: Product[];
}

export interface Product {
    id: string;
    name: Name;
    category_id: string;
    carrier_type_id: string;
    base_price: number;
    price: number;
    price_czk: number;
    carrier_type: Carriertype;
    validity_in_days: number;
    abbreviation?: any;
}

export interface Carriertype {
    id: string;
    name: string;
    technology: number;
    stock_item: number;
}

export interface Name {
    default: string;
    variants: Variant[];
}

export interface Variant {
    language: string;
    text: string;
}