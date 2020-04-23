import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputGroup from '../molecules/input-group';
import Count from '../atoms/count'
import RequestInfos from '../atoms/request-infos';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const WrapperInput = styled.div`
    width: 250px;
`;

const WrapperInfos = styled.div`
    display: flex;
    flex-direction: column;
    height: 68px;
    justify-content: center;
`;

const SearchBar = ({onChange, loading, count, totalCount, rateLimit}) => {
    
    let timeout = null;

    const searchUser = term => {
        clearTimeout(timeout);
        if(term.length > 0){
            timeout = setTimeout(() => {
                onChange(term);
            }, 500);
        }
    };

    useEffect(() => {
        console.log(loading)
    }, [loading])

    return(
        <Wrapper>
            <WrapperInput>
                <InputGroup 
                    label='Search for a user'
                    error={false}
                    onChange={e => searchUser(e.target.value)}
                    disabled={loading}
                    testid='search-field'
                />
            </WrapperInput>
            <WrapperInfos>
                <Count total={totalCount} displayed={count} />
                <RequestInfos performed={rateLimit.performed} limit={rateLimit.limit} />
            </WrapperInfos>
        </Wrapper>
    )
}

SearchBar.displayName = 'SearchBar';
SearchBar.defaultProps = {
    loading: false,
    count: 0,
    totalCount: 0
};
SearchBar.propTypes = {
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;