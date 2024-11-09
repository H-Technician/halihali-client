export interface VideoData {
    id: string;
    hv_number: string;
    title: string;
    web_home_cover: WebHomeCover;
}
export interface WebHomeCover {
    webp: string;
    jpg: string;
}
export interface HomeCard {
    cardType: 'video' | 'floor';
    VideoCardData?: VideoData;
    FloorCardData?: VideoData;
}