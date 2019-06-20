import { CardTypes } from "@fdmg/fd-card";
interface NewsItem {
    uuid: string;
    dateTime: string;
    isRead?: boolean;
    target?: string;
    title: string;
    url: string;
}
export interface Props {
    cardStyle: CardTypes;
    className?: string;
    link: string;
    linkText?: string;
    news: NewsItem[];
    title?: string;
}
export default function LatestNews(props: Props): JSX.Element;
export declare const LatestNewsStyle: import("styled-components").FlattenSimpleInterpolation;
export {};
