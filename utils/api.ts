export const getPostsByCategory = async (categoryName: any) => {
  try {
    const response = await fetch(`/api/getPosts/${categoryName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
};
