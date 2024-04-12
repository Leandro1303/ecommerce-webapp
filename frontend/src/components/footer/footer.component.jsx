import {
  FooterContainer,
  SocialMediaContainer,
  DeveloperName,
  SocialMediaIcon,
  CopyRight,
  SocialMediaWrapper,
  DevsContainer,
} from './footer.styles';

import { DEV_CONTACTS } from '../../dev-contacts';
import { useEffect, useState } from 'react';

import GithubDark from '../../assets/social-icons/github-white.svg';
import GithubLight from '../../assets/social-icons/github.svg';
import Linkedin from '../../assets/social-icons/Linkedin.png';

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
      <DevsContainer>
        {DEV_CONTACTS.map((dev, index) => (
          <SocialMediaContainer key={index}>
            <DeveloperName>{dev.name}</DeveloperName>
            <SocialMediaWrapper>
                <SocialMediaIcon src={Linkedin} />
                <SocialMediaIcon src={isDarkMode} />
            </SocialMediaWrapper>
          </SocialMediaContainer>
        ))}
      </DevsContainer>
      <CopyRight>&copy; 2024 - All rights reserved</CopyRight>
    </FooterContainer>
  )
}

export default Footer
