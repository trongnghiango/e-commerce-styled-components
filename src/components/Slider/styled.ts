import { styled } from 'styled-components';
import { ArrowProps } from '../../types/styleTypes';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: orange;
  position: relative;
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
  opacity: 0.7;
  left: ${(props) => props.direction === 'left' && '20px'};
  right: ${(props) => props.direction === 'right' && '20px'};
`;
export const Wrapper = styled.div`
  height: 100%;
`;
export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
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

export const Title = styled.h1``;
export const Desc = styled.p``;
export const Button = styled.button``;
