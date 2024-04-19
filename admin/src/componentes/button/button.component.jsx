import PropTypes from "prop-types";

import {
  BaseButton,
  SignInButton,
  InvertedButton,
  GreenButton,
  RedButton,
  ButtonSpinner
} from "./button.styles";

// eslint-disable-next-line react-refresh/only-export-components
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  signIn: "sign-in",
  green: "green",
  red: "red",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
    [BUTTON_TYPE_CLASSES.green]: GreenButton,
    [BUTTON_TYPE_CLASSES.red]: RedButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPE_CLASSES)),
  isLoading: PropTypes.bool,
};

export default Button;