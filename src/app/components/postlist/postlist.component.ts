import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../domain/ipost';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
data: Ipost[];
  constructor(private _service: PostService) { }

  ngOnInit() {
    this._service.getPost().subscribe(p => this.data = p);
  }

}
