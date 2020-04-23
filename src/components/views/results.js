import React from 'react';
import styled from 'styled-components';
import SearchBar from '../organisms/search-bar';
import Users from '../organisms/users';
import useUsers from '../../hooks/use-users';
import Headerbar from '../atoms/headerbar';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledUsers = styled.div`
    display: flex;
    overflow: scroll;
    margin-top: 130px;
`;

const StyledBar = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`;

const Results = () => {
    const { count, search, totalCount, users, request } = useUsers();
    return(
        <>
            <StyledPage>
                <StyledBar>
                    <Headerbar>
                        {
                            <SearchBar 
                                onChange={term => search(term)} 
                                loading={request.loading}
                                count={count}
                                totalCount={totalCount}
                                rateLimit={{
                                    limit: request.limit,
                                    performed: request.performed,
                                    remaining: request.remaining,
                                    reset: request.reset
                                }}
                            />
                        }
                    </Headerbar>
                </StyledBar>
                <StyledUsers>
                    <Users list={users} request={request} />
                </StyledUsers>
            </StyledPage>
        </>
    );
}

export default Results;
