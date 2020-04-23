import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    background: #fff;
    flex-direction: column;
    padding: 16px;
    width: ${props => props.width}px;
    min-height: ${props => props.height}px;
`;

Card.displayName = 'Card';
Card.defaultProps = {};

Card.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Card;