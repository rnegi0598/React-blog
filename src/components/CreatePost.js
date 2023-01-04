//for creating a new post
import {collection,addDoc} from 'firebase/firestore';
import {useState} from 'react';
import {db} from '../firebase-config';
import styles from './createPost.module.css';
export default function CreatePost(){
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [content,setContent]=useState('');

    const blogCollectionRef=collection(db,'blog');

    const submitHandler=async (e)=>{
        e.preventDefault();
        if(title==='' || author==='' || content===''){
            console.log('fill complete details');
            return 
        }else{
            const date=`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
            await addDoc(blogCollectionRef,{title,author,content,date});
            setTitle('');
            setAuthor('');
            setContent('');
            console.log('data submitted sucessfully');
            
        }
      
        
    }

    return (
        <div>

            <form onSubmit={submitHandler} className={styles.form}>
                <label className={styles.label}>
                    <p>Blog Title </p>
                    <input type="text" onChange={e=>setTitle(e.target.value)} value={title} />
                </label>
                <label className={styles.label}>
                    <p>Blog Author </p>
                    <input type="text" onChange={e=>setAuthor(e.target.value)} value={author}/>
                </label>
                <label className={styles.label}>
                    <p>Blog Content </p>
                    <textarea  onChange={e=>setContent(e.target.value)} value={content} />
                </label>
                <button>submit</button>

            </form>
           

        </div>
    )
}