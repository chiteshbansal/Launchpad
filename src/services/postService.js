// services/postService.js
const API_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }
};
