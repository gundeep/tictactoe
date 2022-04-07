import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booard',
  templateUrl: './booard.component.html',
  styleUrls: ['./booard.component.scss']
})
export class BooardComponent implements OnInit {
  squares: any[];
  XIsNext: boolean;
  winner: string;

  constructor() { 
    this.squares = Array(9).fill(null);
    this.winner = "none";
    this.XIsNext = true;
  }

  newGame() { 
    this.squares = Array(9).fill(null);
    this.winner = "none";
    this.XIsNext = true;
  }

  get player()
  {
    return this.XIsNext ? 'X' : '0'
  }

  ngOnInit(): void {
    this.newGame();
  }

}
