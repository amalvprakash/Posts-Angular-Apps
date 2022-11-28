import { Component } from '@angular/core';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
   userId = ""
   id = ""
   name = ""
   body = ""

   addPosts = () => {
    let data:any = {
      "userId":this.userId,
      "id":this.id,
      "name":this.name,
      "body":this.body

    }
    console.log(data)
  }
}
