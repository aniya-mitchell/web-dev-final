
import './Comment.css'
import { supabase } from '../supabaseClient';

const Comment = (props) => {
    const deleteComment = async(event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('Comments')
            .delete()
            .eq('id', props.id);

        if (error) console.log(error);
    }

    return (
        <>
        <div className='Comment' id={props.id}>
            <p>{props.text}</p>
            <img className='deleteBtn' src={trash_icon} alt="delete button" onClick={deleteComment}></img>
        </div>
        </>
    );
}

export default Comment;
