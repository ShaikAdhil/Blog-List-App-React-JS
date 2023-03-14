// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="bloglist-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} listDetails={eachItem} />
      ))}
    </div>
  )
}

export default BlogList
