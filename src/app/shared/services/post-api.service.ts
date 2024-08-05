import { Injectable } from '@angular/core';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  posts: Post[]= [
    new Post(0, "Post1", "Test"),
    new Post(1, "Post2", "Description"),
    new Post(2, "Post3", "Main")
  ]
  constructor() { }


  getPosts(): Post[]{
    return this.posts;
  }


  filterPosts(title: string): Post[]{
    return this.posts.filter(x=> x.title === title)
  }
}
