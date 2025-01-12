export interface MenuInterface {
    _id: string;
    content: Content ;
    type: string;
    menu?: boolean;
    footer?: boolean;
    order: string;
    link?: string;
    section?: string;
    image?: string;
}

export interface Content {
    en: En;
    de: De;
    fr: De;
    it: De;
    es: De;
    ru: De;
    cs: De;
    pt: De;
    nl: De;
    pl: De;
    zh: De;
    ko: De;
    hu?: De;
    ro?: De;
    he?: De;
    jp?: De;
    ar?: De;
}

export interface De {
    title?: string;
    subtitle?: string;
}

export interface En {
    title: string;
    subtitle?: string;
}


export interface LangInterface {
    _id: string;
    title: string;
    alpha2code: string;
    isActive: boolean;
}

