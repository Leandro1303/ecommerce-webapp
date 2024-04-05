
import userOptions from '../../user-options.data.js'
import UserItem from '../user-item/user-item.component.jsx'

// STYLES
import {
  ProfileOptionPageContainer,
  ProfileOptionTitle,
  ProfileOptionSideBar,
  ProfileOptionList,
} from './profile-option.styles.jsx'

const ProfileOption = () => {
  return (
    <ProfileOptionPageContainer>
      <ProfileOptionSideBar>
        <ProfileOptionTitle>Profile Option</ProfileOptionTitle>
        <ProfileOptionList>
          {userOptions.map((userOption) => (
            <UserItem key={userOption.id} userItem={userOption} />
          ))}
        </ProfileOptionList>
      </ProfileOptionSideBar>
    </ProfileOptionPageContainer>
  )
}

export default ProfileOption
