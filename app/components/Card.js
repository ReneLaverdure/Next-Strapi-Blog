import styled from '@emotion/styled'
import Link from 'next/link'

export default function Card({blog}) {

    const {API_URL} = process.env

    if(!blog.genre){
        blog.genre = {};
        blog.genre.slug = "uncategorised"
    }

    return (
        <CardStyled url={API_URL} blog={blog}>
            
        {blog.hero.url && (
            <div className="poster">
                <span>{blog.genre.title}</span>
            </div>
            )
        }
            
            <div className="body">
                <h3>{blog.title}</h3>
                <h4>{blog.author.first_name + " " +blog.author.last_name}</h4>
                <p dangerouslySetInnerHTML={{__html: blog.hook}}/>

                <Link href="/blogs/[genre]/[slug]" as={`/blogs/${blog.genre.slug}/${blog.slug}`}>
                    <a>Read More</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-left: 20px ;
    overflow: hidden;
    display: flex;
    position: relative;

    .poster{
        width: 80rem;
        border-radius: 10px;
        position: relative;
        background-image: url(${props => props.url + props.blog.hero.url});
        background-position: top;
        background-size: cover;

        img{
            border-radius: 10px;
            box-shadow: 0 0 10px rgb(0,0,0, 0.2);
        }

        span{
            position: absolute;
            left: 10px;
            top: 10px;
            background-color: purple;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: bold;
        }
    }

    .body{
        padding: 20px;
        margin: 20px 0 20px 0;
        border-radius: 10px;
        background-color: rgb(44,44,44);
        color: white;
        box-shadow: 0 0 10px rgb(0,0,0, 0.2);
        transform: translateX(-20px);
   
        h3{
            margin-bottom: 10px;
        }
        p{
            color: white;
            line-height: 1.1;
        }
        a{
            display: inline-block;
            margin: 20px 0;
            background-color: purple;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }
`
