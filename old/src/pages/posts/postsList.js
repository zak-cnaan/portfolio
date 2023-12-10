const PostsList = ({ posts }) => {

    return (
        <>
        <h1>Posts</h1>
      <ul>
        {posts.map((i) => (
          <li key={i.id}>
            <h2>{i.title}</h2>
            <div>{i.body}</div>
          </li>
        ))}
      </ul>
</>
    )
}

export default PostsList;