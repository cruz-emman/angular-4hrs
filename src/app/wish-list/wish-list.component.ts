import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  toggleClick(item: WishItem) {
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
