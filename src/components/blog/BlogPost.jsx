import Comments from './Comments';
import Content from './Content';

function BlogPost() {
    const postContent = {
        title: 'Spiderman Stops Bank Heist',
        content: 'Spiderman swung into action today to thwart a daring bank robbery...',
        author: 'Daily Bugle',
        date: '2026-03-17'
    };
    return <div className='bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto'>
        <Content
            title={postContent.title}
            content={postContent.content}
            author={postContent.author}
            date={postContent.date}
        />
        <Comments />
    </div>
}

export default BlogPost;