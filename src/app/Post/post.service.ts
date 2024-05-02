import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  nextId: number = 1
  constructor(private http: HttpClient) {
    this.getPosts();
  }
  private postUpDate = new Subject<Post[]>()
  getPosts(){
    this.http.get<{message: string, posts:Post[]}>('http://localhost:3000/api/posts').subscribe((postData)=>{
      this.posts = postData.posts;
      this.postUpDate.next([...this.posts]);
    });
  }

  getPostUpdateListener(){
  return this.postUpDate.asObservable();
  }

  addPost(content: string, title: string){
    const post: Post ={id: this.nextId++, content: content, title: title};
    this.http.post<{message:String}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.posts.push(post);
      this.postUpDate.next([...this.posts]);
    })
  }
}

