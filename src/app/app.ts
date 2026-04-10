import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentPage = 0;

  images = [
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/id/157579910/photo/the-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=knG0gBV2spG4MOW0I6IY-gRV0aBKKeyyOmVSSeZixGo='
    },
    {
      title: 'Mountains',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww'
    },
    {
      title: 'bikes',
      url: 'https://plus.unsplash.com/premium_photo-1683442814148-78aa260ac18e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'motor bike',
      url: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fHww'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'couple',
      url: 'https://plus.unsplash.com/premium_photo-1661378610864-725c61553a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291cGxlfGVufDB8fDB8fHww'
    },



  ]

  // onWindowChange(index: number) {
  //   const windowSize = 3
  //   let start = this.currentPage - Math.floor(windowSize / 2)
  //   let end = this.currentPage + Math.floor(windowSize / 2)

  //   if (start < 0) {
  //     start = 0;
  //     end = windowSize - 1;
  //   }

  //   // 🔒 Shift window when near end
  //   if (end >= this.images.length) {
  //     end = this.images.length - 1;
  //     start = end - (windowSize - 1);
  //   }

  //   return Math.abs(this.currentPage - index) < windowSize
  // }


  get visibleIndexes(): number[] {
  const windowSize = 3;

  const total = this.images.length;

  if (total <= windowSize) {
    return Array.from({ length: total }, (_, i) => i);
  }

  let start = this.currentPage - Math.floor(windowSize / 2);
  let end = this.currentPage + Math.floor(windowSize / 2);

  // adjust if near start
  if (start < 0) {
    start = 0;
    end = windowSize - 1;
  }

  // adjust if near end
  if (end >= total) {
    end = total - 1;
    start = end - (windowSize - 1);
  }

  return Array.from({ length: total }, (_, i) => i)
    .slice(start, end + 1);
}


}
