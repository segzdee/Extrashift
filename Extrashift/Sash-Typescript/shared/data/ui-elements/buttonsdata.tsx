
interface buttongroupdata {
	id: number;
	class: string;
	text: string;
}
export const DefaultButtons: buttongroupdata[] = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "secondary", text: "  Secondary" },
	{ id: 3, class: "success", text: " Success" },
	{ id: 4, class: "danger", text: "  Danger" },
	{ id: 5, class: "warning", text: "  Warning" },
	{ id: 6, class: "info", text: "Info" },
	{ id: 7, class: "light", text: " Light" },
	{ id: 8, class: "dark", text: "  Dark" },
	{ id: 9, class: "link", text: "Link" },
];
// Light Buttons//

export const LightButtons: buttongroupdata[] = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "secondary-light", text: "  Secondary" },
	{ id: 3, class: "success-light", text: " Success" },
	{ id: 4, class: "danger-light", text: "  Danger" },
	{ id: 5, class: "warning-light", text: "  Warning" },
	{ id: 6, class: "info-light", text: "Info" },
	{ id: 7, class: "purple-light", text: " purple" },
	{ id: 8, class: "teal-light", text: "  teal" },
	{ id: 9, class: "orange-light", text: "orange" }
];

export const OutlineButtons: buttongroupdata[] = [
	{ id: 1, class: "outline-primary", text: " Primary" },
	{ id: 2, class: "outline-secondary", text: "  Secondary" },
	{ id: 3, class: "outline-success", text: " Success" },
	{ id: 4, class: "outline-danger", text: "  Danger" },
	{ id: 5, class: "outline-warning", text: "  Warning" },
	{ id: 6, class: "outline-info", text: "Info" },
	{ id: 7, class: "outline-light", text: " Light" },
	{ id: 8, class: "outline-dark", text: "  Dark" },
];

export const GradientButtons: buttongroupdata[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 8, class: "teal-gradient", text: "  teal" },
];

export const GhostButtons: buttongroupdata[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "success-ghost", text: "Success" },
	{ id: 4, class: "danger-ghost", text: "Danger" },
	{ id: 5, class: "warning-ghost", text: "Warning" },
	{ id: 6, class: "info-ghost", text: "Info" },
];

interface socialbutton {
	id: number;
	class: string;
	class1: string;
}
export const SocialIconButtons: socialbutton[] = [
	{ id: 1, class: "facebook", class1: "facebook" },
	{ id: 2, class: "twitter", class1: "twitter-x" },
	{ id: 3, class: "instagram", class1: "instagram" },
	{ id: 4, class: "github", class1: "github" },
	{ id: 5, class: "youtube", class1: "youtube" },
	{ id: 5, class: "google", class1: "google" },

];

interface socialbutton1 {
	id: number;
	class: string;
}
export const ColoredButtons: socialbutton1[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 6, class: "purple" },
	{ id: 6, class: "orange" },

];

interface labelbutton {
	id: number;
	color: string;
	class: string;
}
export const LabelButtons: labelbutton[] = [
	{ id: 1, color: "primary", class: "chat-smile" },
	{ id: 2, color: "secondary", class: "settings-4" },
	{ id: 3, color: "warning", class: "spam-2" },
	{ id: 4, color: "info", class: "phone" },
	{ id: 5, color: "success", class: "thumb-up" },
	{ id: 6, color: "danger", class: "close" },

];

