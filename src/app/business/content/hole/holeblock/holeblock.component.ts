import { Component } from '@angular/core';

@Component({
  selector: 'hole-block',
  templateUrl: './holeblock.component.html',
  styleUrls: ['./holeblock.component.css'],
  inputs: ['hole']
})

export class HoleBlock {
  hole;
}
