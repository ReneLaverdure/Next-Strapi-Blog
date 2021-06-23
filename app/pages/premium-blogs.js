import {Box} from "reflexbox";
import getConfig from 'next/config';
import { parseCookies  } from 'nookies'


export default function premiumBlogs ({articles}) {
    console.log(articles)
    return (
        <>
        <Box variant="container">
            <Box as="h2" my={40}>
                Payed article
            </Box>
        </Box> 
        </>
    )
}

const {publicRuntimeConfig} = getConfig();

export async function getServerSideProps(ctx){

    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/premium-blogs`, {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
    })

    const articles = await res.json()
    return{
        props: {
            articles: articles
        }
    }
}