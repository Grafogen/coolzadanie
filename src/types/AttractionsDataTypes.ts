export interface AttractionsDataInterface {
    _id: string;
    type: string;
    content: Content;
    images: string[];
    lat: number;
    lon: number;
    opening: Opening[];
    tags: any[];
    categories: string[];
    area: string;
    status: string;
    order: number;
    address2?: string;
    created: string;
    updated: string;
    website: string;
    priceAdult: string;
    benefitAdult: string;
    benefitChild: string;
    benefitStudent: string;
    benefitSenior?: string;
    benefitDisabled?: string;
    benefitFamily?: string;
    benefitGroup?: string;
    benefit: string;
    priceChild: string;
    reviewValue: number;
    reviewCount: number;
    address1: string;
    phone: string;
    email?: string;
    webimages: string[];
    objectsNearby: string[];
    objectsSimilar: string[];
    metro?: string;
    tram?: string;
    priceStudent: string;
    typology: string;
    slug: string;
    mostpopular: number;
    parentAttraction?: string[];
    priceSenior?: string;
    bus?: string;
    priceFamily?: string;
    ferry?: string;
    funicular?: string;
    priceGroup?: string;
    priceDisabled?: string;
    parking?: string;
}

export interface Opening {
    startDate: string;
    endDate: string;
    type: string;
    name: string;
    data: Data;
    comment: Comment;
    specialDates: SpecialDate [];
}

export interface SpecialDate {
    hours: string;
    date: string;
}

export interface Comment {
    ar: string;
    cs: string;
    de: string;
    en: string;
    es: string;
    fr: string;
    he: string;
    hu: string;
    it: string;
    jp: string;
    ko: string;
    nl: string;
    pl: string;
    pt: string;
    ro: string;
    ru: string;
    zh: string;
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
    ru: Ru;
    cs: Cs;
    pt: De;
    nl: De;
    pl: Ru;
    zh: Zh;
    ko: Zh;
    hu: Zh;
    ro: Zh;
    he: Zh;
    jp: Zh;
    ar: Ar;
}

export interface Ar {
    title?: string;
    subtitle: string;
    text: string;
    banner: string;
    tips?: string[];
}

export interface Zh {
    title: string;
    subtitle: string;
    text: string;
    banner: string;
    tips?: string[];
}

export interface Cs {
    title: string;
    subtitle: string;
    text: string;
    banner: string;
    tips?: string[];
    tip?: string;
    highlights?: string[];
    parking?: string;
}

export interface Ru {
    title: string;
    subtitle: string;
    text: string;
    banner: string;
    tips?: string[];
    highlights?: any[];
}

export interface De {
    title: string;
    subtitle: string;
    text: string;
    banner: string;
    tips?: string[];
    tip?: string;
}

export interface En {
    title: string;
    subtitle: string;
    text: string;
    tip?: string;
    banner: string;
    highlights?: string[];
    tips: string[];
    parking?: string;
}