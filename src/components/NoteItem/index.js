// Write your code here
import {
  ListItem,
  TitleAndNoteContainer,
  TitleName,
  NoteText,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails
  return (
    <>
      <ListItem>
        <TitleAndNoteContainer>
          <TitleName>{title}</TitleName>
          <NoteText>{noteText}</NoteText>
        </TitleAndNoteContainer>
      </ListItem>
    </>
  )
}

export default NoteItem
