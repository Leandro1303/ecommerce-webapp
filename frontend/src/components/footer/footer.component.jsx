import {
  FooterContainer,
  SocialMediaContainer,
  DeveloperName,
  SocialMediaIcon,
  CopyRight,
  SocialMediaWrapper,
  DevsContainer,
  Line,
  About,
  Title,
  WebMapContainer,
  WebMap,
  ContactsContainer,
} from './footer.styles';

import { DEV_CONTACTS } from '../../dev-contacts';
import { useEffect, useState } from 'react';

import GithubDark from '../../assets/social-icons/github-white.svg';
import GithubLight from '../../assets/social-icons/github.svg';
import Linkedin from '../../assets/social-icons/Linkedin.png';
import Facebook from '../../assets/social-icons/facebook.svg';
import Instagram from '../../assets/social-icons/instagram.svg';
import Twitter from '../../assets/social-icons/twitter.svg';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches
    ? GithubDark
    : GithubLight);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setIsDarkMode(event.matches ? GithubDark : GithubLight);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <FooterContainer>
      <Title>
        Follow Us!
      </Title>
      <ContactsContainer>
        <a href='https://www.instagram.com'><SocialMediaIcon src={Instagram} /></a>
        <a href='https://www.x.com'><SocialMediaIcon src={Twitter} /></a>
        <a href='https://www.facebook.com'><SocialMediaIcon src={Facebook} /></a>
      </ContactsContainer>
      <Line />
      <Title>
        Contacts
      </Title>
      <DevsContainer>
        {DEV_CONTACTS.map((dev, index) => (
          <SocialMediaContainer key={index}>
            <DeveloperName>{dev.name}</DeveloperName>
            <SocialMediaWrapper>
              <a href={dev.linkedin}><SocialMediaIcon src={Linkedin} /></a>
              <a href={dev.github}><SocialMediaIcon src={isDarkMode} /></a>
            </SocialMediaWrapper>
          </SocialMediaContainer>
        ))}
      </DevsContainer>
      <Line />
      <Title>
        Web Map
      </Title>
      <WebMapContainer>
        <WebMap to='http://localhost:5173/'>
          Home
        </WebMap>
        <WebMap to='/shop/Hats'>
          Hats
        </WebMap>
        <WebMap to='/shop/Jackets'>
          Jackets
        </WebMap>
        <WebMap to='/shop/Sneakers'>
          Sneakers
        </WebMap>
        <WebMap to='/shop/Womens'>
          Womens
        </WebMap>
        <WebMap to='/shop/Mens'>
          Mens
        </WebMap>
      </WebMapContainer>
      <Line />
      <About to='/about'>About</About>
      <CopyRight>&copy; 2024 - All rights reserved</CopyRight>
    </FooterContainer>
  )
}

export default Footer