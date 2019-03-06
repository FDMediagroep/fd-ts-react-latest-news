import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import LatestNews from '../src/LatestNews';
import uniqid from 'uniqid';

const GlobalStyles = createGlobalStyle`
    .content-area {
        padding: 1rem 0;
        &.overview {
            background-color: #f1ded0;
        }
        &.persoonlijk {
            background-color: #fff;
        }
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LatestNews
            cardStyle="default"
            link="/laatste-nieuws"
            news={[{
                uuid: uniqid(),
                dateTime: `11:18`,
                isRead: true,
                title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
            }, {
                uuid: uniqid(),
                dateTime: `11:15`,
                title: `Luchtvaartbedrijf Germania valt om`,
                url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
            }, {
                uuid: uniqid(),
                dateTime: `11:10`,
                title: `Britse dienstensector krijgt harde tik van brexit`,
                url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
            }, {
                uuid: uniqid(),
                dateTime: `11:00`,
                title: `DNB: Bovag-garantie toch geen verzekering`,
                url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
            }]}
        />
    </div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LatestNews
            cardStyle="article"
            link="/laatste-nieuws"
            news={[{
                uuid: uniqid(),
                dateTime: `11:18`,
                isRead: true,
                title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
            }, {
                uuid: uniqid(),
                dateTime: `11:15`,
                title: `Luchtvaartbedrijf Germania valt om`,
                url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
            }, {
                uuid: uniqid(),
                dateTime: `11:10`,
                title: `Britse dienstensector krijgt harde tik van brexit`,
                url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
            }, {
                uuid: uniqid(),
                dateTime: `11:00`,
                title: `DNB: Bovag-garantie toch geen verzekering`,
                url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
            }]}
        />
    </div>
</>,
document.querySelector('.article aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LatestNews
            cardStyle="persoonlijk"
            link="/laatste-nieuws"
            news={[{
                uuid: uniqid(),
                dateTime: `11:18`,
                isRead: true,
                title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
            }, {
                uuid: uniqid(),
                dateTime: `11:15`,
                title: `Luchtvaartbedrijf Germania valt om`,
                url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
            }, {
                uuid: uniqid(),
                dateTime: `11:10`,
                title: `Britse dienstensector krijgt harde tik van brexit`,
                url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
            }, {
                uuid: uniqid(),
                dateTime: `11:00`,
                title: `DNB: Bovag-garantie toch geen verzekering`,
                url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
            }]}
        />
    </div>
</>,
document.querySelector('.persoonlijk aside'));
