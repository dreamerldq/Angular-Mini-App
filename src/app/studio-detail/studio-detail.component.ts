import { Component, OnInit } from '@angular/core';
import { StudioService } from '../studio.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.css']
})
export class StudioDetailComponent implements OnInit {
  studio
  constructor(
    private studioService:StudioService,
    private route: ActivatedRoute, //保存路由信息，可以获取路由中的参数
    private location: Location// 这也是一个服务，angular用它来和浏览器打交道
  ) { }

  ngOnInit() {
    this.getDetail()
  }
  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studioService.getStudio(id)
      .subscribe(hero => {
        console.log("这是返回的详情值",hero)
        this.studio = hero
      });
  }
  updateDetail():void{
    console.log(this.studio)
     const id = +this.route.snapshot.paramMap.get('id');
     this.studioService.updateStudios(id,this.studio)
     .subscribe(()=>this.location.back())
  }
  showInfo(studio){
    console.log("这是工作室名称",studio)
  }
}
