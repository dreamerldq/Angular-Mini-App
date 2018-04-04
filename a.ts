export class AppCtorComponent {
    title: string = "AAAA"
    myHero: string;
    yourName:string = "llp"
    telNumber:number
    static myName:string = "lidanqiu"
    constructor(telNumber:number) {
    }
    showName(){
        console.log(AppCtorComponent.myName)
    }
  }