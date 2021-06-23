import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import {Flex, Box} from 'reflexbox'

import Featured from 'components/Featured.js'

export default function Home({blogs}) {
  console.log(blogs)

  let features = blogs.filter( blog => blog.featured === true)

  return (
    <Box variant='container' >
      <h2>Lastest blogs</h2>

      <Featured blogs={features} />

      <Flex justifyContent="center" alignItems="center" flexDirection={{ _:"row", md:"column"}} mb={100} flexWrap="wrap" >
        {blogs.map(blog => (
          <Box key={blog.id} width={{ _:"100%", md:"90%"}}>
            <Card blog={blog} />
          </Box>

        ))
        }
      </Flex>

    </Box>
  )
}

export async function getServerSideProps() {
  const {API_URL} = process.env
  const res = await fetch(`${API_URL}/blogs`)
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}
