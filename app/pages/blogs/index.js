import fetch from 'isomorphic-unfetch';
import {Flex, Box} from 'reflexbox'
import {useRouter} from 'next/router'

export default function index({blogs, page, NumberOfBlogs}) {
    const router = useRouter();

    const lastPage = Math.ceil(NumberOfBlogs / 3);

    return (
        <Box variant="container" pt={40}>
            <ul>
                {
                    blogs.map(blog => (
                        <li keys={blog.id}>
                            <h3>{blog.title}</h3>
                        </li>
                    ))
                }
            </ul>
            <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
                <button onClick={() => router.push(`/blogs?page=${page - 1}`)} disabled={page <= 1}>Previous</button>
                <button onClick={() => router.push(`/blogs?page=${page + 1}`)} disabled={page >= lastPage}>Next</button>
            </Flex>

        </Box>
    )
}

export async function getServerSideProps({query: {page = 1}}) {
    const {API_URL} = process.env

    const start = +page === 1 ? 0 : (+page - 1) * 3

    const NumberOfBlogsResponse = await fetch(`${API_URL}/blogs/count`);
    const NumberOfBlogs = await NumberOfBlogsResponse.json();

    const res = await fetch(`${API_URL}/blogs?_limit=3&_start=${start}`)
    const data = await res.json()
  
    return {
      props: {
        blogs: data,
        page: +page,
        NumberOfBlogs
      }
    }
  }
