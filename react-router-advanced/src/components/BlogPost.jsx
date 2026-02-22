import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Post</h2>
      <p>Viewing blog post with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default BlogPost;
