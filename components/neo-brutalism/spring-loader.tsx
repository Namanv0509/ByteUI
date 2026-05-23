import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" height={250} width={200} viewBox="0 0 200 200">
        <g style={{order: -1}}>
          <ellipse cx="100" cy="100" rx="62" ry="31" stroke="#A8DADC" strokeWidth="1" fill="none" transform="rotate(0 100 100)" id="bounce"/>
          <ellipse cx="100" cy="100" rx="62" ry="31" stroke="#A8DADC" strokeWidth="1" fill="none" transform="rotate(0 100 100)" id="bounce2"/>
          <ellipse cx="100" cy="100" rx="62" ry="31" stroke="#A8DADC" strokeWidth="1" fill="none" transform="rotate(0 100 100)" id="bounce3"/>
          <ellipse cx="100" cy="100" rx="62" ry="31" stroke="#A8DADC" strokeWidth="1" fill="none" transform="rotate(0 100 100)" id="bounce4"/>
          <svg width={200} height={200} xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="hole-cutter">
      <rect width="100%" height="100%" fill="white" />
      <ellipse cx="100" cy="100" rx="37" ry="17" fill="black" />
    </mask>
  </defs>
  <ellipse cx="100" cy="100" rx="65" ry="31" transform="rotate(0 200 80)" strokeWidth="2" fill="#f76a9b" id="bounce5" mask="url(#hole-cutter)" />
</svg>
    </g>
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes bounce {
    0%,
    100% {
      translate: 0px 36px;
    }
    50% {
      translate: 0px 46px;
    }
  }
  @keyframes bounce2 {
    0%,
    100% {
      translate: 0px 46px;
    }
    50% {
      translate: 0px 58px;
    }
  }
    @keyframes bounce3 {
    0%,
    100% {
      translate: 0px 56px;
    }
    50% {
      translate: 0px 66px;
    }
  }
    @keyframes bounce4 {
    0%,
    100% {
      translate: 0px 66px;
    }
    50% {
      translate: 0px 76px;
    }
  }
    @keyframes bounce5 {
    0%,
    100% {
      translate: 0px 36px;
    }
    50% {
      translate: 0px 26px;
    }
  }
  #bounce {
    animation: bounce 4s ease-in-out infinite;
  }
  #bounce2 {
    animation: bounce2 4s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  #bounce3 {
    animation: bounce3 4s ease-in-out infinite;
    animation-delay: 1s;
  }
  #bounce4 {
    animation: bounce4 4s ease-in-out infinite;
    animation-delay: 1.5s;
  }
  #bounce5 {
    animation: bounce5 4s ease-in-out infinite;
    animation-delay: 0.6s;
  }`

export default Loader;
