import React from "react";
import Card, { CardStyle, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle, css } from "styled-components";

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

export default function LatestNews(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle} className={`fd-card-latest-news${props.className ? ` ${props.className}` : ''}`}>
                <TypoGraphy className="h-latest-news" textStyle='card-h'><h3>{props.title ? props.title : 'Laatste nieuws'}</h3></TypoGraphy>
                <nav>
                    {
                        props.news.map((newsItem) => {
                            return (
                                <a key={newsItem.uuid} href={newsItem.url} target={newsItem.target}>
                                    <time>{newsItem.dateTime}</time>
                                    <span className={newsItem.isRead ? 'is-read' : undefined}>{newsItem.title}</span>
                                </a>
                            );
                        })
                    }
                </nav>
                <a href={props.link}>{props.linkText ? props.linkText : 'Lees al het laatste nieuws'} <i className="icon-chevron-right"/></a>
            </Card>
        </>
    );
}

const styles = css`
.fd-card-latest-news {
    h3.h-latest-news,
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
        .is-read {
            opacity: 0.6;
        }
        &:hover {
            color: #49a4a2;
            .icon-chevron-right {
                color: #49a4a2;
            }
        }
        text-decoration: none;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
    }

    .icon-chevron-right {
        float: right;
        color: #677381;
        font-size: 0.8125rem;
        margin-top: 4px;
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

export const LatestNewsStyle = css`
${CardStyle}
${getAllTextStyles(['card-h'])}
${styles}
`;

const GlobalStyle = createGlobalStyle`${LatestNewsStyle}`;
