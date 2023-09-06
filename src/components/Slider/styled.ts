import { styled } from 'styled-components';
import { ArrowProps, SlideProps, WrapperProps } from '../../types/styleTypes';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 100;
  opacity: 0.4;
  left: ${(props) => props.direction === 'left' && '20px'};
  right: ${(props) => props.direction === 'right' && '20px'};
  &:hover {
    background-color: gray;
  }

  &:active {
    background-color: black;
  }
`;
export const Wrapper = styled.div<WrapperProps>`
  height: 100vw;
  display: flex;
  box-sizing: border-box;
  transition: all 1.2s ease;
  transform: translateX(
    ${(props) => props.slideIndex && props.slideIndex * -100}vw
  );
`;
export const Slide = styled.div<SlideProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
export const ImageContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
`;

export const Image = styled.img`
  height: 85%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
