import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({ //使用@component装饰器，指定后面紧跟的Class是一个组件
  selector: 'app-heroes',//声明选择器的名称，在其他视图模板中使用<app-heroes>表明要在这里生成一个组件实例视图</app-heroes>
  templateUrl: './heroes.component.html',//引入视图模板，也可以直接用template在此文件下写html，类似vue-template
  styleUrls: ['./heroes.component.css']//引入CSS
})
export class HeroesComponent implements OnInit {
  heroes:Hero[]
  constructor(
    private heroService: HeroService,//从远程服务器获取数据
  ) { }

  ngOnInit() {//angular生命周期函数
    this.heroService.getHeroes()
    .subscribe((value)=> this.heroes = value)
    this.heroService.getNews()
    .subscribe((value)=>{console.log("这是返回的数据",value)})
  }

}
