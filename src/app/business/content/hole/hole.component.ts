import { Component, OnInit } from '@angular/core';

import { HoleService } from './hole.service';
import { HoleModel, HoleHttpModel } from './hole.interface';

@Component({
  selector: 'content-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.css'],
  providers: [HoleService]
})

export default class ContentHole implements OnInit {
  public total: number;
  public holes: HoleModel;

  constructor(private holeService: HoleService) {}

  ngOnInit() {
    this.holeService.getHoles(0).then((holeObj: HoleHttpModel) => {
      this.total = holeObj.total;
      this.holes = holeObj.holes;
    });
  }

}
