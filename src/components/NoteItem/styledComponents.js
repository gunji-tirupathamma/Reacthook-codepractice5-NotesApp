// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const TitleAndNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-width: 10px;
  border-radius: 10px;
  border-color: #cbd5e1;
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
