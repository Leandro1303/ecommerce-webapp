import PropTypes from 'prop-types';

import {
    FormInputLabel,
    Input,
    Group,
} from './input-field.styles.jsx'

const InputField = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps}/>
            {label && (
                <FormInputLabel shrink={otherProps.value}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

InputField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    hidden: PropTypes.bool,
    accept: PropTypes.string,
}

export default InputField;