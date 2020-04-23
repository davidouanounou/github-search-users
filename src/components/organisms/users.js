import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import User from '../molecules/user';

const StyledUsers = styled.div`
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 400;
    font-size:  12px;
    line-height: 16px;
    color: red;
    padding-bottom: 16px;
    width: 100vw;
    height: calc(100vh - 228px);
`;

const Important = styled.div`
    font-family: Roboto;
    font-weight: 900;
    font-size:  12px;
    line-height: 16px;
    color: red;
    padding-left: 4px;
    padding-right: 4px;
`;

const Users = ({list, request}) => {
    return(
        <StyledUsers>
            {list.length > 0 && !request.tooMuch && list.map(user => <User data={user} key={user.id} />)}
            {list.length === 0 && request.term && !request.loading && !request.tooMuch && <Infos>
                <span>There is no result for search term</span>
                <Important>{request.term}</Important>
            </Infos>}
            { request.tooMuch &&
                <Infos>
                    {`You have reached Github API rate limit ! You have to wait 
                        ${(Math.floor(Math.abs(new Date() - new Date(Number(request.reset * 1000)))/ 1000))} 
                        seconds before beiing able to request again !`}
                </Infos>
            }
        </StyledUsers>
    )
}

Users.displayName = 'Users';
Users.defaultProps = {
    list: []
};
Users.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      "login": PropTypes.string.isRequired,
      "id": PropTypes.number.isRequired,
      "avatar_url": PropTypes.string.isRequired,
      "url": PropTypes.string.isRequired,
      "html_url": PropTypes.string.isRequired,
      "repos_url": PropTypes.string.isRequired,
    }))
};

/*

*/

export default Users;
