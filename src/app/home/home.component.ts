import { Component, OnInit } from '@angular/core';
import { SomaService } from '../soma.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = 'Waiting for server response!';

  constructor(private soma: SomaService) { }

  ngOnInit(): void {
    this.soma.getWelcomeMessage().subscribe(
      (msg: string) => {
        this.message = msg;
      },
      err => {
        console.log(err);
      }
    );
  }

}
