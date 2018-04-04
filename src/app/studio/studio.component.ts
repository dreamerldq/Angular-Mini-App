import { Component, OnInit } from '@angular/core';
import { StudioService } from '../studio.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  constructor(private studioService:StudioService) { }
studioList:any = []
  ngOnInit() {
    this.getStudio()
  }
getStudio(){
  this.studioService.getStudios().subscribe((value)=>{
    console.log("这是返回的服务器数据",value)
    this.studioList = value
  }
 )
}
}
