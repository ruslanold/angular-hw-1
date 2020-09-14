import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];

  constructor(private postService: PostService){}

  set(value:string){
    this.postService.setPost(value).subscribe(el => {
      this.posts.push(el)
    })
  }
  remove(index: number){
    this.postService.removePost(index).subscribe(el => {
      this.posts.splice(index, 1)
    })
  }
}
