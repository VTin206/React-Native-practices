import Post from "@/app/model/Post";
import container from "@/dependencies/dependency";
import { PostClient } from "@/networking/post/PostClient";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const initPosts: Post[] = [];
export const UseEffectExample = () => {
    const postApi = container.get<PostClient>('PostClient');
    useEffect(() => {
        postApi.fetchPosts()
            .then((posts) => {
                setPosts(posts);
            })
    }, [])
    const [posts, setPosts] = useState(initPosts);
    return (
        <View> 
            {posts.map((props, key) => {
                return (
                    <Text>{props.title}</Text>
                )
            })}
        </View>
    );
}
