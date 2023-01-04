//showing all the post
import {useState,useEffect} from 'react';
import {db} from '../firebase-config';
import {collection, getDoc,doc} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import styles from './post.module.css';

export default function Posts(){
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [content,setContent]=useState('');
    const [date,setDate]=useState('');

    const {id}=useParams();
    useEffect(()=>{
        const getPost=async()=>{

            const postRef=doc(db,'blog',id);
            const docSnap=await getDoc(postRef);
            const postData=docSnap.data();
            setAuthor(postData.author); 
            setTitle(postData.title);
            setContent(postData.content);
            setDate(postData.date);         
        }

        getPost();

    },[]);

    return (
        <div>
            
        <div className={styles.post} >
            <h1>{title}</h1>
            <p className={styles.postDetail}>
                <span><span style={{textDecoration:'underline'}}>Author:</span> {author}</span>
                <span><span style={{textDecoration:'underline'}}>Published on</span> {date}</span>
            </p>
            <p className={styles.content}>{content}</p>
         </div>
            
            

        </div>
    )
}