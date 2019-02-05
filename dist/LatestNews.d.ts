import { PureComponent } from "react";
interface NewsItem {
    uuid: string;
    dateTime: string;
    target?: string;
    title: string;
    url: string;
}
export interface Props {
    className?: string;
    link: string;
    linkText?: string;
    news: NewsItem[];
    title?: string;
}
export default class LatestNews extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare const LatestNewsStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export {};
