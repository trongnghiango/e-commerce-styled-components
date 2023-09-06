import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  background-color: white;
  cursor: pointer;
`;
