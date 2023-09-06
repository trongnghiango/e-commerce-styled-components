import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
`;
export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  min-width: 280px;
  height: 350px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  z-index: 3;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
