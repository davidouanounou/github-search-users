import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../atoms/card';
import Button from '../atoms/button';
import Avatar from '../atoms/avatar';

const StyledBox = styled.div`
    padding: 16px; 
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const User = ({data}) => {
    const goTo = url => {
        window.location.href = url;
    };

    return(
        <StyledBox>
            <Card width={150} height={250} >
                <Wrapper>
                    <Avatar size="large" src={data.avatar_url} />
                    <Button onClick={e => goTo(data.html_url)}><span>{data.login}</span></Button>
                </Wrapper>
            </Card>
        </StyledBox>
    )
}

User.displayName = 'User';
User.defaultProps = {
    data: {}
};
User.propTypes = {
    data: PropTypes.shape({
        "login": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "avatar_url": PropTypes.string.isRequired,
        "url": PropTypes.string.isRequired,
        "html_url": PropTypes.string.isRequired,
        "repos_url": PropTypes.string.isRequired,
      })
};

export default User;
