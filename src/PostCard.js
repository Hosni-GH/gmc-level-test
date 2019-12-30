import React from 'react'
import {Link} from 'react-router-dom'
const PostCard = (props) => {
    const { post ={}} = props

return (
    <div className="post-card">
        <div className="post-img">
            <img src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80" alt="post-img"/>
        </div>
        <div  className="post-info">
            <div className="post-title">
                <h3>{post.title}</h3>
            </div>
            <div className="post-body">
                <p>{post.body}</p>
            </div>
            <Link to ={`/comments/${post.id}`}>
                <div className="btn-post">
                    <span>Comments</span>
                </div>
            </Link>
        </div>
    </div>
)
}
export default PostCard