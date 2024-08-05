import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../../shared/services/post-api.service';
import { Post } from '../../shared/classes/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  filter: string = "";

  constructor(private postApiService: PostApiService){
    this.posts = this.postApiService.getPosts()
  }

  ngOnInit(): void {
    
  }

  onFilter(){
    this.posts = this.postApiService.filterPosts(this.filter);
  }
}
