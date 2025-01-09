export interface InputInterface {
    _id: string;
    type: string;
    content: Content;
    images: string[];
    lat: number;
    lon: number;
    opening: Opening[];
    categories: string[];
    area: string;
    status: string;
    order: number;
    address2?: string;
    benefit: string;
    created: string;
    updated: string;
    reviewValue: number;
    reviewCount: number;
    metro?: string;
    tram?: string;
    phone: string;
    address1: string;
    website: string;
    mostpopular: number;
    benefitAdult?: string;
    benefitChild?: string;
    benefitStudent?: string;
    webimages: string[];
    objectsNearby: string[];
    objectsSimilar: string[];
    typology: string;
    priceAdult?: string;
    priceChild?: string;
    priceStudent?: string;
    slug: string;
    bus?: string;
    email?: string;
    priceSenior?: string;
    benefitSenior?: string;
    priceFamily?: string;
    benefitFamily?: string;
    priceGroup?: string;
    priceDisabled?: string;
    benefitDisabled?: string;
    benefitGroup?: string;
    funicular?: string;
    ferry?: string;
    parking?: string;
}

export interface Opening {
    startDate: string;
    endDate: string;
    type: string;
    name: string;
    data: Data;
    specialDates: SpecialDate[];
    comment: Comment;
}

export interface Comment {
    en: string;
    de: string;
    fr: string;
    it: string;
    es: string;
    ru: string;
    cs: string;
    pt: string;
    nl: string;
    pl: string;
    zh: string;
    ko: string;
    hu: string;
    ro: string;
    he: string;
    jp: string;
    ar: string;
}

export interface SpecialDate {
    hours: string;
    date: string;
}

export interface Data {
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
    sunday: string[];
}

export interface Content {
    en: En;
    de: De;
    fr: De;
    it: De;
    es: De;
    ru: De;
    cs: Cs;
    pt: De;
    nl: De;
    pl: De;
    zh: De;
    ko: De;
    hu: De;
    ro: De;
    he: De;
    jp: De;
    ar: De;
}

export interface Cs {
    title: string;
    subtitle: string;
    text?: string;
    banner: string;
    tips: string[];
    tip?: string;
    parking?: string;
    highlights?: string[];
}

export interface De {
    title: string;
    subtitle: string;
    text?: string;
    banner: string;
    tips: string[];
    highlights?: string[];
}

export interface En {
    title: string;
    subtitle: string;
    text: string;
    tip?: string;
    banner: string;
    tips: string[];
    parking?: string;
    highlights?: string[];
}