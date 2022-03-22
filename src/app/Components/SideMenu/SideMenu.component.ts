import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Config, Menu } from "../../Models/AccordionModels";
import { ISource } from "../../Models/NewsSources";
import { NewsSourceService } from "../../Services/NewsSource.service";
import { MultilevelMenuService, ExpandCollapseStatusEnum, MultilevelNodes } from 'ng-material-multilevel-menu';
import { AnyCatcher } from "rxjs/internal/AnyCatcher";

@Component({
	selector: 'SideMenu-C',
	templateUrl: './SideMenu.component.html',
	styleUrls: ['./SideMenu.component.scss']
})

export class SideMenuComponent implements OnInit {

	NewsSources: ISource[] = []


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

	appitems = [
		{
			label: 'NPM',
			imageIcon: '/assets/batman.jpg',
			link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
			externalRedirect: true,
			hrefTargetType: '_blank' ,// _blank|_self|_parent|_top|framename
			icon: 'favorite_border',

		},
		{
			label: 'Item 1 ',
			icon: 'favorite_border',
			items: [
				{
					label: 'Item 1.1',
					link: '/item-1-1',
					faIcon: 'fab fa-accusoft'
				},
				{
					label: 'Item 1.2',
					faIcon: 'fab fa-accessible-icon',
					disabled: false,
					items: [
						{
							label: 'Item 1.2.1',
							link: '/item-1-2-1',
							faIcon: 'fa-allergies' // Font awesome default prefix is fas
						},
						{
							label: 'Item 1.2.2',
							faIcon: 'fas fa-ambulance',
							items: [
								{
									label: 'Item 1.2.2.1',
									faIcon: 'fas fa-anchor',  // Still you can specify if you want to
									onSelected: function() {
										console.log('Item 1.2.2.1');
									}
								}
							]
						}
					]
				}
			]
		},
		{
			label: 'Item 2',
			icon: 'alarm',
			items: [
			{
				label: 'Item 2.1',
				link: '/item-2-1',
				icon: 'favorite_border',
				activeIcon: 'favorite',
				disabled: false,
			},
			{
				label: 'Item 2.2',
				link: '/item-2-2',
				icon: 'favorite_border',
				activeIcon: 'favorite',
				navigationExtras: {
					queryParams: { order: 'popular', filter: 'new' },
				}
			}
			]
		},
		{
			label: 'Item 3',
			icon: 'offline_pin',
			onSelected: function() {
				console.log('Item 3');
			}
		},
		{
			label: 'Item 4',
			link: '/item-4',
			icon: 'star_rate',
			hidden: false
		}
	];
	  
	config = {
		paddingAtStart: true,
		interfaceWithRoute: true,
		classname: 'my-custom-class',
		listBackgroundColor: '#3F51B5',//`rgb(208, 241, 239)`,
		fontColor: `white`,
		backgroundColor: '#3F51B5',
		selectedListFontColor: `red`,
		highlightOnSelect: true,
		collapseOnSelect: true,
		useDividers: false,
		rtlLayout: false
	};

    menuWithID: MultilevelNodes[] ;

	constructor(private NewsSourceService: NewsSourceService,private multilevelMenuService: MultilevelMenuService
		) { }

	ngOnInit() {

		this.NewsSourceService.getMenuItems().subscribe(
			(data: any) => {
				this.NewsSources = data['sources'];
				let MenuObject: Menu = { name: 'Sources', active: true, iconClass: '', submenu: [] };
				MenuObject.submenu = this.NewsSources.map(s => ({id:s.id, Icon: s.url, name: s.name, url: s.url }));
				this.menus.push(MenuObject);
			}
		);
	}
	
	selectedLabel($event:any) {
        console.log($event);
    }
	
	selectedItem($event:any) {
        console.log($event);
    }

	setExpandCollapseStatus(type: ExpandCollapseStatusEnum) {
        this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
    }
	
    menuIsReady(menus: MultilevelNodes[]) {
        this.menuWithID = menus;
    }

    selectMenuID(MenuID:any){
        this.multilevelMenuService.selectMenuByID(MenuID);
    }

	

}
