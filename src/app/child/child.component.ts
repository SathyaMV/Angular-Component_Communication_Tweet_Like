import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output() cout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    if (this.isActive){
      this.likesCount--;
    }else{
      this.likesCount++;
    }
    this.isActive = !this.isActive;
    // console.log(this.likesCount);
    const likes = this.likesCount;
    this.cout.emit(likes);
    // console.log(likes);
  }

  
}
