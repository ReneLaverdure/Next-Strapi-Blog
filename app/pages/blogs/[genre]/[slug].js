import {Flex, Box} from 'reflexbox'
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch'
import {NextSeo} from 'next-seo'


export default function blog({blog}) {
    console.log(blog)

    const SEO = {
        title: `Geek Cove | ${blog.title}`,
        description: blog.title,

        openGraph: {
            title: `Geek Cove | ${blog.title}`,
            description: blog.title,
        }
    }
    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" my={40}>{blog.title}</Box>
                <Box maxWidth={600}>
                    <p dangerouslySetInnerHTML={{__html: blog.title}}></p>
                </Box>
            </Box>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context){
    const {slug} = context.query
    console.log(slug)
    const res = await fetch(`${publicRuntimeConfig.API_URL}/blogs?slug=${slug}`)
    const data = await res.json()
    return {
        props: {
            blog: data[0]
        },
    }
}

