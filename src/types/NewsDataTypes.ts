export interface NewsTypesInterface {
    _id: string;
    content: LangsInterface;
    status: string;
    datePublished: string;
    dateCreated: string;
    images: string[];
    webimages: string[];
    displayOnHomePage: boolean;
    url: string;
    publishedOnHomePage: string;
}

interface LangsInterface{
    en: En;
    de: Cs;
    fr: Cs;
    it: Cs;
    es: Cs;
    ru: Cs;
    cs: Cs;
    pl: Cs;
}

export interface Cs {
    title?: string;
    text?: string;
}

export interface En {
    title: string;
    text: string;
}