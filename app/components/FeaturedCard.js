import {Flex, Box} from 'reflexbox'
import styled from '@emotion/styled'
import Link from 'next/link'

export default function FeaturedCard({blog, col}) {
    console.log(blog)

    const {API_URL} = process.env
    if(!blog.genre){
        blog.genre = {};
        blog.genre.slug = "uncategorised"
    }

    return (
        <Link href="/blogs/[genre]/[slug]" as={`/blogs/${blog.genre.slug}/${blog.slug}`}>
                <FeaturedCardStyle url={API_URL} blog={blog} col={col}>
                <div className="cover"></div>
                <div className="title">
                    <h4>{blog.genre.title}</h4>
                    <h3>{blog.title}</h3>
                </div>
            </FeaturedCardStyle>
        </Link>

    )
}

const FeaturedCardStyle = styled.a`
    height: 12rem;
    border-radius: 10px;
    background-image: url(${props => props.url + props.blog.hero.url});
    grid-column: ${props => props.col};
    background-position: top;
    background-size: cover;
    position: relative;
    cursor: pointer;
    animation: 0.4s ease-out all;
    transition-duration: 0.3s;

    :hover{
        transform: translateY(-5px);
        box-shadow: 8px 5px 21px 2px rgba(0,0,0,0.28)
    }

    
    .title{
        color: white;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        
        h4{
            background-color: purple;
            display: inline-block;
            padding: .5rem .7rem;
            border-radius: 10px;
        }
    }

    .cover{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0,0,0.35);
        border-radius: 10px;
    }
    
`
