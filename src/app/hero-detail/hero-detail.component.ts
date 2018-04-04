import { Component, OnInit,Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero //声明一个输入属性 相当于vue、react中的props，用来绑定父组件的数据
  constructor(
    private route: ActivatedRoute, //保存路由信息，可以获取路由中的参数
    private heroService: HeroService,//从远程服务器获取数据
    private location: Location// 这也是一个服务，angular用它来和浏览器打交道
  ) { }

  ngOnInit() {
    this.getHero()
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
