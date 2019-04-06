import styled from 'styled-components'
import Text from '../components/Text'
import { PageContainer } from '../helpers'
// import Chewy from '../assets/fonts/Chewy-Regular.ttf'

const Header = styled(Text)`
    color: white;
    font-size: ${props => props.theme.fonts.h1};
    font-family: ${props => props.theme.fontFamily.default};
`

const SubTitle = styled(Text)`
    font-size: ${props => props.theme.fonts.subtitle};
    font-family: Roboto;
    color: white;
`

const Page = styled(PageContainer)`
    padding-top: 60px;
    width: 100vw;
`

export {
    Header,
    SubTitle,
    Page
}