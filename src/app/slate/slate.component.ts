import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { DraggableItem } from '../app.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-slate',
  templateUrl: './slate.component.html',
  styleUrls: ['./slate.component.css'],
})
export class SlateComponent {
  droppedItems: DraggableItem[] = [];

  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer
  ) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('item');
    if (data) {
      const item = JSON.parse(data);

      item.html = this.sanitizer.bypassSecurityTrustHtml(item.html);

      console.log(event);
      

      item.x = event.clientX - 20;
      item.y = event.clientY - 20;
      this.droppedItems.push(item);
    }
  }
}
