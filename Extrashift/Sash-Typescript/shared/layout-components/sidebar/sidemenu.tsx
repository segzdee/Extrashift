

const DashboardIcon = <i className="fe fe-home side-menu__icon"></i>

const PagesIcon = <i className="fe fe-layers side-menu__icon"></i>

const AuthenticationIcon = <i className="fe fe-users  side-menu__icon"></i>

const ErrorIcon = <i className="fe fe-alert-triangle side-menu__icon"></i>

const UiElementsIcon = <i className="fe fe-package side-menu__icon"></i>

const Utilities = <i className="fe fe-zap side-menu__icon"></i>

const FormsIcon = <i className="fe fe-file-text  side-menu__icon"></i>

const AdvancedUiIcon = <i className="fe fe-cpu side-menu__icon"></i>

const WidgetsIcon = <i className="fe fe-aperture side-menu__icon"></i>

const AppsIcon = <i className="fe fe-slack side-menu__icon"></i>

const NestedmenuIcon = <i className="fe fe-grid side-menu__icon"></i>

const TablesIcon = <i className="fe fe-layout side-menu__icon"></i>

const ChartsIcon = <i className="fe fe-bar-chart-2 side-menu__icon"></i>

const MapsIcon = <i className="fe fe-map-pin side-menu__icon"></i>

const Icons = <i className="fe fe-wind side-menu__icon"></i>

const badge = <span className="badge bg-danger-transparent ms-2">Hot</span>

export const MENUITEMS:any = [
	{
		menutitle: "MAIN",
	},
	{ path: "/components/dashboard/dashboard", icon: DashboardIcon, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },

	{
		menutitle: "UI KIT",
	},

	{
		title: "Apps", icon: AppsIcon	, type: "sub", active: false, selected: false, children: [

			{ path: "/components/apps/full-calender", type: "link", active: false, selected: false, dirchange: false, title: "Full-Calender" },
			{ path: "/components/apps/gallery", type: "link", active: false, selected: false, dirchange: false, title: "Gallery" },
			{ path: "/components/apps/sweet-alerts", type: "link", active: false, selected: false, dirchange: false, title: "Sweet-alerts" },
		]
	},
	{

		title: "Ui Elements", icon: UiElementsIcon, type: "sub", active: false, selected: false, Names: "mega-slide-menu", Name: "mega-menu", children: [

			{ path: "/components/ui-elements/alerts", type: "link", active: false, selected: false, dirchange: false, title: "Alerts" },
			{ path: "/components/ui-elements/badges", type: "link", active: false, selected: false, dirchange: false, title: "Badge" },
			{ path: "/components/ui-elements/breadcrumbs", type: "link", active: false, selected: false, dirchange: false, title: "Breadcrumbs" },
			{ path: "/components/ui-elements/buttons", type: "link", active: false, selected: false, dirchange: false, title: "Buttons" },
			{ path: "/components/ui-elements/button-group", type: "link", active: false, selected: false, dirchange: false, title: "Button Group" },
			{ path: "/components/ui-elements/cards", type: "link", active: false, selected: false, dirchange: false, title: "Cards" },
			{ path: "/components/ui-elements/dropdowns", type: "link", active: false, selected: false, dirchange: false, title: "Dropdowns" },
			{ path: "/components/ui-elements/images&figures", type: "link", active: false, selected: false, dirchange: false, title: "Images & Figures" },
			{ path: "/components/ui-elements/list-groups", type: "link", active: false, selected: false, dirchange: false, title: "List-Group" },
			{ path: "/components/ui-elements/navs-tabs", type: "link", active: false, selected: false, dirchange: false, title: "Navs & Tabs" },
			{ path: "/components/ui-elements/object-fit", type: "link", active: false, selected: false, dirchange: false, title: "Object Fit" },
			{ path: "/components/ui-elements/pagination", type: "link", active: false, selected: false, dirchange: false, title: "Pagination" },
			{ path: "/components/ui-elements/popovers", type: "link", active: false, selected: false, dirchange: false, title: "Popovers" },
			{ path: "/components/ui-elements/progress", type: "link", active: false, selected: false, dirchange: false, title: "Progress" },
			{ path: "/components/ui-elements/spinners", type: "link", active: false, selected: false, dirchange: false, title: "Spinners" },
			{ path: "/components/ui-elements/toast", type: "link", active: false, selected: false, dirchange: false, title: "Toast" },
			{ path: "/components/ui-elements/tooltips", type: "link", active: false, selected: false, dirchange: false, title: "Tooltips" },
			{ path: "/components/ui-elements/typography", type: "link", active: false, selected: false, dirchange: false, title: "Typography" },
		]
	},
	{

		title: "Utilities", icon: Utilities, type: "sub", active: false, selected: false, Names: "mega-slide-menu", Name: "mega-menu", children: [

			{ path: "/components/utilities/avatars", type: "link", active: false, selected: false, dirchange: false, title: "Avatars" },
			{ path: "/components/utilities/borders", type: "link", active: false, selected: false, dirchange: false, title: "Borders" },
			{ path: "/components/utilities/breakpoints", type: "link", active: false, selected: false, dirchange: false, title: "Breakpoints" },
			{ path: "/components/utilities/colors", type: "link", active: false, selected: false, dirchange: false, title: "Colors" },
			{ path: "/components/utilities/columns", type: "link", active: false, selected: false, dirchange: false, title: "Columns" },
			{ path: "/components/utilities/flex", type: "link", active: false, selected: false, dirchange: false, title: "Flex" },
			{ path: "/components/utilities/gutters", type: "link", active: false, selected: false, dirchange: false, title: "Gutters" },
			{ path: "/components/utilities/helpers", type: "link", active: false, selected: false, dirchange: false, title: "Helpers" },
			{ path: "/components/utilities/position", type: "link", active: false, selected: false, dirchange: false, title: "Position" },
			{ path: "/components/utilities/additional-content", type: "link", active: false, selected: false, dirchange: false, title: "Additional Content" },
		]
	},

	{
		menutitle: "PRE-BUILD-PAGES",
	},
			{
				title: "Pages", icon:PagesIcon, type: "sub", active: false, selected: false, children: [
					{ path: "/components/pages/aboutus", type: "link", active: false, selected: false, dirchange: false, title: "About Us" },
					{
						title: "Blog", icon: "", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/blog/blog", type: "link", active: false, selected: false, dirchange: false, title: "Blog" },
							{ path: "/components/pages/blog/blog-details", type: "link", active: false, selected: false, dirchange: false, title: "Blog Details" },
							{ path: "/components/pages/blog/create-blog", type: "link", active: false, selected: false, dirchange: false, title: "Create Blog" },

						]
					},
					{ path: "/components/pages/chat", type: "link", active: false, selected: false, dirchange: false, title: "Chat" },
					{ path: "/components/pages/contacts", type: "link", active: false, selected: false, dirchange: false, title: "Contacts" },
					{
						title: "Ecommerce", icon: "", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/ecommerce/add-products", type: "link", active: false, selected: false, dirchange: false, title: "Add Products" },
							{ path: "/components/pages/ecommerce/cart", type: "link", active: false, selected: false, dirchange: false, title: "Cart" },
							{ path: "/components/pages/ecommerce/checkout", type: "link", active: false, selected: false, dirchange: false, title: "Checkout" },
							{ path: "/components/pages/ecommerce/edit-products", type: "link", active: false, selected: false, dirchange: false, title: "Edit Products" },
							{ path: "/components/pages/ecommerce/order-details", type: "link", active: false, selected: false, dirchange: false, title: "Order Details" },
							{ path: "/components/pages/ecommerce/orders", type: "link", active: false, selected: false, dirchange: false, title: "Orders" },
							{ path: "/components/pages/ecommerce/products", type: "link", active: false, selected: false, dirchange: false, title: "Products" },
							{ path: "/components/pages/ecommerce/product-details", type: "link", active: false, selected: false, dirchange: false, title: "Product Details" },
							{ path: "/components/pages/ecommerce/product-list", type: "link", active: false, selected: false, dirchange: false, title: "Product List" },
							{ path: "/components/pages/ecommerce/wishlist", type: "link", active: false, selected: false, dirchange: false, title: "Wishlist" },

						]
					},
					{
						title: "Email", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/email/mail-inbox", type: "link", active: false, selected: false, dirchange: false, title: "Mail Inbox" },
							{ path: "/components/pages/email/mail-read", type: "link", active: false, selected: false, dirchange: false, title: "Mail Read" },
							{ path: "/components/pages/email/mail-settings", type: "link", active: false, selected: false, dirchange: false, title: "mail Settings" },
						]
					},
					{ path: "/components/pages/empty", type: "link", active: false, selected: false, dirchange: false, title: "Empty" },
					{ path: "/components/pages/faqs", type: "link", active: false, selected: false, dirchange: false, title: "FAQ's" },
					{
						title: "File Manager", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/filemanager/file-manager", type: "link", active: false, selected: false, dirchange: false, title: "File Manager" },
							{ path: "/components/pages/filemanager/file-manager-list", type: "link", active: false, selected: false, dirchange: false, title: "File Manager List" },
							{ path: "/components/pages/filemanager/file-details", type: "link", active: false, selected: false, dirchange: false, title: "File Details" },

						]
					},
					{
						title: "Invoice", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/invoice/create-invoice", type: "link", active: false, selected: false, dirchange: false, title: "Create Invoice" },
							{ path: "/components/pages/invoice/invoice-details", type: "link", active: false, selected: false, dirchange: false, title: "Invoice Details" },
							{ path: "/components/pages/invoice/invoice-list", type: "link", active: false, selected: false, dirchange: false, title: "Invoice List" },

						]
					},
					{ path: "/components/pages/landing", type: "link", active: false, selected: false, dirchange: false, title: "Landing" },
					{ path: "/components/pages/notifications", type: "link", active: false, selected: false, dirchange: false, title: "Notifications" },
					{ path: "/components/pages/pricing", type: "link", active: false, selected: false, dirchange: false, title: "Pricing" },
					{ path: "/components/pages/profile", type: "link", active: false, selected: false, dirchange: false, title: "Profile" },
					{ path: "/components/pages/reviews", type: "link", active: false, selected: false, dirchange: false, title: "Reviews" },
					{ path: "/components/pages/team", type: "link", active: false, selected: false, dirchange: false, title: "Team" },
					{ path: "/components/pages/terms-conditions", type: "link", active: false, selected: false, dirchange: false, title: "Terms & Conditions" },
					{
						title: "Timeline", type: "sub", active: false, selected: false, children: [

							{ path: "/components/pages/timeline/timeline-1", type: "link", active: false, selected: false, dirchange: false, title: "Timeline-1" },
							{ path: "/components/pages/timeline/timeline-2", type: "link", active: false, selected: false, dirchange: false, title: "Timeline-2" },

						]
					},
					{ path: "/components/pages/todolist", type: "link", active: false, selected: false, dirchange: false, title: "To Do List" },


				]
			},
			{
				title: "Authentication", icon: AuthenticationIcon, type: "sub", active: false, selected: false, children: [
					{ path: "/components/authentication/comingsoon", type: "link", active: false, selected: false, dirchange: false, title: "Coming Soon" },
					{ path: "/components/authentication/create-password", type: "link", active: false, selected: false, dirchange: false, title: "Create Password" },
					{ path: "/components/authentication/lockscreen", type: "link", active: false, selected: false, dirchange: false, title: "LockScreen" },
					{ path: "/components/authentication/reset-password", type: "link", active: false, selected: false, dirchange: false, title: "Reset Password" },
					{ path: "/components/authentication/signin", type: "link", active: false, selected: false, dirchange: false, title: "Signin" },
					{ path: "/components/authentication/signup", type: "link", active: false, selected: false, dirchange: false, title: "Signup" },
					{ path: "/components/authentication/two-step-verification", type: "link", active: false, selected: false, dirchange: false, title: "Two-Step-Verification" },
					{ path: "/components/authentication/under-maintanance", type: "link", active: false, selected: false, dirchange: false, title: "Under-maintanance" },
				]
			},
			{
				title: "Error Pages", icon: ErrorIcon, type: "sub", active: false, selected: false, children: [
					{ path: "/components/errorpages/error400", type: "link", active: false, selected: false, dirchange: false, title: "400" },
					{ path: "/components/errorpages/error401", type: "link", active: false, selected: false, dirchange: false, title: "401" },
					{ path: "/components/errorpages/error403", type: "link", active: false, selected: false, dirchange: false, title: "403" },
					{ path: "/components/errorpages/error404", type: "link", active: false, selected: false, dirchange: false, title: "404" },
					{ path: "/components/errorpages/error500", type: "link", active: false, selected: false, dirchange: false, title: "500" },
					{ path: "/components/errorpages/error503", type: "link", active: false, selected: false, dirchange: false, title: "503" },
				]
			},
	{
		menutitle: "GENERAL",
	},
	{
		title: "Forms", icon:FormsIcon, type: "sub", active: false, selected: false, children: [

			{
				title: "Form Elements", type: "sub", active: false, selected: false, children: [

					{ path: "/components/forms/form-elements/inputs", type: "link", active: false, selected: false, dirchange: false, title: "Inputs" },
					{ path: "/components/forms/form-elements/checks-radios", type: "link", active: false, selected: false, dirchange: false, title: "Checks & Radios" },
					{ path: "/components/forms/form-elements/input-group", type: "link", active: false, selected: false, dirchange: false, title: "Input Group" },
					{ path: "/components/forms/form-elements/form-select", type: "link", active: false, selected: false, dirchange: false, title: "Form Select" },
					{ path: "/components/forms/form-elements/range-slider", type: "link", active: false, selected: false, dirchange: false, title: "Range Slider" },
					{ path: "/components/forms/form-elements/input-mask", type: "link", active: false, selected: false, dirchange: false, title: "Input Masks" },
					{ path: "/components/forms/form-elements/file-uploads", type: "link", active: false, selected: false, dirchange: false, title: "File Uploads" },
					{ path: "/components/forms/form-elements/date-time-picker", type: "link", active: false, selected: false, dirchange: false, title: "Date,Time Picker" },

				]
			},
			{ path: "/components/forms/floating-labels", type: "link", active: false, selected: false, dirchange: false, title: "Floating-Labels" },
			{ path: "/components/forms/form-layouts", type: "link", active: false, selected: false, dirchange: false, title: "Form-Layouts" },
			{
				title: "Form Editors", type: "sub", active: false, selected: false, children: [

					{ path: "/components/forms/form-editor/quill-editor", type: "link", active: false, selected: false, dirchange: false, title: "Quill Editor" },

				]
			},
			{ path: "/components/forms/validation", type: "link", active: false, selected: false, dirchange: false, title: "Validations" },
			{ path: "/components/forms/select2", type: "link", active: false, selected: false, dirchange: false, title: "Select2" },

		]
	},
	{
		title: "Advanced Ui", icon: AdvancedUiIcon, type: "sub", active: false, selected: false, children: [
			{ path: "/components/advanceui/accordians-collapse", type: "link", active: false, selected: false, dirchange: false, title: "Accordians & Collapse" },
			{ path: "/components/advanceui/carousel", type: "link", active: false, selected: false, dirchange: false, title: "Carousel" },
			{ path: "/components/advanceui/draggable-cards", type: "link", active: false, selected: false, dirchange: false, title: "Draggable Cards" },
			{ path: "/components/advanceui/modals-closes", type: "link", active: false, selected: false, dirchange: false, title: "Modals & Closes" },
			{ path: "/components/advanceui/navbar", type: "link", active: false, selected: false, dirchange: false, title: "Navbar" },
			{ path: "/components/advanceui/offcanvas", type: "link", active: false, selected: false, dirchange: false, title: "Offcanvas" },
			{ path: "/components/advanceui/placeholders", type: "link", active: false, selected: false, dirchange: false, title: "Placeholder" },
			{ path: "/components/advanceui/ratings", type: "link", active: false, selected: false, dirchange: false, title: "Ratings" },
			{ path: "/components/advanceui/swiperjs", type: "link", active: false, selected: false, dirchange: false, title: "Swiper JS" },
			{ path: "/components/advanceui/treeview", type: "link", active: false, selected: false, dirchange: false, title: "Treeview" },
			{ path: "/components/advanceui/ribbons", type: "link", active: false, selected: false, dirchange: false, title: "Ribbons" },

		]
	},

	{ path: "/components/widgets/widgets", title: "widgets", icon: WidgetsIcon, badgetxt:badge, type: "link", active: false, selected: false },


	{
		menutitle: "TABLES & CHARTS",
	},

	{
		title: "Tables", icon: TablesIcon, type: "sub", children: [
			{ path: "/components/tables/tables", type: "link", active: false, selected: false, dirchange: false, title: "Tables" },
			{ path: "/components/tables/grid-js-tables", type: "link", active: false, selected: false, dirchange: false, title: "Grid JS Tables" },
			{ path: "/components/tables/data-tables", type: "link", active: false, selected: false, dirchange: false, title: "Data Tables" },

		]
	},
	{
		title: "Charts", icon: ChartsIcon, type: "sub", badge: "badge bg-secondary side-badge",
		children: [
			{
				title: "Apex Charts", type: "sub", menusub: true, active: false, selected: false, dirchange: false,
				children: [
					{ path: "/components/charts/apexcharts/line-charts", type: "link", active: false, selected: false, dirchange: false, title: "Line Charts" },
					{ path: "/components/charts/apexcharts/area-charts", type: "link", active: false, selected: false, dirchange: false, title: "Area Charts " },
					{ path: "/components/charts/apexcharts/columns-charts", type: "link", active: false, selected: false, dirchange: false, title: "Column Charts " },
					{ path: "/components/charts/apexcharts/bar-charts", type: "link", active: false, selected: false, dirchange: false, title: "Bar Charts" },
					{ path: "/components/charts/apexcharts/mixed-charts", type: "link", active: false, selected: false, dirchange: false, title: "Mixed Charts" },
					{ path: "/components/charts/apexcharts/range-area-charts", type: "link", active: false, selected: false, dirchange: false, title: "Range Area Charts" },
					{ path: "/components/charts/apexcharts/timeline-charts", type: "link", active: false, selected: false, dirchange: false, title: "Timeline Charts" },
					{ path: "/components/charts/apexcharts/candlestick-charts", type: "link", active: false, selected: false, dirchange: false, title: "CandleStick Charts" },
					{ path: "/components/charts/apexcharts/boxplot", type: "link", active: false, selected: false, dirchange: false, title: "Boxplot Charts" },
					{ path: "/components/charts/apexcharts/bubble-charts", type: "link", active: false, selected: false, dirchange: false, title: "Bubble Charts" },
					{ path: "/components/charts/apexcharts/scatter-charts", type: "link", active: false, selected: false, dirchange: false, title: "Scatter Charts" },
					{ path: "/components/charts/apexcharts/heatmap-charts", type: "link", active: false, selected: false, dirchange: false, title: "Heatmap Charts" },
					{ path: "/components/charts/apexcharts/treemap-charts", type: "link", active: false, selected: false, dirchange: false, title: "Treemap Charts" },
					{ path: "/components/charts/apexcharts/pie-charts", type: "link", active: false, selected: false, dirchange: false, title: "Pie Charts" },
					{ path: "/components/charts/apexcharts/radialbar-charts", type: "link", active: false, selected: false, dirchange: false, title: "Radialbar Charts" },
					{ path: "/components/charts/apexcharts/radar-charts", type: "link", active: false, selected: false, dirchange: false, title: "Radar Charts" },
					{ path: "/components/charts/apexcharts/polar-area-charts", type: "link", active: false, selected: false, dirchange: false, title: "Polararea Charts" },
				],
			},
			{ path: "/components/charts/chartjs", type: "link", active: false, selected: false, dirchange: false, title: "ChartJS Charts" },
			{ path: "/components/charts/echart", type: "link", active: false, selected: false, dirchange: false, title: "Echart Charts" },
		],
	},

	{
		menutitle: "MAPS & ICONS",
	},

	{
		title: "Maps", icon: MapsIcon, type: "sub", children: [
			{ path: "/components/maps/leaflet-maps", type: "link", active: false, selected: false, dirchange: false, title: "Leaflet-Maps"},
			{ path: "/components/maps/vector-maps", type: "link", active: false, selected: false, dirchange: false, title: "Vector-Maps"},
		]
	},
	
			{ path: "/components/icons/icons", icon: Icons, title: "Icon", type: "link", active: false, selected: false, dirchange: false},
		

]

