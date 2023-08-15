import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal_website';
  download(){
    var pdfUrl='assets/Youssef Mohammed.pdf';
    window.open(pdfUrl,'_blank');
  }
}
