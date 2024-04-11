import {
  FooterContainer,
  SocialMediaContainer,
  DeveloperName,
  SocialMediaLink,
  SocialMediaIcon,
  CopyRight,
  SocialMediaWrapper,
} from './footer.styles';

import { DEV_CONTACTS } from '../../dev-contacts';

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRight>&copy; 2021 - All rights reserved</CopyRight>
      {DEV_CONTACTS.map((dev, index) => (
        <SocialMediaContainer key={index}>
          <DeveloperName>{dev.name}</DeveloperName>
          <SocialMediaWrapper>
            <SocialMediaLink href={dev.github}>
              <SocialMediaIcon className="fab fa-github"></SocialMediaIcon>
            </SocialMediaLink>
            <SocialMediaLink href={dev.linkedin}>
              <SocialMediaIcon className="fab fa-linkedin"></SocialMediaIcon>
            </SocialMediaLink>
          </SocialMediaWrapper>
        </SocialMediaContainer>
      ))}
    </FooterContainer>
  )
}

export default Footer
