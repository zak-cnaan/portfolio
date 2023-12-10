import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../store/slices/postsSlice";

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch, posts]);

  return [posts, postStatus, error];
};

export default usePosts;
