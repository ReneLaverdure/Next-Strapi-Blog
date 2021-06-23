import {NextSeo} from 'next-seo'
import {Box} from 'reflexbox'
import fetch from 'isomorphic-unfetch'


export default function about({page}) {
    const SEO = {
        title: page.title,
        description: "what is geek cove about",
        openGraph: {
            title: page.title,
            description: "what is geek cove about"
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant='container'>
                <Box as="h2" my={40}>{page.Title}</Box>
                <div dangerouslySetInnerHTML={{__html: page.Content}} />
            </Box>
        
        </>
    )
}


export async function getStaticProps(){
    const {API_URL} = process.env;

    const res = await fetch(`${API_URL}/pages/60a56093cfd32f342413e1b4`)
    const data = await res.json()
  

    return {
        props: {
            page: data
        },
        revalidate: 1
    }
}
