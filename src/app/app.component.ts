import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  liked;

  tweet = {
    name: 'Unknown Profile',
    imageURL: "https://www.pngitem.com/pimgs/m/79-791921_male-profile-round-circle-users-profile-round-icon.png",
    comments: 3,
    retweetCount: 9,
    likesCount: 4
  }

  onLiked(likesEarned: number){
    this.liked = likesEarned;
    // console.log(likesEarned);
  }
  
}
