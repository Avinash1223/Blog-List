// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails

  return (
    <li className="list-item">
      <div className="blog-items">
        <h1 className="title">{title}</h1>
        <p className="published-time">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
