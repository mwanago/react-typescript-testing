export async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
}
