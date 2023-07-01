// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const NoteHeading = styled.h1`
  font-size: 30px;
  font-family: Bree Serif;
  font-weight: bold;
  color: #4c63b6;
  @media screen and (min-width: 767px) {
    font-size: 40px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 40%;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

export const InputNoteTitle = styled.input`
  height: 30px;
  width: 70%;
  color: #475569;
  margin: 10px;
  outline: 0px;
  border-width: 0px;
`

export const NoteDescription = styled.textarea`
  height: 50%;
  width: 60%;
  color: #475569;
  margin: 10px;
  outline: 0px;
  border-width: 0px;
`

export const AddButton = styled.button`
  height: 40px;
  width: 60px;
  background-color: #4c63b6;
  color: #ffffff;
  font-family: Roboto;
  border-radius: 10px;
  outline: 0px;
  border-width: 0px;
  align-self: flex-end;
  margin: 20px;
`
export const NoNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-top: 50px;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
`

export const NoNoteText = styled.h2`
  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  color: #334155;
`

export const NoNoteDescription = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #475569;
`

export const NoteList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style-type: none;
  width: 50%;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`
