import PostsList from "./postsList";

import WithStatus from "../../helper/WithStatus";
import usePosts from "../../helper/usePosts";

const PostsWithStatus = WithStatus(PostsList);

const PostsPage = () => {
  const [posts, postStatus, error] = usePosts();

  return (
    <div className="container section-padder">
      <PostsWithStatus data={posts} status={postStatus} error={error} />
    </div>
  );
};

export default PostsPage;
