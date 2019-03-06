import TestRenderer from 'react-test-renderer';
import LatestNews from '../src/LatestNews';
import React from 'react';

describe('LatestNews', () => {
    test('renders correctly', () => {
        let latestNews = TestRenderer.create(<LatestNews cardStyle="default" link='/laatste-nieuws' news={[{uuid: '1', dateTime: '15:29', title: 'title van nieuwsbericht', url: 'https://fd.nl'}]}/>);
        expect(latestNews.toJSON()).toMatchSnapshot();
        latestNews = TestRenderer.create(<LatestNews className="class-name" cardStyle="article" linkText="Ga naar laatste nieuws" title="Laatste nieuws blokje" link='/laatste-nieuws' news={[{uuid: '2', dateTime: '15:29', title: 'title van nieuwsbericht', url: 'https://fd.nl', target: "_blank"}]}/>);
        expect(latestNews.toJSON()).toMatchSnapshot();
    });

    test('renders is-read correctly', () => {
        let latestNews = TestRenderer.create(<LatestNews link='/laatste-nieuws' cardStyle="persoonlijk" news={[{uuid: '1', dateTime: '15:29', isRead: true, title: 'title van nieuwsbericht', url: 'https://fd.nl'}]}/>);
        expect(latestNews.toJSON()).toMatchSnapshot();
    });
});
