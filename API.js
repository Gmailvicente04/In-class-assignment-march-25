const Base_URL = 'https://jsonplaceholder.typicode.com/posts';
export async function getPosts() {
try{
const response = await fetch(Base_URL);
if (!response.ok) {
    throw new Error('Error: ${response.status}');
}

return await response.json();

} catch (error) {
    console.error('API Fetch Failed:', error.message);
throw error;
    }
}
