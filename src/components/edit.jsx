import { supabase } from '/Users/niya/web-dev-final/we-dev/client.jsx'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Edit() {
  const [post, setPost] = useState({});
  const { id } = useParams();



  const onChange = (e) => {
     setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    await supabase
    .from('post')
    .update({ title: post.title,  description: post.description, imageLink: post.imageLink})
    .eq('id', id);

  window.location = "/";
  };
  <input type="submit" value="Submit" onClick={updatePost}/>


  const deletePost = async () => {
    await supabase
    .from('post')
    .delete()
    .eq('id', id); 

  window.location = "http://localhost:3000/";
  <button className="deleteButton" onClick={deletePost}>Delete</button>


  return (
    <div className='App'>
      <h1>Edit Post</h1>
      <div className='largeCardContainer' style={{ height: 'fit-content' }}>
        <form onSubmit={updatePost}>
          <label htmlFor="title"><h3>Title</h3></label>
          <input type="text" id="title" name="title" value={post.title || ''} onChange={onChange} required /><br />
          <br />

          <label htmlFor="description"><h3>Description</h3></label>
          <textarea type="text" id="description" name="description" value={post.description || ''} onChange={onChange} required /><br />
          <br />

          <label htmlFor="imageLink"><h3>Image Link</h3></label>
          <input type="text" id="imageLink" name="imageLink" value={post.imageLink || ''} onChange={onChange} /><br />
          <br />

          <button type="submit">Update Post</button>
          <button onClick={deletePost}>Delete Post</button>
        </form>
      </div>
    </div>
  );
}


  
  return (
    <div className='App'>
        <h1>Edit Post</h1>
        <div className='largeCardContainer' style={{ height: 'fit-content' }}>
            <form onSubmit={updatePost} >
                <label htmlFor="title"><h3>Title</h3></label>
                <input type="text" id="title" name="title" value={post.title || ''} onChange={onChange} required /><br />
                <br />

                <label htmlFor="description"><h3>Description</h3></label>
                <textarea type="text" id="description" name="description" value={post.description || ''} onChange={onChange} required /><br />
                <br />

                <label htmlFor="imageLink"><h3>Image Link</h3></label>
                <input type="text" id="imageLink" name="imageLink" value={post.imageLink || ''} onChange={onChange} /><br />
                <br />

                <button type="submit">Update Post</button>
            </form>
        </div>
    </div>
)
}
export default Edit;