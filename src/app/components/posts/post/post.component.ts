import { Component, Input } from '@angular/core';
import { Post } from '../../../shared/classes/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post! : Post;

  
}
