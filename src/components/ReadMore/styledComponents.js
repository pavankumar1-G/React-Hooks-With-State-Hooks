// Style your elements here
import styled from 'styled-components'

export const ReactHooksAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`
export const ReactHooksHeading = styled.h1`
  text-align: center;
  font-family: Roboto;
  color: #1e293b;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`
export const ReactHooksNote = styled.p`
  color: #334155;
  font-size: 13px;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 40px;
    margin-top: 0;
  }
`
export const ReactHooksImage = styled.img`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 680px;
  }
`
export const ReactHooksDescription = styled.p`
  color: #334155;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
export const ReactHooksButton = styled.button`
  height: 36px;
  width: 90px;
  border: none;
  border-radius: 8px;
  background-color: #1f81ff;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 55px;
    width: 130px;
    text-align: center;
  }
`
export const ReactHooksButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`
