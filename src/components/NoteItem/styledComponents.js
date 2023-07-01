// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 257px;
    margin: 0px 8px 24px 8px;
`

export const TitleName = styled.h1`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  margin: 10px;
  color: #334155;
`

export const NoteText = styled.p`
  font-size: 16px;
  font-family: Roboto;
  margin: 10px;
  color: #475569;
`
