import BlogItem from '../BlogItem'

// Write your JS code here

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachList => (
        <BlogItem BlogDetails={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}

export default BlogList
