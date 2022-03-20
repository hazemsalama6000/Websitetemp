import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Config, Menu } from "../../Models/AccordionModels";
import { ISource } from "../../Models/NewsSources";
import { NewsSourceService } from "../../Services/NewsSource.service";

@Component({
	selector: 'SideMenu-C',
	templateUrl: './SideMenu.component.html',
	styleUrls: ['./SideMenu.component.scss']
})

export class SideMenuComponent implements OnInit {

	NewsSources: ISource[] = []

	options: Config = { multi: false };

	menus: Menu[] = [
		// { 
		//   name: 'Front-end',
		//   iconClass: 'fa fa-code',
		//   active: true,
		//   submenu: [
		// 	{ name: 'HTML', url: '#' },
		// 	{ name: 'CSS', url: '#' },
		// 	{ name: 'Javascript', url: '#' }
		//   ]
		// },
		// { 
		//   name: 'Responsive web',
		//   iconClass: 'fa fa-mobile',
		//   active: false,
		//   submenu: [
		// 	{ name: 'Tablets', url: '#' },
		// 	{ name: 'Mobiles', url: '#' },
		// 	{ name: 'Desktop', url: '#' }
		//   ]
		// },
		// { 
		//   name: 'Web Browser',
		//   iconClass: 'fa fa-globe',
		//   active: false,
		//   submenu: [
		// 	{ name: 'Chrome', url: '#' },
		// 	{ name: 'Firefox', url: '#' },
		// 	{ name: 'Desktop', url: '#' }
		//   ]
		// }
	];

	config: Config;

	constructor(private NewsSourceService: NewsSourceService) { }

	ngOnInit() {
		this.config = this.mergeConfig(this.options);

		this.NewsSourceService.getMenuItems().subscribe(
			(data: any) => {
				this.NewsSources = data['sources'];
				let MenuObject: Menu = { name: 'Sources', active: true, iconClass: '', submenu: [] };
				MenuObject.submenu = this.NewsSources.map(s => ({id:s.id, Icon: s.url, name: s.name, url: s.url }));
				this.menus.push(MenuObject);
			}
		);
	}

	mergeConfig(options: Config) {
		const config = {
			// selector: '#accordion',
			multi: true
		};

		return { ...config, ...options };
	}

	toggle(index: number) {

		if (!this.config.multi) {
			this.menus.filter(
				(menu, i) => i !== index && menu.active
			).forEach(menu => menu.active = !menu.active);
		}

		this.menus[index].active = !this.menus[index].active;
	}

}
