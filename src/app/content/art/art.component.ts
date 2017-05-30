import { Component, Injectable, OnInit } from '@angular/core';
import { ArtService } from './art.service';
import { ArtModel } from './art.interface';

@Component({
  selector: 'content-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  providers: [ArtService]
})

@Injectable()
export class AppContentArt implements OnInit {
  public category: ArtModel[];
  
  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.artService.getArtCategory().then(category => this.category = category);
  }

}
