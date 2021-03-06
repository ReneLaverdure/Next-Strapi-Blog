import { Box } from "reflexbox";
import getConfig from 'next/config'
import styled from '@emotion/styled'
import { useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

const { publicRuntimeConfig } = getConfig();

export default function register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        const register = await fetch(`${publicRuntimeConfig.API_URL}/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerResponse = await register.json();
        console.log(registerResponse)

        // setCookie(null, 'jwt', loginResponse.jwt , {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: '/',
        // })

        // Router.push('/premium-blogs')
    }

    return (
		<>
            <RegisterStyled>
                <Box variant="container">
                    <Box as="h2" my={40}>
                        Register here
                    </Box>

                    <form>
                        <input type="text" onChange={e => setUsername(e.target.value) } value={username} placeholder="username" /><br />
                        <input type="email" onChange={e => setEmail(e.target.value) } value={email} placeholder="email" /><br />
                        <input type="password" onChange={e => setPassword(e.target.value) } value={password} placeholder="password" /><br />
                        <button type="button" onClick={() => handleRegister() }>Register</button>
                    </form>
                </Box>
            </RegisterStyled>
		</>
    )
}

const RegisterStyled = styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`