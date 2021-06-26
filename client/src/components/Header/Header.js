import { NetViewLogo, Container, Button,  LogoSignIn } from './styles'
import NetView from '../../assets/netview.png'

const Header = () => {
    return (
        <Container>
            <LogoSignIn>
                <NetViewLogo>
                    <img style={{ width: "150px"}} src={NetView} alt="NetView Logo" />
                </NetViewLogo>
                <Button>
                    Sign In
                </Button>
            </LogoSignIn>
        </Container>
    )
}

export default Header
