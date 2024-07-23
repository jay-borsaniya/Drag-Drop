import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { DraggableItem } from '../app.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  elements: DraggableItem[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.elements = this.appService.elements;
  }

  onDragStart(event: DragEvent, item: DraggableItem) {
    event.dataTransfer?.setData('item', JSON.stringify(item));
  }
}
