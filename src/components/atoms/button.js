import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const sizes = {
    small:{
        fontSize: '12px',
        lineHeight: '16px',
    },
    medium: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '20px',
    }
}

const Button = styled.button`
    font-family: Roboto;
    font-weight: 400;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: #000;
    width: 100%;
    outline: none;
    transition: all ease .4s;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #F4F6F9;
    background-color: #22D089;
    cursor: pointer;
    :disabled {
        background-color: #E5E7EB;
        color: #999999;
        cursor: not-allowed;
    };
    :hover {
        background-color: ${darken(0.1, '#22D089')};
    };
    :hover:disabled {
        background-color: #E5E7EB;
    }
`;

Button.displayName = 'Button';
Button.defaultProps = {
    size: 'medium'
};

Button.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 children: PropTypes.element.isRequired,
 onClick: PropTypes.func.isRequired
};

export default Button;