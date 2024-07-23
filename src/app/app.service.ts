import { Injectable } from '@angular/core';
import { DraggableItem } from './app.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  elements: DraggableItem[] = [
    {
      type: 'textbox',
      index: 1,
      html: '<input type="text" class="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter text here" />',
    },
    {
      type: 'image',
      index: 2,
      html: '<img src="https://via.placeholder.com/100" alt="Image" class="w-24 h-24 object-cover" />',
    },
    {
      type: 'time',
      index: 3,
      html: '<input type="time" class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />',
    },
    {
      type: 'dropdown',
      index: 4,
      options: ['Option 1', 'Option 2', 'Option 3'],
      html: '<select class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>',
    },
  ];
}
