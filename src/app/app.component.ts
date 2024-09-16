import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgTemplateOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('To Learn Angular'),
    // new WishItem('Get Coffee', true),
    // new WishItem("Find grass that cuts itself")
  ];

  newWishText = ""
  title = 'wishlist';

  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }
  
  toggleClick(item:WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
