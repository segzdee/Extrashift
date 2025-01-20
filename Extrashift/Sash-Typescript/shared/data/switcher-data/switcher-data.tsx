import { ClassAttributes, InputHTMLAttributes, JSX, useState } from 'react';
import store from '../../redux/store';
import { MENUITEMS } from '@/shared/layout-components/sidebar/sidemenu';


interface Theme {
    dataThemeMode: string;
    dataHeaderStyles: string;
    dataMenuStyles: string;
    bodyBg1: string;
    bodyBg2: string;
    darkBg: string;
    inputBorder: string;
    lang: string,
    dir: string,
    dataNavLayout: string,
    dataVerticalStyle: string,
    toggled: string,
    dataNavStyle: string,
    horStyle: string,
    dataPageStyle: string,
    dataWidth: string,
    dataMenuPosition: string,
    dataHeaderPosition: string,
    iconOverlay: string,
    colorPrimaryRgb: string,
    colorPrimary: string,
    bgImg: string,
    iconText: string,
}

// Define an interface for the action function parameter
interface ActionFunction {
    (theme: Theme): void;
}

export function addOrRemoveCss(cssCode: string | null) {

    if (document.head) {
        const dynamicBootstrapStyle = document.head.querySelector(`style[data-name="dynamic-bootstrap"]`);
        if (dynamicBootstrapStyle) {
            document.head.removeChild(dynamicBootstrapStyle);
        }
    }
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-name", "dynamic-bootstrap");
    styleElement.textContent = cssCode;
    document.head.prepend(styleElement);
}

export function Dark(actionfunction:ActionFunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataThemeMode": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
        "bodyBg1": "",
        "bodyBg2": "",
        "darkBg": "",
        "inputBorder": "",
    });
    localStorage.setItem("sashdarktheme", "dark");
    localStorage.removeItem("sashlighttheme");
    localStorage.removeItem("darkBgRGB1");
	localStorage.removeItem("darkBgRGB2");
	localStorage.removeItem("darkBgRGB3");
	localStorage.removeItem("darkBgRGB4");

}
export function Light(actionfunction:ActionFunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataThemeMode": "light",
        "dataHeaderStyles": "light",
        "dataMenuStyles" :' light',
        "darkBg": "",
        "bodyBg1": "",
        "bodyBg2": "",
        "inputBorder": "",

    });
    localStorage.setItem("sashlighttheme", "light");
    localStorage.removeItem("sashdarktheme");
    localStorage.removeItem('darkBgRGB1');
    localStorage.removeItem('darkBgRGB2');
    localStorage.removeItem('darkBgRGB3');
    localStorage.removeItem('darkBgRGB4');
}
export function Ltr(actionfunction:ActionFunction) {

    const theme = store.getState();
    actionfunction({ ...theme, dir: "ltr" });
    localStorage.setItem("sashltr", "ltr");
    localStorage.removeItem("sashrtl");
}
export function Rtl(actionfunction:ActionFunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "rtl" });
    localStorage.setItem("sashrtl", "rtl");
    localStorage.removeItem("sashltr");
}

export const HorizontalClick = (actionfunction:ActionFunction) => {
      const theme = store.getState();
    setTimeout(() => {
        document.querySelector<HTMLElement>(".main-content")?.click();
    }, 100);
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        // "dataMenuStyles": localStorage.sashdarktheme ? 'dark' : localStorage.darkBgRGB1 ? 'dark' : localStorage.sashMenu ? localStorage.sashMenu : "light",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.sashnavstyles ? localStorage.sashnavstyles : "menu-click"
    });
    localStorage.setItem("sashlayout", "horizontal");
    localStorage.removeItem("sashverticalstyles");
};
export const Vertical = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        // "dataMenuStyles": "",
        "dataVerticalStyle": "overlay",
        "toggled": "",
        "dataNavStyle": ''
    });
    localStorage.setItem("sashlayout", "vertical");
    //
    localStorage.removeItem("sashnavstyles");

};

export const Menuclick = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataVerticalStyle": "",
        "toggled": "menu-click-closed",
    });
    localStorage.setItem("sashnavstyles", "menu-click");
    localStorage.removeItem("sashverticalstyles");

};

function closeMenuFn() {
    const closeMenuRecursively = (items: any) => {

        items?.forEach((item: any) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MENUITEMS);
}

export const MenuHover = (actionfunction:ActionFunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "toggled": "menu-hover-closed",
        "horStyle": ""
    });
    localStorage.setItem("sashnavstyles", "menu-hover");
    localStorage.removeItem("sashverticalstyles",);
    closeMenuFn();
};
export const IconClick = (actionfunction:ActionFunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-click",
        "dataVerticalStyle": "",
        "toggled": "icon-click-closed",
    });
    localStorage.setItem("sashnavstyles", "icon-click");
    localStorage.removeItem("sashverticalstyles");
    const Sidebar:any = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
};
export const IconHover = (actionfunction:ActionFunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-hover",
        "dataVerticalStyle": "",
        "toggled": "icon-hover-closed"
    });
    localStorage.setItem("sashnavstyles", "icon-hover");
    localStorage.removeItem("sashverticalstyles");
    const Sidebar:any = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
    closeMenuFn()
};
export const Fullwidth = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("sashfullwidth", "Fullwidth");
    localStorage.removeItem("sashboxed");

};
export const Boxed = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
    });
    localStorage.setItem("sashboxed", "Boxed");
    localStorage.removeItem("sashfullwidth");
};
export const FixedMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("sashmenufixed", "MenuFixed");
    localStorage.removeItem("sashmenuscrollable");
};
export const scrollMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("sashmenuscrollable", "Menuscrolled");
    localStorage.removeItem("sashmenufixed");
};
export const Headerpostionfixed = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("sashheaderfixed", 'FixedHeader');
    localStorage.removeItem("sashheaderscrollable");
};
export const Headerpostionscroll = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("sashheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("sashheaderfixed");
};
export const Regular = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("sashregular", "Regular");
    localStorage.removeItem("sashclassic");
    localStorage.removeItem("sashmodern");
};
export const Classic = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("sashclassic", "Classic");
    localStorage.removeItem("sashregular");
    localStorage.removeItem("sashmodern");
};
export const Modern = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("sashmodern", "Modern");
    localStorage.removeItem("sashregular");
    localStorage.removeItem("sashclassic");
};
export const Defaultmenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        //
        "dataVerticalStyle": "default",
        "dataNavLayout": "vertical",
        "toggled": ""
    });
    localStorage.removeItem("sashverticalstyles");
    localStorage.removeItem("sashnavstyles");
};
export const Closedmenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "toggled": "close-menu-close"
    });
    localStorage.setItem("sashverticalstyles", "closed");
    localStorage.removeItem("sashnavstyles");

};

function icontextOpenFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}

export const iconText = (actionfunction:ActionFunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close",
        "dataNavStyle": "",
        
    })
    localStorage.setItem("sashverticalstyles", "icontext");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        console.log("clicking");
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });
};
export const iconOverayFn = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "toggled": "icon-overlay-close",
        "dataNavStyle": "",
    });
    localStorage.setItem("sashverticalstyles", "overlay");
    localStorage.removeItem("sashnavstyles");

    var icon = document.getElementById("switcher-icon-overlay") as HTMLInputElement;
    if(icon){
        icon.checked=true
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });

};
function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "toggled": "detached-close",
        "dataNavStyle": "",
    });
    localStorage.setItem("sashverticalstyles", "detached");
    localStorage.removeItem("sashnavstyles");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
    var icon =document.getElementById("switcher-detached") as HTMLInputElement;
    if(icon){
        icon.checked=true
    }
};

export const DoubletFn = (actionfunction:ActionFunction) => {

    const theme = store.getState();
    // const menuNochildElement = document.querySelectorAll(".side-menu__item.active")[0];
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "toggled": "double-menu-open",
        "dataNavStyle": "",
    });
    localStorage.setItem("sashverticalstyles", "doublemenu");
    localStorage.removeItem("sashnavstyles");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "toggled": "double-menu-close"
                }
            );
        }
    }, 100);
};
export const bgImage1 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg1"
    });
    localStorage.setItem("bgimage1", "bgimg1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage2 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg2"
    });
    localStorage.setItem("bgimage2", "bgimg2");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage3 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg3"
    });
    localStorage.setItem("bgimage3", "bgimg3");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage4 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg4"
    });
    localStorage.setItem("bgimage4", "bgimg4");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage5");
};
export const bgImage5 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg5"
    });
    localStorage.setItem("bgimage5", "bgimg5");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
};

export const colorMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "color",
    });
    localStorage.setItem("sashMenu", "color");
    localStorage.removeItem("gradient");
};

export const lightMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "light",
    });
    localStorage.setItem("sashMenu", "light");
    localStorage.removeItem("light");
};

export const darkMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "dark",
    });
    localStorage.setItem("sashMenu", "dark");
    localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "gradient",
    });
    localStorage.setItem("sashMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "transparent",
    });
    localStorage.setItem("sashMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "light",
    });
    localStorage.setItem("sashHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("sashHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "color",
    });
    localStorage.setItem("sashHeader", "color");
    localStorage.removeItem("dark");
};
export const gradientHeader = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "gradient",

    });
    localStorage.setItem("sashHeader", "gradient");
    localStorage.removeItem("transparent");
};
export const transparentHeader = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "transparent",
    });
    localStorage.removeItem("gradient");
    localStorage.setItem("sashHeader", "transparent");
};

export const primaryColor1 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58 88 146"
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");

};
export const primaryColor2 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163"
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
        "colorPrimary": "161 90 223"
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
    localStorage.setItem("primaryRGB1", "161 90 223");
};
export const primaryColor4 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
        "colorPrimary": "78 172 76"
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
    localStorage.setItem("primaryRGB1", "78 172 76");
};
export const primaryColor5 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
        "colorPrimary": "223 90 90"
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
    localStorage.setItem("primaryRGB1", "223 90 90");
};

export const backgroundColor1 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "20, 30, 96",
        "bodyBg2": "34, 44, 110",
        "darkBg": "25, 38, 101",
        "inputBorder": "255,255,255,0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "20, 30, 96");
    localStorage.setItem('darkBgRGB2', "34, 44, 110");
    localStorage.setItem('darkBgRGB3', "25, 38, 101");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
    localStorage.setItem('sashMenu', "dark");

};
export const backgroundColor2 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "8, 78, 115",
        "bodyBg2": "22, 92, 129",
        "darkBg": "13, 86, 120",
        "inputBorder": "255,255,255,0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "8, 78, 115");
    localStorage.setItem('darkBgRGB2', "22, 92, 129");
    localStorage.setItem('darkBgRGB3', "13, 86, 120",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor3 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "90, 37, 135",
        "bodyBg2": "104, 51, 149",
        "darkBg": "95, 45, 140",
        "inputBorder": "255,255,255,0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "90, 37, 135");
    localStorage.setItem('darkBgRGB2', "104, 51, 149");
    localStorage.setItem('darkBgRGB3', "95, 45, 140",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor4 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "24, 101, 51",
        "bodyBg2": "38, 115, 65",
        "darkBg": "29, 109, 56",
        "inputBorder": "255,255,255,0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "24, 101, 51");
    localStorage.setItem('darkBgRGB2', "38, 115, 65");
    localStorage.setItem('darkBgRGB3', "29, 109, 56");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor5 = (actionfunction:ActionFunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "120, 66, 20",
        "bodyBg2": "134, 80,34",
        "darkBg": "125, 74, 25",
        "inputBorder": "255,255,255,0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "120, 66, 20");
    localStorage.setItem('darkBgRGB2', "134, 80,34");
    localStorage.setItem('darkBgRGB3', "125, 74,25");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};

const ColorPicker = (props:any) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
const Themeprimarycolor = ({ actionfunction }:any) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");

    const handleInput = (e:any) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                ...theme,
                "colorPrimaryRgb": `${r} , ${g} , ${b}`,
                // "colorPrimary": `${r} , ${g} , ${b}`
            });
            localStorage.setItem("dynamiccolor", `${r} , ${g} , ${b}`);
        }
    };

    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }:any) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e: any) => {
        const { r, g, b }:any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg1": `${r}, ${g}, ${b}`,
            "bodyBg2": `${r + 19}, ${g + 19}, ${b + 19}`,
            "darkBg": `${r}, ${g}, ${b}`,
            
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark"

        });
        localStorage.setItem("darkBgRGB1", `${r}, ${g}, ${b}`);
        localStorage.setItem("darkBgRGB2", `${r + 19}, ${g + 19}, ${b + 19}`);
        localStorage.setItem("darkBgRGB3", `${r + 19}, ${g + 19}, ${b + 19}`);
        localStorage.setItem("darkBgRGB4", "255, 255, 255, 0.1");
        localStorage.removeItem("sashMenu");
        localStorage.removeItem("sashHeader");

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const Reset = (actionFunction:any) => {
    // Remove styled-js data
    const styledJsElement = document.querySelector('[data-styled-js]');
    if (styledJsElement) {
        styledJsElement.remove();
    }

    // Get the current theme from the store
    const theme = store.getState();

    // Call the action function with updated theme
    actionFunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "light",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        loader: "disable",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bodyBg1: "",
        bodyBg2: "",
        darkBg: "",
        inputBorder: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });

    // Clear local storage
    localStorage.clear();
};
//Landingpage
export const Reset1 = (actionfunction:any) => {
    const styledElement = document.querySelector('[data-styled-js]');

    if (styledElement) {
        styledElement.remove();
    }
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "light",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "",
        dataVerticalStyle: "overlay",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "menu-click",
        dataMenuPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        // colorPrimary:"",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
    // addOrRemoveCss(ltr);
};
export const LocalStorageBackup = (actionfunction:any) => {

    (localStorage.sashrtl) ? Rtl(actionfunction) : Ltr(actionfunction);
    (localStorage.sashdarktheme) ? Dark(actionfunction) : "";
    (localStorage.sashlighttheme) ? Light(actionfunction) : "";
    (localStorage.sashregular) ? Regular(actionfunction) : "";
    (localStorage.sashclassic) ? Classic(actionfunction) : "";
    (localStorage.sashmodern) ? Modern(actionfunction) : "";
    (localStorage.sashfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.sashboxed) ? Boxed(actionfunction) : "";
    (localStorage.sashmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.sashmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.sashheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.sashheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

    (localStorage.sashnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.sashnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.sashnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.sashnavstyles === "icon-hover") ? IconHover(actionfunction) : '';

    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';
    (localStorage.sashlayout == 'horizontal') && HorizontalClick(actionfunction);
    //primitive 
    if (
        localStorage.getItem("sashltr") == null ||
        localStorage.getItem("sashltr") == "ltr"
    ) {
        // addOrRemoveCss(ltr);
    }
    if (localStorage.getItem("sashrtl") == "rtl") {
        document.querySelector("body")?.classList.add("rtl");
        document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
        // addOrRemoveCss(rtl);
    }
    //
    // ThemeColor MenuColor Start
    switch (localStorage.sashMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.sashHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);

            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);

            break;
        case '172, 172, 80':
            primaryColor3(actionfunction);

            break;
        case '78, 172, 76':
            primaryColor4(actionfunction);

            break;
        case '223, 90, 90':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB1) {
        case '20, 30, 96':
            backgroundColor1(actionfunction);

            break;
        case '8, 78, 115':
            backgroundColor2(actionfunction);

            break;
        case '90, 37, 135':
            backgroundColor3(actionfunction);

            break;
        case '24, 101, 51':
            backgroundColor4(actionfunction);

            break;
        case '120, 66, 20':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    //layout
    if (localStorage.sashverticalstyles) {
        const verticalStyles = localStorage.getItem("sashverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction);
                break;
            case "closed":
                Closedmenu(actionfunction);
                break;
            case "icontext":
                iconText(actionfunction);
                break;
            case "overlay":
                iconOverayFn(actionfunction);
                break;
            case "detached":
                DetachedFn(actionfunction);
                break;
            case "doublemenu":
                DoubletFn(actionfunction);
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }
    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodyBg1": localStorage.darkBgRGB1,
            "bodyBg2": localStorage.darkBgRGB2,
            "darkBg": localStorage.darkBgRGB3,
            "inputBorder": localStorage.darkBgRGB4,
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        // Dark(actionfunction);
    }
    switch (localStorage.sashMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);
    
            break;
        case 'color':
            colorMenu(actionfunction);
    
            break;
        case 'gradient':
            gradientMenu(actionfunction);
    
            break;
        case 'transparent':
            transparentMenu(actionfunction);
    
            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.sashHeader) {
        case 'light':
            lightHeader(actionfunction);
    
            break;
        case 'dark':
            darkHeader(actionfunction);
    
            break;
        case 'color':
            colorHeader(actionfunction);
    
            break;
        case 'gradient':
            gradientHeader(actionfunction);
    
            break;
        case 'transparent':
            transparentHeader(actionfunction);
    
            break;
        default:
            break;
    }
};
