// Write your code here
import {ListItem, TitleName, NoteText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails
  return (
    <>
      <ListItem>
        <TitleName>{title}</TitleName>
        <NoteText>{noteText}</NoteText>
      </ListItem>
    </>
  )
}

export default NoteItem
