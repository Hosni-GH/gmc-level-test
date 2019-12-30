import React,{Component} from 'react';
import axios from 'axios'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { comments:[] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            const attachedComments=res.data.filter(el => el.postId === parseInt(params.id))       
            this.setState({
                comments: attachedComments
            })
            console.log('state :', this.state.comments)
        })
    }
    render() { 
        return ( 
            <div className='listComment'>
                {
                    this.state.comments.map(el =>{
                        return (<div className='comment' key={el.id}>
                                    <h2>{el.name}</h2>
                                    <h5>{el.body}</h5> 
                                </div>
                            )
                        })
                }
            </div>
        );
    }
}
 
export default Comments;
