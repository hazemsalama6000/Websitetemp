export type Menu = {
	name: string, 
	iconClass: string, 
	active: boolean,
	submenu: {	id:string,name: string, url: string ,Icon:string }[]
  }