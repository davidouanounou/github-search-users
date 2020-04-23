import styled from 'styled-components';

const Headerbar = styled.div`
    display: flex;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    background: #fff;
    padding: 16px;
    width: calc(100vw - 32px);
    height: 80px;
    position: fixed;
`;

Headerbar.displayName = 'Headerbar';
Headerbar.defaultProps = {};
Headerbar.propTypes = {};

export default Headerbar;
