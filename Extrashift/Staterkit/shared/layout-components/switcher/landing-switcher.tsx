import { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { ThemeChanger } from "../../redux/action";
import { Button, Nav, Tab } from 'react-bootstrap';
import  Themeprimarycolor, * as switcherdata  from "../../data/switcher-data/switcher-data";
import Link from 'next/link';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import store from '@/shared/redux/store';

const LandingSwitcher = ({ local_varaiable, ThemeChanger }:any) => {
    useEffect(() => {
        console.log(ThemeChanger);
        switcherdata.LocalStorageBackup(ThemeChanger);
    }, []);

	const Switcherclose = () => {
		if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
			document.querySelector(".offcanvas-end")?.classList.remove("show");
			document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
			document.querySelector(".switcher-backdrop")?.classList.add("d-none");
		}
    }
    const customStyles:any = ` ${local_varaiable.colorPrimaryRgb != '' ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ''};`;

    useEffect(() => {
      const theme = store.getState();
      ThemeChanger({
          ...theme,
          "dataNavStyle": "menu-click",
          "dataNavLayout": "horizontal"
      });
      return () => {
          ThemeChanger({
              ...theme,
              "dataNavStyle": "",
              "dataNavLayout": `${localStorage.ynexlayout == 'horizontal' ? 'horizontal' : 'vertical'}`
          });
      };
  }, []);

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <html dir={local_varaiable.dir}
                        data-theme-mode={local_varaiable.dataThemeMode}
                        data-menu-position={local_varaiable.dataMenuPosition}
                        data-nav-layout={local_varaiable.dataNavLayout}
                        data-nav-style={local_varaiable.dataNavStyle}
                        data-toggled={local_varaiable.toggled}
                        style={customStyles}
                    >
                    </html>

                </Helmet>
                
                <div className="switcher-backdrop d-none" onClick={() => {Switcherclose();}}></div>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => {Switcherclose();
					}}></button>
                    </div>

                    <div className="offcanvas-body">
                                <div>

                                    <div className="">
                                        <p className="switcher-style-head">Theme Color Mode:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                                        Light
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                                        checked={local_varaiable.dataThemeMode !== 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Light(ThemeChanger)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                        Dark
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                                        checked={local_varaiable.dataThemeMode == 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Dark(ThemeChanger)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Directions:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                                        LTR
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr"
                                                        checked={local_varaiable.dir == 'ltr'} onChange={(_e) => { }}
                                                        onClick={() => { switcherdata.Ltr(ThemeChanger); }} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                                        RTL
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="direction" id="switcher-rtl"
                                                        checked={local_varaiable.dir == 'rtl'} onChange={(_e) => { }}
                                                        onClick={() => { switcherdata.Rtl(ThemeChanger); }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-colors">
                                            <p className="switcher-style-head">Theme Primary:</p>
                                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-1" type="radio"
                                                      checked={local_varaiable.colorPrimaryRgb == '58, 88, 146'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor1(ThemeChanger)}
                                                        name="theme-primary" id="switcher-primary" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-2" type="radio"
                                                     checked={local_varaiable.colorPrimaryRgb == '92, 144, 163'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor2(ThemeChanger)}
                                                        name="theme-primary" id="switcher-primary1" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                                     checked={local_varaiable.colorPrimaryRgb == '161, 90, 223'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor3(ThemeChanger)}
                                                        id="switcher-primary2" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                                      checked={local_varaiable.colorPrimaryRgb == '78, 172, 76'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor4(ThemeChanger)}
                                                        id="switcher-primary3" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                                     checked={local_varaiable.colorPrimaryRgb == '223, 90, 90'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor5(ThemeChanger)}
                                                        id="switcher-primary4" />
                                                </div>
                                                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                                    <div className='theme-container-primary'>
                                                        <button className="">nano</button>
                                                    </div>
                                                    <div className='pickr-container-primary'>
                    <div className='pickr'>
                      <button className='pcr-button' onClick={(ele:any) => {
                        if (ele.target.querySelector("input")) {
                          ele.target.querySelector("input").click();
                        }
                      }}>
                        <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                      </button>

                    </div>
                  </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="d-flex justify-content-between canvas-footer flex-wrap">
                                    <Link href="#!" id="reset-all" className="btn btn-danger m-1 w-100"
                                        onClick={() => switcherdata.Reset1(ThemeChanger)}>Reset</Link>
                                </div>
                    </div>

                </div>
                </HelmetProvider>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(LandingSwitcher);
