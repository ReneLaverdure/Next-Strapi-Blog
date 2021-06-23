import styled from '@emotion/styled'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useContext} from 'react'
import HeaderContext from '../context/HeaderContext'

export default function Navigation() {
    const router = useRouter();
    const {menuItems, color} = useContext(HeaderContext)

    return (
        <NavigationStyled color={color}>
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </NavigationStyled>
    )
}



const NavigationStyled = styled.div`
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
        margin-left: 10px;
    }
    a {
        text-decoration: none;
        color: ${props => props.color ? '#4C9EE3' : "#000000"};
        &:hover {
            text-decoration: underline;
        }
        &.active {
            color: #EF6800;
        }
    }
}
`