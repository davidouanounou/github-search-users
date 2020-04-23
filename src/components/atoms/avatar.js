import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AvatarFallback from './avatar-fallback';

const sizes = {
  small: {
    width: '48px',
    height: '48px',
  },
  medium: {
    width: '64px',
    height: '64px',
  },
  large: {
    width: '128px',
    height: '128px',
  },
};

const Container = styled.div`
  border-radius: 50%;
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  background-color: #f4f6f9;
  border: ${({ error }) => (error ? '1px solid #EF3555' : 'none')};
`;

const Img = styled.img`
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
`;

const Avatar = ({ size, alt, src }) => {
  const [isError, setError] = useState(false);
  return (
    <Container size={size} error={isError}>
      {src === '' || isError ? (
        <AvatarFallback />
      ) : (
        <Img
          src={src}
          alt={alt}
          onError={() => {
            setError(true);
          }}
        />
      )}
    </Container>
  );
};

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: 'medium',
  alt: '',
  src: '',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
