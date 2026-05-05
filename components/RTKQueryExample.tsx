import { ScrollView, Text, View } from "react-native"
import { useGetPostsQuery } from "./slices/apiSlice"

type Post = {
    id: number
    title: string
    body: string
}

type PostItemProps = {
    post: Post
}

let PostItem = ({ post }: PostItemProps) => {
    return(
        <View style={{backgroundColor: 'green', borderRadius: 5, margin: 10, padding: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{post.title}</Text>
            <View style={{height:10}}/>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{post.body}</Text>
        </View>
    )
}

export const RTKQueryExample = () => {
    const {
        data: post = [],
        isLoading,
        isSuccess,
        isError,
    } = useGetPostsQuery()
    let content
    if(isLoading) {
        content = <View><Text style={{alignContent: 'center'}}>Content Is Loading....</Text></View>
    } else if(isSuccess) {
        content = <ScrollView>
            {post.map((p) => 
                <PostItem key={p.id} post={p}/>
            )}
        </ScrollView>
    } else if(isError) {
        content = <View><Text style={{alignContent: 'center'}}>Something error...</Text></View>
    }
    return content
}
