import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string ='IronMan';
  public age: number=45;

  get CapitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Spider-Man'
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.name='IronMan';
    this.age=45;
  }

}
