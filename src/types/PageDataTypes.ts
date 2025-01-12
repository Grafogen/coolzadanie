export interface PageDataInterface {
    _id: string;
    name: string;
    mainImage: MainImage;
    benefits: Benefits;
    offers: Offers;
    how_to_use: Howtouse;
    content: Content;
    is_modal_visible: boolean;
}

export interface Content {
    en: En;
    de: De;
    fr: De;
    it: De;
    es: De;
    ru: Ru;
    cs: De;
    pl: De;
}


export interface Ru {
    benefits: Benefits3;
    offers: Offers2;
    how_to_use: Howtouse3;
    title: string;
    subtitle: string;
    header_banner: string;
    modal_description: string;
}

export interface De {
    benefits: Benefits3;
    offers: Offers3;
    how_to_use: Howtouse3;
    title: string;
    subtitle: string;
    modal_description: string;
    header_banner: string;
}

export interface Howtouse3 {
    how_to_use_title?: any;
    descriptions: string[];
}

export interface Offers3 {
    offers_title?: any;
    items: Item2[];
}

export interface Benefits3 {
    benefits_title?: any;
    items: Item[];
}

export interface En {
    title: string;
    subtitle: string;
    header_banner: string;
    top_attractions_title: string;
    benefits: Benefits2;
    offers: Offers2;
    how_to_use: Howtouse2;
    modal_description: string;
}

export interface Howtouse2 {
    how_to_use_title: string;
    descriptions: string[];
}

export interface Offers2 {
    offers_title: string;
    items: Item2[];
}

export interface Item2 {
    title: string;
    features_list: string;
    button_text: string;
}

export interface Benefits2 {
    benefits_title: string;
    items: Item[];
}

export interface Item {
    title: string;
    text: string;
}

export interface Howtouse {
    visible: boolean;
    web_images: string[];
    app_images: string[];
}

export interface Offers {
    visible: boolean;
    web_images: string[];
    app_images: string[];
    urls: string[];
}

export interface Benefits {
    visible: string;
    web_images: null[];
    app_images: null[];
}

export interface MainImage {
    web_image: string[];
    app_image: string[];
    author: string;
}