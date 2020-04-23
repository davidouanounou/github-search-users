import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTotal = styled.span`
    font-family: Roboto;
    font-weight: 400;
    font-size:  12px;
    line-height: 16px;
`;

const StyledDisplayed = styled.span`
    font-family: Roboto;
    font-weight: 900;
    font-size:  12px;
    line-height: 16px;
`;

const Count = ({total, displayed}) => {
    return(
        <div>
            <StyledDisplayed>{`${displayed} user(s) displayed on `}</StyledDisplayed>
            <StyledTotal>{`${total} total results`}</StyledTotal>
        </div>
    );
};

Count.displayName = 'Count';
Count.defaultProps = {};

Count.propTypes = {
    total: PropTypes.number.isRequired,
    displayed: PropTypes.number.isRequired
};

export default Count;