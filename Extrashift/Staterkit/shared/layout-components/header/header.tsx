import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Nav, Dropdown, Offcanvas, Tab, ListGroup, Modal, Form, Button } from 'react-bootstrap';
import { MENUITEMS } from '../sidebar/sidemenu';
import { connect } from "react-redux";
import { ThemeChanger } from '../../redux/action';
import store from '@/shared/redux/store';
import { basePath } from '@/next.config';
import { Data, Messagesdata, Notificationdata, tabsData } from './headerdata';
import { useRouter } from 'next/router';
import SimpleBar from 'simplebar-react';


const Header = ({ local_varaiable, ThemeChanger }: any) => {

  const router = useRouter();

  // For search
  const searchRef = useRef(null);

  const handleClick = (event: { target: any; }) => {
    const searchInput: any = searchRef.current;

    if (searchInput && (searchInput === event.target || searchInput.contains(event.target))) {
      document.querySelector(".header-search")?.classList.add("searchdrop");
    } else {
      // document.querySelector(".header-search")?.classList.remove("searchdrop");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  //// search Functionality
  const [showa, setShowa] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);

  //   document.addEventListener("click", function () {
  //       document.querySelector(".search-result")?.classList.add("d-none");
  //   });
  const myfunction = (inputvalue: string) => {
    document.querySelector(".search-result")?.classList.remove("d-none");

    const i: any = [];
    const allElement2: any = [];

    MENUITEMS.forEach((mainLevel: { children: any[]; }) => {
      if (mainLevel.children) {
        setShowa(true);
        mainLevel.children.forEach((subLevel: any) => {
          i.push(subLevel);
          if (subLevel.children) {
            subLevel.children.forEach((subLevel1: any) => {
              i.push(subLevel1);
              if (subLevel1.children) {
                subLevel1.children.forEach((subLevel2: any) => {
                  i.push(subLevel2);
                });
              }
            });
          }
        });
      }
    });
    for (const allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true);

          // Check if the element has a path and doesn't already exist in allElement2 before pushing
          if (allElement.path && !allElement2.some((el: { title: any; }) => el.title === allElement.title)) {
            allElement2.push(allElement);
          }
        }
      }
    }

    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);

  };

  const Switchericon = () => {
    document.querySelector(".offcanvas-end")?.classList.toggle("show");
    if (document.querySelector(".switcher-backdrop")?.classList.contains("d-none")) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };


  //full screen
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.fullscreenElement &&
      !document.fullscreenElement
    ) {
      // Enter fullscreen mode
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } 
       else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);

    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const windowObject = window;
      if (windowObject.innerWidth <= 991) {
        // ThemeChanger({ ...local_varaiable, "toggled": "close" })
      } else {
        // ThemeChanger({...local_varaiable,"toggled":""})
      }
    };
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    if (window.innerWidth >= 992) {
      ThemeChanger({ ...theme, toggled: local_varaiable.toggled ? local_varaiable.toggled : '' });
      // local_varaiable.dataHeaderStyles == 'dark' ? 'light' : 'dark',
    }
  }

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

  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            const MainContent = document.querySelector(".main-content");
            const appSidebar = document.querySelector('.app-sidebar');
            appSidebar?.addEventListener("click", () => {
              DetachedOpenFn();
            });
            MainContent?.addEventListener("click", () => {
              console.log("detachedclose");
              DetachedCloseFn();
            });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, "toggled": "", "iconOverlay": '' });
            }
            else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, "toggled": "icon-overlay-close", "iconOverlay": '' });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, "toggled": "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add("double-menu-active");
                }
                else {

                  ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                }
              }
            }
            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, "toggled": "", "iconOverlay": '' });
            } else {
              ThemeChanger({ ...theme, "toggled": "detached-close", "iconOverlay": '' });
            }

            break;

          // default
          case "default":
            ThemeChanger({ ...theme, "toggled": "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            }
            else {
              ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

            }
            break;

        }
      }
    }
    else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, "toggled": "open" });

        setTimeout(() => {
          if (theme.toggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, "toggled": "close" });
      }
    }

  };
  //Dark Model
  const ToggleDark = () => {

    ThemeChanger({
      ...local_varaiable,
      "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
      "dataHeaderStyles": local_varaiable.dataHeaderStyles == 'dark' ? 'light' : 'dark',
      "dataMenuStyles": local_varaiable.dataMenuStyles == 'dark' ? 'light' : 'dark',
      // "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ? local_varaiable.dataMenuStyles == 'dark' ? 'light' : 'light' : "light",
    });
    const theme = store.getState();

    if (theme.dataThemeMode != 'dark') {
      ThemeChanger({
        ...theme,
        "bodyBg1": '',
        "bodyBg2": '',
        "darkBg": '',
        "inputBorder": '',
        "dataHeaderStyles": '',
      });
      localStorage.removeItem("sashdarktheme");
      localStorage.removeItem("darkBgRGB1");
      localStorage.removeItem("darkBgRGB2");
      localStorage.removeItem("darkBgRGB3");
      localStorage.removeItem("sashMenu");
      localStorage.removeItem("sashHeader");

    }
    else {
      localStorage.setItem("sashdarktheme", "dark");
      localStorage.setItem("sashMenu", "dark");
    }

  };


  useEffect(() => {
    const navbar = document?.querySelector(".header");
    const navbar1 = document?.querySelector(".app-sidebar");
    const sticky: any = navbar?.clientHeight;
    // const sticky1 = navbar1.clientHeight;

    function stickyFn() {
      if (window.pageYOffset >= sticky) {
        navbar?.classList.add("sticky-pin");
        navbar1?.classList.add("sticky-pin");
      } else {
        navbar?.classList.remove("sticky-pin");
        navbar1?.classList.remove("sticky-pin");
      }
    }

    window.addEventListener("scroll", stickyFn);
    window.addEventListener("DOMContentLoaded", stickyFn);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyFn);
      window.removeEventListener("DOMContentLoaded", stickyFn);
    };
  }, []);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);



  //My Shopping Cart
  const [cartItemCount, setCartItemCount] = useState(5);
  const [cartItems, setCartItems] = useState([...Data]);

  const [_isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => {
    // Update the state to close the cart
    setIsCartOpen(false);

    console.log('Closing the cart');
  };
  const fetchCartItems = () => {
    // Implement your logic to fetch updated cart items
    // For simplicity, I'll use a static array here
    const Shoppingsdata = [
      { id: 1, src: "/assets/images/ecommerce/orders/11.jpg", status: "In Stock", quantity: "01", color: "success", cost: "$438", class: "Flower Pot for Home Decor" },
      { id: 2, src: "/assets/images/ecommerce/orders/1.jpg", status: "Out Stock", quantity: "06", color: "danger", cost: "$867", class: "Black Digital Camera" },
      { id: 3, src: "/assets/images/ecommerce/orders/15.jpg", status: "In Stock", quantity: "05", color: "success", cost: "$323", class: "Stylish Rockerz 255 Ear Pods" },
      { id: 4, src: "/assets/images/ecommerce/orders/12.jpg", status: "In Stock", quantity: "05", color: "success", cost: "$867", class: "Women Party Wear Dress" },
    ]
    setCartItems(Shoppingsdata);
    setCartItemCount(Shoppingsdata.length);
  };

  useEffect(() => {
    // Fetch initial cart items when the component mounts
    fetchCartItems();
  }, []);

  const handleContinueShopping = async () => {
    // Close the cart
    closeCart();

    // Fetch updated cart items
    fetchCartItems();
    await router.push(`#!`);
  };

  const handleRemove = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
  };

  //Notification
  const [cartItemCount1, setCartItemCount1] = useState(5);
  const [cartItems1, setCartItems1] = useState([...Notificationdata]);

  const [_isCartOpen1, setIsCartOpen1] = useState(false);

  const closeCart1 = () => {
    // Update the state to close the cart
    setIsCartOpen1(false);

    console.log('Closing the cart');
  };
  const fetchCartItems1 = () => {
    const Notificationdata = [
      { id: 1, icon: "fe-mail", class: "New Application received", days: "3 days ago", color: "primary" },
      { id: 2, icon: "fe-check-circle", class: "Project has been approved", days: "2 hours ago", color: "secondary" },
      { id: 3, icon: "fe-shopping-cart", class: "Your Product Delivered", days: "30 min ago", color: "success" },
      { id: 4, icon: "fe-shopping-cart", class: "Friend Requests", days: "10 min ago", color: "pink" },
    ]
    setCartItems1(Notificationdata);
    setCartItemCount1(Notificationdata.length);
  };

  useEffect(() => {
    // Fetch initial cart items when the component mounts
    fetchCartItems1();
  }, []);

  const handleRemove1 = (itemId: number) => {
    const updatedCart1: any = cartItems1.filter((item) => item.id !== itemId);
    setCartItems1(updatedCart1);
    setCartItemCount1(updatedCart1.length);
  };

  //Messages
  const [cartItemCount2, setCartItemCount2] = useState(5);
  const [cartItems2, setCartItems2] = useState([...Messagesdata]);

  const [_isCartOpen2, setIsCartOpen2] = useState(false);

  const closeCart2 = () => {
    // Update the state to close the cart
    setIsCartOpen2(false);

    console.log('Closing the cart');
  };
  const fetchCartItems2 = () => {
    const Messagesdata = [
      { id: 1, src: "/assets/images/faces/1.jpg", class: "Peter Theil", time: "6:45am", data: "Commented on file Guest list...." },
      { id: 2, src: "/assets/images/faces/15.jpg", class: "Abagael Luth", time: "10:35am", data: "New Meetup Started......" },
      { id: 3, src: "/assets/images/faces/12.jpg", class: "Brizid Dawson", time: "02:17am", data: "Brizid is in the Warehouse..." },
      { id: 4, src: "/assets/images/faces/4.jpg", class: "Shannon Shaw", time: "7:55pm", data: "New Product Realease......" },
      { id: 5, src: "/assets/images/faces/3.jpg", class: "Cherry Blossom", time: "7:55pm", data: "You have appointment on......" },
    ]
    setCartItems2(Messagesdata);
    setCartItemCount2(Messagesdata.length);
  };

  useEffect(() => {
    // Fetch initial cart items when the component mounts
    fetchCartItems2();
  }, []);

  const handleRemove2 = (itemId: number) => {
    const updatedCart2: any = cartItems2.filter((item) => item.id !== itemId);
    setCartItems2(updatedCart2);
    setCartItemCount2(updatedCart2.length);
  };

  const [showm, setShowm] = useState(false);

  const handleClosem = () => setShowm(false);
  const handleShowm = () => setShowm(true);

  const [allData, setAllData] = useState(tabsData);

  function handleRemove4(id: number) {
    const newList = allData.filter((idx) => idx.id !== id);
    setAllData(newList);
  }
  return (
    <Fragment>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link href="/components/dashboard/dashboard" className="header-logo">
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className="desktop-white" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-white.png`} alt="logo" className="toggle-white" />
                </Link>
              </div>
            </div>
            <div className="header-element">
              <Link aria-label="Hide Sidebar" onClick={() => toggleSidebar()} className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#!;"><span></span></Link>
              <div className="main-header-center  d-none d-lg-block header-link">
                <Form.Control type="text" className="" id="typehead"
                  placeholder="Search for results..."
                  onClick={() => { }}
                  autoComplete="off"
                  ref={searchRef}
                  defaultValue={InputValue}
                  onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })} />
                <button type="button" aria-label="button" className="btn pe-1"><i className="fe fe-search" aria-hidden="true"></i></button>
                <div id="headersearch" className="header-search">
                  <div className="p-3">
                    <div className="">
                      <p className="fw-semibold text-muted mb-2 fs-13">Recent Searches</p>
                      <div className="ps-0">
                        <Link href="#!" className="search-tags me-1"><i className="fe fe-search me-2"></i>People<span></span></Link>
                        <Link href="#!" className="search-tags me-1"><i className="fe fe-search me-2"></i>Pages<span></span></Link>
                        <Link href="#!" className="search-tags"><i className="fe fe-search me-2"></i>Articles<span></span></Link>
                      </div>
                    </div>
                    {showa ?
                      <div className="card search-result position-relative z-index-9 search-fix  border mt-1">
                        <div className="card-header">
                          <div className="card-title me-2 text-break">Search result of {InputValue}</div>
                        </div>
                        <ListGroup className='m-2'>
                          {show2 ?
                            NavData.map((e: any) =>
                              <ListGroup.Item key={Math.random()} className="">
                                <Link href={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue(""); }}>{e.title}</Link>
                              </ListGroup.Item>
                            )
                            : <b className={`${searchcolor} `}>{searchval}</b>}
                        </ListGroup>

                      </div>
                      : ""}
                    <div className="mt-3">
                      <p className="fw-semibold text-muted mb-3 fs-13">Apps and pages</p>
                      <ul className="ps-0">
                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                          <Link className="d-inline-flex align-items-center" href="#!"><i className="fe fe-calendar me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Calendar</span></Link>
                        </li>
                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                          <Link className="d-inline-flex align-items-center" href="#!"><i className="fe fe-mail me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Mail</span></Link>
                        </li>
                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                          <Link className="d-inline-flex align-items-center" href="#!"><i className="fe fe-globe me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Buttons</span></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <p className="fw-semibold text-muted mb-2 fs-13">Links</p>
                      <ul className="ps-0 list-unstyled mb-0">
                        <li className="p-1 align-items-center text-muted mb-1 search-app">
                          <Link href="#!" className="text-primary"><u>http://spruko/spruko.com</u></Link>
                        </li>
                        <li className="p-1 align-items-center text-muted mb-0 pb-0 search-app">
                          <Link href="#!" className="text-primary"><u>http://spruko/spruko.com</u></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-3 border-top px-0">
                    <div className="text-center">
                      <Link href="#!" className="text-primary text-decoration-underline fs-15">View all</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="header-content-right">
            <div className="header-element header-search d-lg-none d-block" >
              <Link aria-label="anchor" href="#!" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShowm}>
                <i className="fe fe-search header-link-icon"></i>
              </Link>
            </div>
            <Dropdown className="header-element country-selector" align={"end"}>
              <Dropdown.Toggle variant='' href="#!" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} className="rounded-circle" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown dropdown-menu-end" data-popper-placement="none">
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} />
                    </span>
                    English
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/spain_flag.jpg`} alt="img" />
                    </span>
                    Spanish
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/french_flag.jpg`} alt="img" />
                    </span>
                    French
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/germany_flag.jpg`} alt="img" />
                    </span>
                    German
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/italy_flag.jpg`} alt="img" />
                    </span>
                    Italian
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="li">
                  <Link className="d-flex align-items-center" href="#!;">
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/russia_flag.jpg`} alt="img" />
                    </span>
                    Russian
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="header-element header-theme-mode">
              <Link href="#!" className="header-link layout-setting" onClick={() => ToggleDark()}>
                <span className="light-layout">
                  <i className="fe fe-moon header-link-icon"></i>
                </span>
                <span className="dark-layout">
                  <i className="fe fe-sun header-link-icon"></i>
                </span>
              </Link>
            </div>
            <Dropdown className="header-element cart-dropdown" autoClose="outside" align={"end"}>
              <Dropdown.Toggle variant='' href="#!" className="header-link dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fe fe-shopping-cart header-link-icon"></i>
                <span className="badge bg-secondary rounded-pill header-icon-badge" id="cart-icon-badge">{cartItemCount}</span>

              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown dropdown-menu-end" data-popper-placement="none">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fs-16 fw-semibold">My Shopping Cart</p>
                    <span className="badge bg-danger-transparent fs-14" id="cart-data">Hurry Up!</span>
                  </div>
                </div>
                <div><hr className="dropdown-divider" /></div>
                <SimpleBar id="header-cart-items-scroll">
                  <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                    {cartItems.map((idx) => (
                      <li className="dropdown-item border-bottom" key={Math.random()}>
                        <div className="d-flex align-items-start cart-dropdown-item">
                          <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}${idx.src}`} alt="img" className="avatar avatar-xl br-5 me-3" />
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-start mb-0">
                              <div>
                                <Link className="mb-0 fs-13 text-dark fw-semibold" href="#!">{idx.class}</Link>
                                <div className="min-w-fit-content">
                                  <span>Status: <span className={`text-${idx.color}`}>{idx.status}</span></span>
                                  <p className="fs-13 text-muted mb-0">{`Quantity: ${idx.quantity}`}</p>
                                </div>
                              </div>
                              <div className="ms-auto text-end d-flex fs-16">
                                <span className="fs-16 text-dark mb-1">{idx.cost}</span>
                                <Link aria-label="anchor" href="#!" className="header-cart-remove dropdown-item-close btn" onClick={() => handleRemove(idx.id)}><i className="ti ti-trash"></i></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                </SimpleBar>

                <div className={`p-3 empty-header-item border-top ${cartItemCount === 0 ? 'd-none' : 'd-flex'}`}>
                  <Link href="#!" className="btn btn-primary btn-pill w-sm btn-sm  fs-16"><i className="fe fe-check-circle me-2 d-inline-flex"></i>checkout</Link>
                  <h6 className="ms-auto fs-17 fw-semibold my-auto">Total: $6789</h6>
                </div>
                <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                  <div className="text-center">
                    <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                      <i className="ri-shopping-cart-2-line fs-2"></i>
                    </span>
                    <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                    <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                    <Link href={`#!`} className="btn btn-primary btn-wave btn-sm m-1" data-abc="true" onClick={handleContinueShopping}>
                      Continue shopping <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="header-element notifications-dropdown" autoClose="outside" align={"end"}>
              <Dropdown.Toggle variant='' aria-label="anchor" href="#!" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                <i className="fe fe-bell header-link-icon"></i>
                <span className="w-9 h-9 p-0 bg-success rounded-pill header-icon-badge pulse pulse-success" id="notification-icon-badge"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                    <span className="badge bg-secondary-transparent" id="notifiation-data">{cartItemCount1}</span>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <ul className="list-unstyled mb-0" id="header-notification-scroll">
                  {cartItems1.map((idx) => (
                    <Dropdown.Item as="li" className="dropdown-item border-bottom" key={Math.random()}>
                      <div className="d-flex align-items-start">
                        <div className="pe-2">
                          <span className={`avatar avatar-md bg-${idx.color} avatar-rounded`}><i className={`fe ${idx.icon} fs-18`}></i></span>
                        </div>
                        <div className="flex-grow-1 d-flex align-items-center my-auto">
                          <div>
                            <p className="mb-0 fw-semibold"><Link href="#!">{idx.class}</Link></p>
                            <span className="text-muted fw-normal fs-12 header-notification-text">{idx.days}</span>
                          </div>
                          <div className="ms-auto my-auto">
                            <Link aria-label="anchor" href="#!" className="min-w-fit-content text-muted me-1 dropdown-item-close1" onClick={() => handleRemove1(idx.id)}><i className="ti ti-x fs-16"></i></Link>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}

                </ul>
                <div className={`p-3 empty-header-item border-top justify-content-center ${cartItemCount1 === 0 ? 'd-none' : 'd-flex'}`}>
                  <Link href="#!" className="">View All Notifications</Link>
                </div>
                <div className={`p-5 empty-item ${cartItemCount1 === 0 ? 'd-block' : 'd-none'}`}>
                  <div className="text-center">
                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                      <i className="ri-notification-off-line fs-2"></i>
                    </span>
                    <h6 className="fw-semibold mt-3">No New Notifications</h6>
                  </div>
                </div>

              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="header-element message-dropdown" autoClose="outside" align={"end"}>
              <Dropdown.Toggle variant='' aria-label="anchor" href="#!" className="header-link dropdown-toggle no-caret" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown2" aria-expanded="false">
                <i className="fe fe-message-square header-link-icon"></i>
                <span className="w-9 h-9 p-0 bg-danger rounded-pill header-icon-badge pulse pulse-danger" id="message-icon-badge"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fs-17 fw-semibold">Messages</p>
                    <span className="badge bg-secondary-transparent" id="message-data">{cartItemCount2}</span>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <SimpleBar id="header-message-scroll">
                  <ul className="list-unstyled mb-0" id="header-message-scroll">
                    {cartItems2.map((idx) => (
                      <Dropdown.Item as="li" className="dropdown-item border-bottom" key={Math.random()}>
                        <div className="d-flex align-items-start">
                          <div className="pe-2">
                            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}${idx.src}`} alt="img" className="avatar avatar-md avatar-rounded" />
                          </div>
                          <div className="w-100">
                            <div className="flex-grow-1 d-flex align-items-centermy-auto">
                              <div>
                                <h6 className="mb-0 fw-semibold fs-14"><Link href="#!">{idx.class}</Link></h6>
                              </div>
                              <div className="ms-auto text-end">
                                <p className="text-muted mb-0">
                                  {idx.time}
                                </p>
                              </div>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-centermy-auto">
                              <div>
                                <span className="text-muted fw-normal fs-12">{idx.data}</span>
                              </div>
                              <div className="ms-auto text-end">
                                <Link aria-label="anchor" href="#!" className="min-w-fit-content text-muted me-1 dropdown-item-close2" onClick={() => handleRemove2(idx.id)}><i className="ti ti-x fs-16"></i></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </ul>
                </SimpleBar>
                <div className={`p-3 empty-header-item border-top justify-content-center ${cartItemCount2 === 0 ? 'd-none' : 'd-block'}`}>
                  <Link href="#!" className="">View All Messages</Link>
                </div>
                <div className={`p-5 empty-item ${cartItemCount2 === 0 ? 'd-block' : 'd-none'}`}>
                  <div className="text-center">
                    <span className="avatar avatar-xl avatar-rounded bg-danger-transparent">
                      <i className="ri-message-2-line fs-2"></i>
                    </span>
                    <h6 className="fw-semibold mt-3">No New Messages</h6>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <div className="header-element header-fullscreen">
              <Link onClick={toggleFullscreen} href="#!" className="header-link">
                {isFullscreen ? (
                  <i className="fe fe-minimize-2 full-screen-close header-link-icon"></i>
                ) : (
                  <i className="fe fe-minimize full-screen-open header-link-icon"></i>
                )}
              </Link>
            </div>
            <div className="header-element">
              <Link aria-label="anchor" href="#!" className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#sidebar-right" onClick={handleShow1}>
                <i className="fe fe-align-right header-link-icon"></i>
              </Link>
            </div>
            <Dropdown className="header-element main-profile-user" align={"end"}>
              <Dropdown.Toggle as="a" href="#!" className="header-link dropdown-toggle no-caret" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <div className="d-flex align-items-center">
                  <div className="me-xxl-2 me-0">
                    <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/9.jpg`} alt="img" width="32" height="32" className="rounded-circle" />
                  </div>
                  <div className="d-xxl-block d-none my-auto">
                    <h6 className="fw-semibold mb-0 lh-1 fs-14">Json Taylor</h6>
                    <span className="op-7 fw-normal d-block fs-11 text-muted">Web Designer</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                <Dropdown.Item className="drop-heading d-xxl-none d-block">
                  <div className="text-center">
                    <h5 className="text-dark mb-0 fs-14 fw-semibold">Json Taylor</h5>
                    <small className="text-muted">Web Designer</small>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/components/pages/profile"><i className="fe fe-user fs-18 me-2 text-primary"></i>Profile</Link></Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/components/pages/email/mail-inbox"><i className="fe fe-mail fs-18 me-2 text-primary"></i>Inbox <span className="badge bg-danger ms-auto">25</span></Link></Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/components/pages/email/mail-settings"><i className="fe fe-settings text-primary fs-18 me-2 text-primary"></i>Settings</Link></Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/components/pages/chat"><i className="fe fe-headphones fs-18 me-2 text-primary"></i>Support</Link></Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/components/authentication/lockscreen"><i className="fe fe-lock fs-18 me-2 text-primary"></i>Lockscreen</Link></Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><Link className="d-flex w-100" href="/"><i className="fe fe-info fs-18 me-2 text-primary"></i>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="header-element">
              <Link aria-label="anchor" href="#!" onClick={() => Switchericon()} className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                <i className="bx bx-cog header-link-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas className="offcanvas offcanvas-end right-sidebar" show={show1} onHide={handleClose1} tabIndex={-1} id="sidebar-right" aria-labelledby="offcanvasRightLabel2">
        <Offcanvas.Header className="offcanvas-header border-bottom bg-primary text-fixed-white">
          <h6 className="offcanvas-title d-inline-flex text-fixed-white" id="offcanvasRightLabel2">
            <span className=" me-2 d-inline-flex">
              <i className="fe fe-bell my-auto"></i> <span className=" pulse w-9 h-9 bg-success rounded-circle"></span>
            </span>
            Notifications
          </h6>
          <button type="button" onClick={handleClose1} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Tab.Container defaultActiveKey="Feeds">
            <Nav variant="pills" className="panel-tabs">
              <Nav.Item>
                <Nav.Link eventKey="Feeds"><i className="fe fe-settings text-primary me-1 d-inline-block"></i>Feeds</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Chat"><i className="fe fe-message-circle me-1 d-inline-block"></i> Chat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Timeline"><i className="fe fe-anchor me-1  d-inline-block"></i> Timeline</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="Feeds">
                <div className="" id="side1">
                  <div className="fw-semibold p-3">Feeds</div>
                  <div className="card-body pt-2">
                    <div className="browser-stats">
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span className="feeds avatar-circle  avatar-rounded bg-primary-transparent"><i
                            className="fe fe-user text-primary"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">New user registered</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-secondary  avatar-rounded bg-secondary-transparent"><i
                              className="fe fe-shopping-cart text-secondary"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">New order delivered</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-danger  avatar-rounded bg-danger-transparent"><i
                              className="fe fe-bell text-danger"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">You have pending tasks</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-warning  avatar-rounded bg-warning-transparent"><i
                              className="fe fe-gitlab text-warning"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">New version arrived</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-pink  avatar-rounded bg-pink-transparent"><i
                              className="fe fe-database text-pink"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">Server #1 overloaded</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-info  avatar-rounded bg-info-transparent"><i
                              className="fe fe-check-circle text-info"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">New project launched</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 fw-semibold ps-3">Settings</div>
                  <div className="card-body pt-2">
                    <div className="browser-stats">
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span className="feeds avatar-circle  avatar-rounded bg-primary-transparent"><i
                            className="fe fe-settings text-primary text-primary"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">General Settings</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-secondary  avatar-rounded bg-secondary-transparent"><i
                              className="fe fe-map-pin text-secondary"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">Map Settings</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-danger  avatar-rounded bg-danger-transparent"><i
                              className="fe fe-headphones text-danger"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">Support Settings</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-warning  avatar-rounded bg-warning-transparent"><i
                              className="fe fe-credit-card text-warning"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">Payment Settings</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 px-4">
                        <div className="col-sm-2 mb-sm-0 mb-3">
                          <span
                            className="feeds avatar-circle avatar-circle-pink  avatar-rounded bg-pink-transparent"><i
                              className="fe fe-bell text-pink"></i></span>
                        </div>
                        <div className="col-sm-10 ps-sm-0 pe-0">
                          <div className="d-flex align-items-end justify-content-between ms-2">
                            <h6 className="">Notification Settings</h6>
                            <div className="d-inline-flex">
                              <Link href="#!"><i className="fe fe-settings text-primary me-1"></i></Link>
                              <Link href="#!"><i className="fe fe-x text-primary"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Chat">
                <div className="" id="side2">
                  <ListGroup className="list-group-flush">
                    <div className="pt-3 fw-semibold ps-5">Today</div>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-2' src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/2.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Addie Minstra</div>
                          <p className="mb-0 fs-12 text-muted"> Hey! there{` I'`} am available.... </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-11' src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/11.jpg`} />
                        <span className="avatar-status bg-success"></span>
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Rose Bush</div>
                          <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-10'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/10.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Claude Strophobia</div>
                          <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                          </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-13'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/13.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Eileen Dover</div>
                          <p className="mb-0 fs-12 text-muted"> New product Launching... </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-12'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/12.jpg`} />
                        <span className="avatar-status bg-success"></span>
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Willie Findit</div>
                          <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-15'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/15.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Manny Jah</div>
                          <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                          </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-4'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/4.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Cherry Blossom</div>
                          <p className="mb-0 fs-12 text-muted"> Hey! there {`I' `}am available....</p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <div className="pt-3 fw-semibold ps-5">Yesterday</div>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-7'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/7.jpg`} />
                        <span className="avatar-status bg-success"></span>
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Simon Sais</div>
                          <p className="mb-0 fs-12 text-muted">Schedule Realease...... </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-9'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/9.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Laura Biding</div>
                          <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                          </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-2'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/2.jpg`} />
                        <span className="avatar-status bg-success"></span>
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Addie Minstra</div>
                          <p className="mb-0 fs-12 text-muted">Contact me for details....</p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-9'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/9.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Ivan Notheridiya</div>
                          <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                          </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-14'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/14.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Dulcie Veeta</div>
                          <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-11'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/11.jpg`} />
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Florinda Carasco</div>
                          <p className="mb-0 fs-12 text-muted">New product Launching...</p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <div className="me-2">
                        <img className="avatar avatar-md  avatar-rounded cover-image" alt='user-11'
                          src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/4.jpg`} />
                        <span className="avatar-status bg-success"></span>
                      </div>
                      <div className="">
                        <Link href={`#!`}>
                          <div className="fw-semibold text-dark" data-bs-toggle="modal"
                            data-target="#chatmodel">Cherry Blossom</div>
                          <p className="mb-0 fs-12 text-muted">cherryblossom@gmail.com</p>
                        </Link>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Timeline">
                <div className="" id="side3">
                  <ul className="task-list timeline-task">
                    <li className="d-sm-flex mt-4">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">Task Finished<span
                          className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span></h6>
                        <p className="text-muted fs-12">Adam Berry finished task on<Link href="#!"
                          className="fw-semibold text-primary"> Project Management</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                    <li className="d-sm-flex">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">New Comment<span
                          className="text-muted fs-11 ms-2 fw-normal">05 July 2021</span></h6>
                        <p className="text-muted fs-12">Victoria commented on Project <Link href="#!"
                          className="fw-semibold text-primary"> AngularJS Template</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                    <li className="d-sm-flex">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">New Comment<span
                          className="text-muted fs-11 ms-2 fw-normal">25 June 2021</span></h6>
                        <p className="text-muted fs-12">Victoria commented on Project <Link href="#!"
                          className="fw-semibold text-primary"> AngularJS Template</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                    <li className="d-sm-flex">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">Task Overdue<span
                          className="text-muted fs-11 ms-2 fw-normal">14 June 2021</span></h6>
                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <Link href="#!"
                          className="fw-semibold text-primary"> Integrated management</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                    <li className="d-sm-flex">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">Task Overdue<span
                          className="text-muted fs-11 ms-2 fw-normal">29 June 2021</span></h6>
                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <Link href="#!"
                          className="fw-semibold text-primary"> Integrated management</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                    <li className="d-sm-flex">
                      <div>
                        <i className="task-icon1"></i>
                        <h6 className="fw-semibold">Task Finished<span
                          className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span></h6>
                        <p className="text-muted fs-12">Adam Berry finished task on<Link href="#!"
                          className="fw-semibold text-primary"> Project Management</Link></p>
                      </div>
                      <div className="ms-auto d-md-flex me-3">
                        <Link href="#!" className="text-muted me-2"><span className="fe fe-edit"></span></Link>
                        <Link href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal className="modal fade" id="searchModal" show={showm} onHide={handleClosem} tabIndex="-1" aria-labelledby="searchModal" aria-hidden="true">

        <Modal.Body className="modal-body">
          <div className="input-group">
            <Form.Control type="search" className="px-2 " placeholder="Search..." aria-label="Username" onClick={() => { }}
              autoComplete="off"
              ref={searchRef}
              defaultValue={InputValue}
              onChange={((ele: any) => { myfunction(ele.target.value); setInputValue(ele.target.value); })} />
            <Link href="#!" className="input-group-text text-white" id="Search-Grid"><i className="fe fe-mic header-link-icon"></i></Link>
            <Dropdown>
              <Dropdown.Toggle as="a" href="#!" className="btn btn-light btn-icon no-caret rounded-0 h-40" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fe fe-more-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="">
                <Dropdown.Item><Link className="" href="#!">Action</Link></Dropdown.Item>
                <Dropdown.Item><Link className="" href="#!">Another action</Link></Dropdown.Item>
                <Dropdown.Item><Link className="" href="#!">Something else here</Link></Dropdown.Item>
                <hr className="dropdown-divider" />
                <Dropdown.Item><Link className="" href="#!">Separated link</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mt-4">
            <p className="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
            <span className="search-tags"><i className="fe fe-user me-2"></i>People<Link href="#!" className="tag-addon"><i className="fe fe-x"></i></Link></span>
            <span className="search-tags"><i className="fe fe-file-text me-2"></i>Pages<Link href="#!" className="tag-addon"><i className="fe fe-x"></i></Link></span>
            <span className="search-tags"><i className="fe fe-align-left me-2"></i>Articles<Link href="#!" className="tag-addon"><i className="fe fe-x"></i></Link></span>
            <span className="search-tags"><i className="fe fe-server me-2"></i>Tags<Link href="#!" className="tag-addon"><i className="fe fe-x"></i></Link></span>
          </div>
          {showa ?
            <div className="card search-result position-relative z-index-9 search-fix  border mt-1">
              <div className="card-header">
                <div className="card-title me-2 text-break">Search result of {InputValue}</div>
              </div>
              <ListGroup className='m-2'>
                {show2 ?
                  NavData.map((e: any) =>
                    <ListGroup.Item key={Math.random()} className="">
                      <Link href={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue(""); }}>{e.title}</Link>
                    </ListGroup.Item>
                  )
                  : <b className={`${searchcolor} `}>{searchval}</b>}
              </ListGroup>

            </div>
            : ""}
          <div className="my-4">
            <p className="font-weight-semibold text-muted mb-2">Recent Search :</p>
            {allData.map((idx) => (
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert" key={Math.random()}>
                <Link href={idx.data}><span>{idx.class}</span></Link>
                <Link className="ms-auto lh-1" href="#!" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove4(idx.id)}><i className="fe fe-x text-muted"></i></Link>
              </div>
            ))}
          </div>
        </Modal.Body>
        <div className="modal-footer">
          <div className="btn-group ms-auto">
            <Button variant='' className="btn btn-sm btn-primary-light">Search</Button>
            <Button variant='' className="btn btn-sm btn-primary">Clear Recents</Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );

};
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
