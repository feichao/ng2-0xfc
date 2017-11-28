import { Component, OnInit } from '@angular/core';

import { HoleService } from './hole.service';
import { HoleModel, HoleHttpModel } from './hole.interface';

@Component({
  selector: 'content-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.css'],
  providers: [HoleService],
  outputs: ['goPre', 'goNext']
})

export class ContentHole implements OnInit {
  total: number;
  holes: HoleModel[];
  isLoading: boolean;

  index:number = 0;

  constructor(private holeService: HoleService) {}

  ngOnInit() {
    this.getHoles();
  }

  goPre() {
    if(this.index <= 0) {
      return;
    }
    this.index--;
    this.getHoles();
  }

  goNext() {
    if(this.index >= this.total - 1) {
      return;
    }
    this.index++;
    this.getHoles();
  }

  getHoles() {
    this.isLoading = true;
    this.holeService.getHoles(this.index).then((holeObj: HoleHttpModel) => {
      this.total = Math.ceil(holeObj.total / 15);
      this.holes = holeObj.holes;
      this.isLoading = false;
    });
  }

}
