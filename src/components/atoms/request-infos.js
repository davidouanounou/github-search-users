import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLimit = styled.span`
    font-family: Roboto;
    font-weight: 400;
    font-size:  12px;
    line-height: 16px;
`;

const StyledPerformed = styled.span`
    font-family: Roboto;
    font-weight: 900;
    font-size:  12px;
    line-height: 16px;
`;

const StyledGroup = styled.div`
    line-height: 24px;
`;

const RequestInfos = ({performed, limit}) => {
    return(
        <StyledGroup>
            <StyledPerformed>{`You have performed ${performed} request${performed > 1 ? 's' : ''} on `}</StyledPerformed>
            <StyledLimit>{`${limit} allowed!`}</StyledLimit>
        </StyledGroup>
    );
};

RequestInfos.displayName = 'RequestInfos';
RequestInfos.defaultProps = {};

RequestInfos.propTypes = {
    performed: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
};

export default RequestInfos;