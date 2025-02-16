import React from 'react';
import { Card, Tab, Nav, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Rightside = () => {

  const switcherOpen = () => {
    document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
  };

  let { basePath } = useRouter();

  return (

  <div >
    <div className="sidebar sidebar-right sidebar-animate">
      <Card className="panel panel-primary mb-0 shadow-none border-0">
        <div className="tab-menu-heading border-0 d-flex p-3">
          <div className="card-title mb-0"><i className="fe fe-bell me-2"></i><span className="pulse"></span>Notifications</div>
          <div className="card-options ms-auto" onClick={() => switcherOpen()}>
            <Link href="#!" className="sidebar-icon text-end float-end me-3 mb-1"
              data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i
                className="fe fe-x text-primary text-white"></i></Link>
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu">
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
                    <div className="fw-semibold">Feeds</div>
                    <div className="card-body pt-2">
                      <div className="browser-stats">
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span className="feeds avatar-circle brround bg-primary-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
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
                        <div className="row">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-info brround bg-info-transparent"><i
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
                    <div className="p-3 fw-semibold">Settings</div>
                    <div className="card-body pt-2">
                      <div className="browser-stats">
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span className="feeds avatar-circle brround bg-primary-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
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
                        <div className="row mb-4">
                          <div className="col-sm-2 mb-sm-0 mb-3">
                            <span
                              className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
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
                          <img className="avatar avatar-md brround cover-image" alt='user-2' src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/2.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Addie Minstra</div>
                            <p className="mb-0 fs-12 text-muted"> Hey! there{` I'`} am available.... </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-11' src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/11.jpg`} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Rose Bush</div>
                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-10'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/10.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Claude Strophobia</div>
                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-13'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/13.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Eileen Dover</div>
                            <p className="mb-0 fs-12 text-muted"> New product Launching... </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-12'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/12.jpg`} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Willie Findit</div>
                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-15'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/15.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Manny Jah</div>
                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-4'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/4.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Cherry Blossom</div>
                            <p className="mb-0 fs-12 text-muted"> Hey! there {`I' `}am available....</p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <div className="pt-3 fw-semibold ps-5">Yesterday</div>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-7'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/7.jpg`} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Simon Sais</div>
                            <p className="mb-0 fs-12 text-muted">Schedule Realease...... </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-9'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/9.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Laura Biding</div>
                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-2'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/2.jpg`} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Addie Minstra</div>
                            <p className="mb-0 fs-12 text-muted">Contact me for details....</p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-9'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/9.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Ivan Notheridiya</div>
                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-14'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/14.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Dulcie Veeta</div>
                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-11'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/11.jpg`} />
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                              data-target="#chatmodel">Florinda Carasco</div>
                            <p className="mb-0 fs-12 text-muted">New product Launching...</p>
                          </Link>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md brround cover-image" alt='user-11'
                            src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/4.jpg`} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <Link href={`/components/pages/chat`}>
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
                            className="fw-semibold"> Project Management</Link></p>
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
                            className="fw-semibold"> AngularJS Template</Link></p>
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
                            className="fw-semibold"> AngularJS Template</Link></p>
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
                            className="fw-semibold"> Integrated management</Link></p>
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
                            className="fw-semibold"> Integrated management</Link></p>
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
                            className="fw-semibold"> Project Management</Link></p>
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
          </div>
        </div>
      </Card>
    </div>
  </div>
  );
  };

export default Rightside;

