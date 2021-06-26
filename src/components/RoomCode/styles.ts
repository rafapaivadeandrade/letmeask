import styled from 'styled-components'

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  div{
    background: #835afd;
    padding: 10px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: - 5px;
  }

  span{
    display: block;
    align-items: center;
    flex: 1;
    padding: 10px 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
  }
`