//showing all the post
import {useState,useEffect} from 'react';
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore'
import styles from './home.module.css';
import { Link } from 'react-router-dom';

export default function Home(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const getPosts=async()=>{
            const data=await getDocs(blogCollectionRef);
            setPosts(
                data.docs.map(doc=>{
                    return {...doc.data(),id:doc.id};
                })
            )

        }

        getPosts();
    },[])
    
    const blogCollectionRef=collection(db,'blog');

    return (
        <div className={styles.posts}>
            <header>BLOG POSTS</header>
            {
                posts.map(post=>{
                    let link='/post/'+`${post.id}`;
                    return (
                       
                        <div className={styles.post} key={post.id}>
                             <Link to={link} >
                            <p>
                                <span >Title</span>: {post.title}
                            </p>
                            <div>
                                <span className={styles.mainSpan}>
                                <span>Author</span>: {post.author}
                                </span>
                                <span className={styles.mainSpan}>
                                <span>Date Published</span>: {post.date}
                                </span>
                            </div>
                            </Link>
                        </div>
                        
                        
                       
                    )
                })
            }
            

        </div>
    )
}