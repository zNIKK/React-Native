import { BackButton, BackIcon, Container, Logo } from "./style";


type Props = {
    showBackButton?: boolean;
}

import logoImg from '@assets/logo.png';
export function Header({ showBackButton = false}) {
    return(
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg}/>
        </Container>
    );
};