import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  /* background-color: black; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  padding: 20px 10px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 8px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Center = styled.div`
  flex: 1;
  /* display: flex;
  align-items: center; */
  text-align: center;
`;

export const Logo = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const MenuItem = styled.div``;

export const CartContainer = styled.div`
  position: relative;
`;
export const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  translate: 50% -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
