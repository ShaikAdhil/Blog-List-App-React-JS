// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails
  return (
    <li className="blogitem-container">
      <div className="header-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-time">{publishedDate}</p>
      </div>
      <div>
        <p className="blog-description">{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
