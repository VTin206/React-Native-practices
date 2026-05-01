import Post from "@/app/model/Post";
import { ApiClient } from "../apiClient";

export class PostClient extends ApiClient {
    fetchPosts(): Promise<Post[]> {
        return this.axiosInstance.get<Post[]>('posts')
            .then(response => response.data);
    }
}
