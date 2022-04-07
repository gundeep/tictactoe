import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booard',
  templateUrl: './booard.component.html',
  styleUrls: ['./booard.component.scss']
})
export class BooardComponent implements OnInit {
  squares: any[];
  XIsNext: boolean;
  winner: string | null;

  constructor() { 
  }

  ngOnInit(){
    this.newGame();
  }

  newGame() { 
    this.squares = Array(9).fill(null);
    this.winner = null ;
    this.XIsNext = true;
  }

  get player()
  {
    return this.XIsNext ? 'X' : '0';
  }

  makemove(idx: number)
  {
    if (!this.squares[idx])
    {
      this.squares.splice(idx, 1, this.player);
      this.XIsNext = !this.XIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner()
  {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
