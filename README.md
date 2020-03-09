[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-latest-news.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-latest-news)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-latest-news/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-latest-news?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-latest-news.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-latest-news)


# fd-latest-news
FD-themed latest news.

# Installation
* Run `npm i -D @fdmg/fd-latest-news`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/latest-news/demo.html)

# Usage
```
import LatestNews from '@fdmg/fd-latest-news';
...
<LatestNews
    link="/laatste-nieuws"
    news={[{
        uuid: '1',
        dateTime: `11:18`,
        title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
        url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
    }, {
        uuid: '2',
        dateTime: `11:15`,
        title: `Luchtvaartbedrijf Germania valt om`,
        url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
    }, {
        uuid: '3',
        dateTime: `11:10`,
        title: `Britse dienstensector krijgt harde tik van brexit`,
        url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
    }, {
        uuid: '4',
        dateTime: `11:00`,
        title: `DNB: Bovag-garantie toch geen verzekering`,
        url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
    }]}
/>
```
