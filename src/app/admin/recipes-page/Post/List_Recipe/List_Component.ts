import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { PostService } from '../post.service';
import { Post } from "../post.model";

@Component({
  selector: 'app-list',
  templateUrl: './List_Component.html',
  styleUrls: ['./List_Component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService) {
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.applyFilter(''); // Apply filter initially to show all posts
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  applyFilter(filterValue: string) {
    // Convert filterValue to lowercase for case-insensitive filtering
    const lowerCaseFilter = filterValue.toLowerCase().trim();

    // Filter the posts based on the filterValue
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(lowerCaseFilter) ||
      post.content.toLowerCase().includes(lowerCaseFilter)
    );
  }
}
