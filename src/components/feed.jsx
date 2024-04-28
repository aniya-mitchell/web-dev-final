import { supabase } from '/Users/niya/web-dev-final/we-dev/client.jsx'
import React, { useEffect, useState } from 'react';
import PostCard from './postcard';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('created_at'); // Default sort by created_at

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
                .from('post')
                .select('*')
                .order(sortBy, { ascending: false });

            if (error) {
                throw error;
            }

            setPosts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        }
    };

    const handleSortBy = (sortBy) => {
        setSortBy(sortBy);
        fetchPosts();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform search logic here
        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPosts(filteredPosts);
    };

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='App'>
            <h1 style={{ margin: '.1em' }}>Feed</h1>
            {loading && <h3>Loading...</h3>}
            <div>
                <button onClick={() => handleSortBy('created_at')}>Sort by latest</button>
                <button onClick={() => handleSortBy('upvotes')}>
                    Sort by Most Popular (upvotes)
                </button>
            </div>
            <form onSubmit={handleSearch} autoComplete='off'>
                <input
                    type='text'
                    placeholder='Search by title'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ border: 'none' }}
                />
                <button type='submit'>Search</button>
            </form>
            {posts && posts.length > 0 ? (
                <div className='post-feed-container'>
                    {posts.map((post) => (
                        <PostCard
                            title={post.title}
                            description={post.description}
                            imageLink={post.imageLink}
                            upvote={post.upvotes}
                            created={post.created_at}
                            key={post.id}
                            id={post.id}
                        />
                    ))}
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}

export default Feed;
