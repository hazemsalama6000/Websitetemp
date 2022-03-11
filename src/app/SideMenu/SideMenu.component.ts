import { Component, Input, OnInit } from "@angular/core";
import { Config, Menu } from "../Models/AccordionModels";
import { ISource } from "../Models/NewsSources";
import { SideMenuService } from "../Services/SideMenu.service";

@Component({
    selector:'SideMenu-C',
    template:`
        <ul id="accordion" class="accordion" >
	<li *ngFor="let menu of menus; let i = index" 
	  [class.active]="menu.active">
	  <div class="menu" (click)="toggle(i)">
		<i [class]="menu.iconClass"></i>
		{{ menu.name }}
		<i class="fa fa-chevron-down"></i>
	  </div>
	  <ul class="submenu" #submenu 
		[style.height.px]="menu.active ? submenu.scrollHeight : 0">
		<li *ngFor="let submenu of menu.submenu">
		  <a [href]="submenu.url">{{ submenu.name }}</a>
		</li>
	  </ul>
	</li>
  </ul>
    `,
    styles:[`
    .accordion {
	width: 100%;
	max-width: 360px;
	margin: auto;
	background: #fff;
	border-radius: 4px;
  }
  
  .accordion .menu {
	position: relative;
	padding: 15px 15px 15px 45px;
	color: #4d4d4d;
	font-weight: bold;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
	transition: all 0.4s ease;
  }
  
  .accordion li:last-child .menu {
	border-bottom: 0;
  }
  
  .accordion li i {
	position: absolute;
	top: 1.2rem;
	left: 1rem;
	color: #595959;
	transition: all 0.4s ease;
  }
  
  .accordion li i.fa-chevron-down {
	right: 1rem;
	left: auto;
  }
  
  .accordion li.active i.fa-chevron-down {
	transform: rotate(180deg);
  }
  
  .accordion li.active .menu {
	color: #b63b4d;
  }
  
  .accordion li.active i {
	color: #b63b4d;
  }
  
  /* Show submenu */
  .accordion li.active .submenu {
	/*
	  height: 0 -> height: auto;는 transition이 동작하지 않는다.
	  max-height: 임의의 높이;를 지정하면 transition이 동작하지만 타이밍이 망가진다.
	  max-height: 1000px;과 max-height: 133px;을 비교해 보라!
	  height를 1000px으로 transition할 시간에 실제로는 133px정도만 transition하므로 여는 시간이 닫는 시간보다 빠르다.
	*/
	/* max-height: 1000px; */
	/* max-height: 133px; */
  }
  
  .submenu {
	height: 0;
	overflow: hidden;
	background: #444359;
	font-size: 14px;
	transition: height 0.4s ease;
  }
  
  .submenu li {
	border-bottom: 1px solid #4b4a5e;
  }
  
  .accordion li:last-child .submenu {
	border-radius: 0 0 4px 4px;
  }
  
  .accordion li:last-child .submenu li:last-child {
	border-bottom: 0;
  }
  
  .submenu a {
	display: block;
	text-decoration: none;
	color: #d9d9d9;
	padding: 12px;
	padding-left: 42px;
	transition: all 0.25s ease-in-out;
  }
  
  .submenu a:hover {
	background: #b63b4d;
	color: #fff;
  }
  
ul {
	list-style-type: none;
  }
    `]
})

export class SideMenuComponent implements OnInit{

    NewsSources:ISource[]=[]

	@Input() options:any;
	@Input() menus: Menu[];
	config: Config;

    constructor(private sideMenuService:SideMenuService){}

	ngOnInit() {
	  this.config = this.mergeConfig(this.options);
      this.sideMenuService.getMenuItems().subscribe(
        (data:any)=>{
         this.NewsSources=data['sources'];
                    }
    );
	}
  
	mergeConfig(options: Config) {
	  // 기본 옵션
	  const config = {
		// selector: '#accordion',
		multi: true
	  };
  
	  return { ...config, ...options };
	}
  
	toggle(index: number) {
	  // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
	  if (!this.config.multi) {
		this.menus.filter(
		  (menu, i) => i !== index && menu.active
		).forEach(menu => menu.active = !menu.active);
	  }
  
	  // Menu의 active를 반전
	  this.menus[index].active = !this.menus[index].active;
	}

}
