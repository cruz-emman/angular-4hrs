import { Component, Output, EventEmitter,  } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = ""
  addNewWish() {
    //this.items.push(new WishItem(this.newWishText))
    //this.addNewWish.emit(new WishItem(this.newWishText))
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ''
  }

}
