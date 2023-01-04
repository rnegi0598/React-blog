//showing all the post
import {useState,useEffect} from 'react';
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore'
export default function Posts(){
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
    })
    const blogCollectionRef=collection(db,'blog');

    return (
        <div>
            <p>Posts</p>
            {
                posts.map(post=>{
                    return (
                        <div key={post.id}>
                            <h1>title: {post.title}</h1>
                            <p>author: {post.author}</p>
                            <p>data: {post.date}</p>
                            <p>content: {post.content}</p>
                        </div>
                    )
                })
            }
            

        </div>
    )
}