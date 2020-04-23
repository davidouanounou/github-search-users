import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const sizes = {
    small:{
        fontSize: '12px',
        lineHeight: '16px',
        height: '18px',
    },
    medium: {
        fontSize: '14px',
        lineHeight: '18px',
        height: '22px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '20px',
        height: '24px',
    }
}

const Input = styled.input`
    font-family: Roboto;
    font-weight: 300;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: #000;
    height: ${props => sizes[props.size].height};
    outline: none;
    transition: all ease .4s;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #E5E7EB;
    :focus {
        border: 1px solid ${darken(0.3, '#E5E7EB')};
    }
    :disabled {
        background-color: #E5E7EB;
        cursor: not-allowed;
    }
    ::placeholder {
        color: #7C859E;
    }
`;

Input.displayName = 'Input';
Input.defaultProps = {
    size: 'medium',
    placeholder: 'Type here'
};

Input.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 onChange: PropTypes.func.isRequired,
 placeholder: PropTypes.string
};

export default Input;
