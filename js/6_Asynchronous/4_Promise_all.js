// 4. Promise.all

function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'John' }), 1000));
}

function fetchUserPosts(userId) {
    return new Promise(resolve => setTimeout(() => resolve(['Post 1', 'Post 2']), 1500));
}

async function fetchUserAndPosts() {
    const [user, posts] = await Promise.all([fetchUser(), fetchUserPosts(1)]);
    console.log('User:', user);
    console.log('Posts:', posts);
}

fetchUserAndPosts();
