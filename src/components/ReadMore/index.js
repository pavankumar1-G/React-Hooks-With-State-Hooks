// Write your code here
import {useState} from 'react'

import {
  ReactHooksAppContainer,
  ReactHooksHeading,
  ReactHooksNote,
  ReactHooksImage,
  ReactHooksDescription,
  ReactHooksButton,
  ReactHooksButtonContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 171)

  const [isReadMore, setReadMoreAndLess] = useState(false)

  const onClickReadMoreAndLessButton = () => {
    setReadMoreAndLess(prev => !prev)
  }
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  return (
    <ReactHooksAppContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <ReactHooksNote>Hooks are a new addition to React</ReactHooksNote>
      <ReactHooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt=" react hooks"
      />
      {isReadMore ? (
        <ReactHooksDescription>{reactHooksDescription}</ReactHooksDescription>
      ) : (
        <ReactHooksDescription>{slicedDescription}</ReactHooksDescription>
      )}
      <ReactHooksButtonContainer>
        <ReactHooksButton type="button" onClick={onClickReadMoreAndLessButton}>
          {buttonText}
        </ReactHooksButton>
      </ReactHooksButtonContainer>
    </ReactHooksAppContainer>
  )
}
export default ReadMore
