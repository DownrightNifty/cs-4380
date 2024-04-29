import { Component, EventEmitter, Output } from "@angular/core";
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {NgForm} from "@angular/forms"

@Component({
  selector:'app-post',
  templateUrl: './Post_Component.html',
  styleUrls: ['./Post_Component.css']
})
export class PostComponent {
  enteredValue = 'Write your post here';
  num: number = 0;

  @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostService){}
  onAddPost(form: NgForm){
      if(form.invalid){
        return;
      }
      this.postsService.addPost(/*form.value.id,*/ form.value.content, form.value.title);
      form.resetForm();
    }

}
