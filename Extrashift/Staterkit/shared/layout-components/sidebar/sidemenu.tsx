

const DashboardIcon = <i className="fe fe-home side-menu__icon"></i>

const ErrorIcon = <i className="fe fe-alert-triangle side-menu__icon"></i>

const NestedmenuIcon = <i className="fe fe-grid side-menu__icon"></i>

export const MENUITEMS:any = [
	{
		menutitle: "MAIN",
	},
	{ path: "/components/dashboard/dashboard", icon: DashboardIcon, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },

			{
				title: "Error Pages", icon: ErrorIcon, type: "sub", active: false, selected: false, children: [
					{ path: "/components/errorpages/error400", type: "link", active: false, selected: false, dirchange: false, title: "400" },
				]
			},	
			{
				menutitle: "WEB APPS",
			},
			{
				icon: NestedmenuIcon, title: "Nested Menu", type: "sub", active: false, selected: false, children: [
			
				  { title: "Nested-1", path: "#!", type: "empty", active: false, selected: false },
			
				  {
					title: "Nested-2", type: "sub", active: false, selected: false, children: [
			
					  { type: "empty", path: "#!", active: false, selected: false, title: "Nested-2-1" },
					  { type: "empty", path: "#", active: false, selected: false, title: "Nested-2-2" },
					  { type: "empty", path: "#", active: false, selected: false, title: "Nested-2-3" },
			
					]
				  },
				]
			  },

]

