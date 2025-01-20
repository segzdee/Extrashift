interface defaultalerts {
  text: string;
  class: string;
}
export const Defaultalerts: defaultalerts[] = [
  { text: " A simple primary alert—check it out!", class: "primary" },
  { text: " A simple secondary alert—check it out!", class: "secondary" },
  { text: " A simple success alert—check it out!", class: "success" },
  { text: " A simple danger alert—check it out!", class: "danger" },
  { text: " A simple warning alert—check it out!", class: "warning" },
  { text: " A simple info alert—check it out!", class: "info" },
  { text: " A simple light alert—check it out!", class: "light" },
  { text: " A simple dark alert—check it out!", class: "dark" },

];

interface solidalerts {
  id: number;
  text: string;
  class: string;
  color: string;
  color1: string;
  color2: string;
}

export const Solidalerts: solidalerts[] = [
  { id: 1, text: "A simple solid primary alert-check it out! ", class: "solid-primary", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 2, text: "A simple solid secondary alert-check it out!", class: "solid-secondary", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 3, text: "A simple solid info alert-check it out!", class: "solid-info", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 4, text: "A simple solid warning alert-check it out! ", class: "solid-warning", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 5, text: "A simple solid success alert-check it out!", class: "solid-success", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 6, text: "A simple solid danger alert-check it out! ", class: "solid-danger", color: "", color1: "text-default", color2: "text-fixed-white" },
  { id: 7, text: "A simple solid light alert-check it out! ", class: "solid-light", color: "", color1: "text-default", color2: "text-dark" },
  { id: 8, text: "A simple solid dark alert-check it out!", class: "solid-dark", color: "text-white", color1: "text-white", color2: "text-white" },

];

interface additionalcontent {
  id: number;
  text1: string;
  text2: string;
  text3: string;
  class: string;
}
export const Additionalcontentalerts: additionalcontent[] = [
  { id: 1, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "primary" },
  { id: 2, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "info" },
  { id: 3, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "success" },
  { id: 4, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "warning" }
];

interface outlinealerts {
  id: number;
  text: string;
  class: string;
}
export const Outlinealerts: outlinealerts[] = [
  { id: 1, text: "A simple outline primary alert-check it out! ", class: "outline-primary" },
  { id: 2, text: "A simple outline secondary alert-check it out!", class: "outline-secondary" },
  { id: 3, text: "A simple outline info alert-check it out!", class: "outline-info" },
  { id: 4, text: "A simple outline warning alert-check it out! ", class: "outline-warning" },
  { id: 5, text: "A simple outline success alert-check it out!", class: "outline-success" },
  { id: 6, text: "A simple outline danger alert-check it out! ", class: "outline-danger" },
  { id: 7, text: "A simple outline light alert-check it out! ", class: "outline-light" },
  { id: 8, text: "A simple outline dark alert-check it out!", class: "outline-dark" },

];

interface shadowalerts {
  id: number;
  text: string;
  class: string;
  size: string;
}
export const Shadowsolidalerts: shadowalerts[] = [
  { id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
  { id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
  { id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
  { id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
  { id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
  { id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },

];

interface defaultsolidlerts {
  text: string;
  class: string;
  size: string;
}
export const Defaultsolidalerts: defaultsolidlerts[] = [
  { text: "A simple solid primary alert with small shadow—check it out! ", class: "primary", size: "-sm" },
  { text: "A simple solid primary alert with normal shadow—check it out! ", class: "primary", size: "" },
  { text: "A simple solid primary alert with large shadow—check it out! ", class: "primary", size: "-lg" },
  { text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "-sm" },
  { text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "" },
  { text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "-lg" },
];

interface roundedsolidalerts {
  id: number;
  text: string;
  class: string;
}
export const Roundedsolidalerts: roundedsolidalerts[] = [
  { id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
  { id: 2, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-info" },
  { id: 3, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
  { id: 4, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
];

interface roundedsolidalerts {
  id: number;
  text: string;
  class: string;
}

export const Roundedoutlinealerts: roundedsolidalerts[] = [
  { id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
  { id: 2, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-info" },
  { id: 3, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
  { id: 4, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
];
export const Roundedefaultalerts: roundedsolidalerts[] = [
  { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
  { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "info" },
  { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
  { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];
export const Roundewithbtnalerts: roundedsolidalerts[] = [
  { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
  { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "info" },
  { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
  { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];

interface customize {
  id: number;
  class1: string;
  color: string
}
export const Customizedalert1: customize[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: 'primary' },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: 'secondary', },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: 'warning', },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: 'danger', },
];

interface imagelaerts {
  id: number;
  src1: string;
  color: string;
  data: string;
}
export const Imagealerts: imagelaerts[] = [
  { id: 1, src1: "../../../assets/images/faces/3.jpg", color: 'primary', data: "" },
  { id: 2, src1: "../../../assets/images/faces/5.jpg", color: 'secondary', data: "" },
  { id: 3, src1: "../../../assets/images/faces/8.jpg", color: 'warning', data: "" },
  { id: 4, src1: "../../../assets/images/faces/11.jpg", color: 'danger', data: "" },
  { id: 5, src1: "../../../assets/images/faces/13.jpg", color: 'info', data: "" },
  { id: 6, src1: "../../../assets/images/faces/14.jpg", color: 'light', data: "" },
  { id: 7, src1: "../../../assets/images/faces/3.jpg", color: 'dark', data: "text-muted" },
];

interface Avatarsizealert {
  id: number;
  src1: string;
  color: string;
  class: string;
  data: string
}
export const avatarsizealert: Avatarsizealert[] = [
  { id: 1, src1: "../../../assets/images/faces/3.jpg", color: 'primary', class: 'xs', data: "" },
  { id: 2, src1: "../../../assets/images/faces/5.jpg", color: 'secondary', class: 'sm', data: "" },
  { id: 3, src1: "../../../assets/images/faces/8.jpg", color: 'warning', class: '', data: "" },
  { id: 4, src1: "../../../assets/images/faces/11.jpg", color: 'danger', class: 'md', data: "" },
  { id: 5, src1: "../../../assets/images/faces/13.jpg", color: 'info', class: 'lg', data: "" },
  { id: 6, src1: "../../../assets/images/faces/14.jpg", color: 'dark', class: 'xl', data: "text-muted" },
];

interface svgalert {
  id: number;
  class1: string;
  text1: string;
  text2: string;
  color: string;
  class: string;
  btn1: string;
  btn2: string;
}
export const Svgalert: svgalert[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", text1: "Information Alert", text2: 'Information alert to show to information', color: 'primary', btn1: 'cancel', btn2: 'open', class: "secondary" },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", text1: "Confirmed Alert", text2: 'Success alert to show to success message', color: 'secondary', btn1: 'cancel', btn2: 'open', class: "danger" },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", text1: "Warning Alert", text2: 'Warning alert to show warning message', color: 'warning', btn1: 'cancel', btn2: 'open', class: "dark" },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", text1: "Danger Alert", text2: 'Danger alert to show the danger message', color: 'danger', btn1: 'cancel', btn2: 'open', class: "info" },
];
export const Svgalert1: svgalert[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", text1: "Information Alert", text2: 'Information alert to show to information', color: 'primary', btn1: 'cancel', btn2: 'open', class: "" },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", text1: "Confirmed Alert", text2: 'Success alert to show to success message', color: 'secondary', btn1: '', btn2: 'close', class: "" },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", text1: "Warning Alert", text2: 'Warning alert to show warning message', color: 'warning', btn1: 'skip', btn2: 'open', class: "" },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", text1: "Danger Alert", text2: 'Danger alert to show the danger message', color: 'danger', btn1: 'close', btn2: 'continue', class: "" },
];

