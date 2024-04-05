import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

// STYLES
import {
  UserItemContainer,
  UserItemIcon,
  UserItemName,
} from './user-item.styles';
import { selectUserDropdown } from '../../store/user/user.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserDropdownOpen } from '../../store/user/user.action';

const UserItem = ({ userItem }) => {
  const { name, route, darkIcon, lightIcon } = userItem;
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches
    ? darkIcon
    : lightIcon
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserDropDownOpen = useSelector(selectUserDropdown);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setIsDarkMode(event.matches ? darkIcon : lightIcon);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = () => {
    navigate(route);
    dispatch(setIsUserDropdownOpen(!isUserDropDownOpen));
  }

  return (
    <UserItemContainer onClick={handleNavigation}>
      <UserItemIcon src={isDarkMode} />
      <UserItemName>| {name}</UserItemName>
    </UserItemContainer>
  )
}

UserItem.propTypes = {
  userItem: PropTypes.object.isRequired
}

export default UserItem;
