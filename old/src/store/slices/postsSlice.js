import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    //   {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // },
    // {
    //   "userId": 1,
    //   "id": 2,
    //   "title": "qui est esse",
    //   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    // },
    // {
    //   "userId": 1,
    //   "id": 3,
    //   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //   "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    // },
  ],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addItemToCart(state, action){
    //   const item = action.payload;
    //   state.items.push(item);
    // },
    // removeItemFromCart(state, action){
    //    const itemId = (action.payload);
    //    state.items = state.items.filter(item => item.id !== itemId)
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // .addCase(addNewPost.fulfilled, (state, action) => {
    //   state.posts.push(action.payload);
    // });
  },
});

export default postsSlice;
export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
