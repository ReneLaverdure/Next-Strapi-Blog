import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import FeaturedCard from 'components/FeaturedCard.js'
import Link from 'next/link'
export default function Featured({blogs}) {

    return (
        <FeaturedStyle>
           
            <FeaturedCard blog={blogs[0]} col="1 / 7" />
            <FeaturedCard blog={blogs[1]} col="7 / end" />
            <FeaturedCard blog={blogs[2]} col="1 / 5" />
            <FeaturedCard blog={blogs[3]} col="5 / end" />
            <FeaturedCard blog={blogs[4]} col="1 / 6" />
            <FeaturedCard blog={blogs[5]} col="6 / end" />
        </FeaturedStyle>
    )
}

const FeaturedStyle = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(9, 1fr);
`