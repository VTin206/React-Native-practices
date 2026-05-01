import { PostClient } from '@/networking/post/PostClient';
import { Container } from 'inversify';

const container = new Container();
container.bind<PostClient>('PostClient').toConstantValue(new PostClient());

export default container;