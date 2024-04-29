import {Component, OnInit, OnDestroy} from "@angular/core";
import { Subscription } from "rxjs";
import {PostService} from '../post.service';
import {Post} from "../post.model";

@Component({
  selector: 'app-list',
  templateUrl: './List_Component.html',
  styleUrls: ['./List_Component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[]=[]; // do not need Input anymore
  private postsSub: Subscription;

  constructor(public postsService: PostService) {
    this.ngOnInit();
  }

  ngOnInit() {//change to handle the http request for our data
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
    this.posts = posts;
    });
  }

  ngOnDestroy() {
      // Unsubscribe from the posts subscription to prevent memory leaks
        this.postsSub.unsubscribe();
      }
}

