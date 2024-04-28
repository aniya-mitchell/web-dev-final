
import { supabase } from '/Users/niya/web-dev-final/we-dev/client.jsx'
import React from 'react'
import { useState } from 'react'

function Create() {
    const [post, setPost] = useState({
        title: '',
        description: '',
        imageLink: ''
    });

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.from('post').insert([
                {
                    title: post.title,
                    description: post.description,
                    imageLink: post.imageLink
                }
            ]);
            if (error) {
                console.error(error);
            } else {
                console.log('New post added to database!');
                window.location = '/feed';
                const filteredPosts = data.filter((post) => post.title === post.title);
                console.log(filteredPosts);
                
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='App'>
            <h1 style={{ margin: '.5em' }}>Create a Post</h1>
            <div className='largeCardContainer' style={{ height: 'fit-content' }}>
                <form onSubmit={createPost}>
                    <label htmlFor='title'>
                        <h2>Title</h2>
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        autoComplete='off'
                        value={post.title}
                        onChange={onChange}
                        required />
                    <br />
                    <br />

                    <label htmlFor='description'>
                        <h2>Description</h2>
                    </label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        autoComplete='off'
                        value={post.description}
                        onChange={onChange} required />
                    <br />
                    <br />

                    <label htmlFor='imageLink'>
                        <h2>Image Link</h2>
                    </label>
                    <input
                        type='text'
                        id='imageLink'
                        name='imageLink'
                        autoComplete='off'
                        value={post.imageLink}
                        onChange={onChange} />
                    <br />
                    <br />

                    <button type='submit'>Add Post to Feed</button>
                </form>
            </div>
        </div>
    );
}
export default Create;