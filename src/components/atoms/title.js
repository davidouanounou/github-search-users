import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
    small:{
        fontSize: '16px',
        lineHeight: '18px',
    },
    medium: {
        fontSize: '20px',
        lineHeight: '22px',
    },
    large: {
        fontSize: '24px',
        lineHeight: '26px',
    }
}

const Title = styled.label`
    font-family: Roboto;
    font-weight: 900;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: #172847;
`;

Title.displayName = 'Title';
Title.defaultProps = {
    size: 'medium'
};

Title.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 children: PropTypes.element.isRequired
};

export default Title;