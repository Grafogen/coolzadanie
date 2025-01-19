export interface ReviewInterface {
    _id: string;
    name: string;
    place?: string;
    title?: string;
    text?: string;
    language?: string;
    rating: number;
    date: string;
    attraction?: string;
    status: string;
    email?: string;
    type?: string;
    reply?: string;
}