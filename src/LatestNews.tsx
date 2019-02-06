import React, { PureComponent } from "react";
import Card, { CardStyle } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle } from "styled-components";

interface NewsItem {
    uuid: string;
    dateTime: string;
    isRead?: boolean;
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

    render() {
        return (
            <>
                <GlobalStyle/>
                <Card className={`fd-card-latest-news${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <TypoGraphy className="h-latest-news" textStyle='card-h'><h3>{this.props.title ? this.props.title : 'Laatste nieuws'}</h3></TypoGraphy>
                    <nav>
                        {
                            this.props.news.map((newsItem) => {
                                return (
                                    <a key={newsItem.uuid} href={newsItem.url} target={newsItem.target}>
                                        <time>{newsItem.dateTime}</time>
                                        <span className={newsItem.isRead ? 'is-read' : undefined}>{newsItem.title}</span>
                                    </a>
                                );
                            })
                        }
                    </nav>
                    <a href={this.props.link}>{this.props.linkText ? this.props.linkText : 'Lees al het laatste nieuws'}</a>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-card-latest-news {
    .h-latest-news,
    > a,
    nav > a {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    > a,
    nav > a {
        display: block;
        font-family: 'ProximaNovaRegular', sans-serif;
        border-top: 1px solid rgba(0,0,0,0.1);
        line-height: 1.2em;
        color: #191919;
        &.is-read {
            opacity: 0.6;
        }
        &:hover {
            color: #49a4a2;
        }
        text-decoration: none;
        font-size: 16px;
        @media only screen and (min-width: 641px) {
            font-size: 17px;
        }
    }

    time {
        color: #677381;
        display: block;
        font-size: 13px;
        @media only screen and (min-width: 641px) {
            font-size: 14px;
        }
    }
}
`;

export const LatestNewsStyle = createGlobalStyle`
    ${(CardStyle as any).globalStyle.rules}
    ${getAllTextStyles(['card-h']).globalStyle.rules}
    ${(GlobalStyle as any).globalStyle.rules}
`;
