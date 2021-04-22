import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
import { phone } from './masks';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    primaryColor: string;
    secondColor: string;
    mask?: "phone";
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, mask, secondColor, primaryColor, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        if (mask === 'phone') {
            phone(e);
        }
    }, [mask]);

    return (
        <Container primaryColor={primaryColor} secondColor={secondColor} isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={18} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleKeyUp}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
            {error && <Error title={error}><FiAlertCircle color="#004aad" size={18}/></Error>}
        </Container>
    );
};

export default Input;
