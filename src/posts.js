import React, { Component } from 'react';
import axios from 'axios';
import PostCard from './PostCard'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
      }

    componentDidMount(){
        
        const { match: { params } } = this.props;
        console.log('params:: ' + this.props.params)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log('res: ',res)
            const userPosts=res.data.filter(el => el.userId === parseInt(params.id))
            this.setState({
                posts:userPosts
            })
        })
        .catch(err =>{
            console.log("oups! something went wrong!")
        })
     }
    render() { 
        return ( 
            <div className="posts-list">
                {
                    this.state.posts.map((el) => {
                        return(
                            <PostCard key={el.id} post={el}/>
                        )
                    })
                }
            </div>
         );
    }
}
export default Posts;                                                                                                                                                                                                         