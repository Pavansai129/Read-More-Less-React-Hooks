import {useState} from 'react'
import {
  AppContainer,
  CustomHeading,
  CustomCaption,
  CustomImage,
  CustomDescription,
  CustomButton,
} from './styledComponents'

// Write your code here
const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 170)
  const [isReadMoreClicked, setReadMore] = useState(false)
  const descriptionText = isReadMoreClicked
    ? reactHooksDescription
    : slicedDescription
  const buttonText = isReadMoreClicked ? 'Read Less' : 'Read More'
  const onClickButton = () => {
    setReadMore(prevState => !prevState)
  }
  return (
    <AppContainer>
      <CustomHeading>React Hooks</CustomHeading>
      <CustomCaption>Hooks are a new addition to React</CustomCaption>
      <CustomImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <CustomDescription>{descriptionText}</CustomDescription>
      <CustomButton type="button" onClick={onClickButton}>
        {buttonText}
      </CustomButton>
    </AppContainer>
  )
}

export default ReadMore
