import PropTypes from "prop-types";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";
import { SpinnerContainer } from "../spinner/spinner.styles";

// eslint-disable-next-line react-refresh/only-export-components
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disable={isLoading} {...otherProps}>
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPE_CLASSES)),
  isLoading: PropTypes.bool,
};

export default Button;