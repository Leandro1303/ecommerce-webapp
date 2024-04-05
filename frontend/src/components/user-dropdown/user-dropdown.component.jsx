// REDUX
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Button from '../button/button.component.jsx';
import UserItem from '../user-item/user-item.component.jsx';

// REDUX ACTIONS AND SELECTORS
import {
  setIsUserDropdownOpen,
  signOutStart
} from '../../store/user/user.action.js';
import { selectUserDropdown } from '../../store/user/user.selector.js';


// STYLES
import {
  UserDropdownContainer,
  UserItems
} from './user-dropdown.styles.jsx';
import userOptions from '../../user-options.data.js';

const AvatarDropdown = () => {
  const dispatch = useDispatch();
  const isUserDropDownOpen = useSelector(selectUserDropdown);
  
  const signOutUSer = () => {
    dispatch(signOutStart());
    dispatch(setIsUserDropdownOpen(!isUserDropDownOpen));
  };

  return (
    <UserDropdownContainer>
      <UserItems>
        {userOptions.map((userOptions) => (
            <UserItem key={userOptions.id} userItem={userOptions} />
          ))}
      </UserItems>
      <Button onClick={signOutUSer}>SIGN OUT</Button>
    </UserDropdownContainer>
  );
};

export default AvatarDropdown;