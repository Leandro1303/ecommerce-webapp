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

export default InputField;