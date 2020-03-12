import React from 'react'
import { Link } from 'gatsby'
import { Post, StyledImg, Title, Date, ReadingTime, Excerpt } from './styled'
const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      HELLO
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Date>{publishDate}</Date>
            <ReadingTime>
              {body.childMarkdownRemark.timeToRead} min read
            </ReadingTime>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
