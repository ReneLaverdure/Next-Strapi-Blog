import styled from '@emotion/styled'
import {rem} from 'polished'
import {Flex, Box} from 'reflexbox'
import Navigation from 'components/Navigation'
import Link from 'next/link'
import ToggleNavColor from 'components/ToggleNavColor'

export default function Header({isDark}) {
    return (
        <HeaderStyled isDark={isDark}>
            <Box variant="container">
                <Flex justifyContent="space-between" alignItems="center">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.svg" alt="site logo" />
                                <span className="logo-text">The Geek Cove</span>
                            </a>
                        </Link>

                    </div>
                    <Navigation />
                    {/* <ToggleNavColor /> */}
                </Flex>

            </Box>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? "#000000" : "#efefef"};
    padding: 20px;

    .logo{
        display: flex;
        align-items: center;

        &-text{
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left:20px;
        }
    }
`
