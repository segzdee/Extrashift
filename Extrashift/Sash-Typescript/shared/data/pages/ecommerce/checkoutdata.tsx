import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
const Select = dynamic(() => import('react-select'), { ssr: false });


const Citydata = [
	{ value: "Georgetown", label: "Georgetown" },
	{ value: "Alexandria", label: "Alexandria" },
	{ value: "Rockville", label: "Rockville" },
	{ value: "Frederick", label: "Frederick" },
]

const Statedata = [
	{ value: "Washington,D.C", label: "Washington,D.C" },
	{ value: "California", label: "California" },
	{ value: "Texas", label: "Texas" },
	{ value: "Alaska", label: "Alaska" },
]
//Basic start
const Wizard = ({ step: currentIndex, ...props }: any) => {
	const steps: any = React.Children.toArray(props.children);
	const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
	const nextStep: any = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

	return (
		<div>

			<nav className="steps basicsteps flex-wrap">
				{steps.map((step: any, index: any) => (
					<Button
						key={step.props.number}
						onClick={() => props.onChange(index)}
						className={getClsNavBtn(index === currentIndex)}
					>
						<span className="number me-2 d-inline-flex">{step.props.number}</span>
						<p className="mb-0">{step.props.title}</p>
					</Button>
				))}
			</nav>

			{steps[currentIndex]}

			<div className=" p-3 d-flex justify-content-between gap-2">
				<Button 
					visible={prevStep}
					onClick={() => props.onChange(currentIndex - 1)}
					title={prevStep.description}
				>
					Back To Shipping
				</Button>
				<Button
					visible={nextStep}
					onClick={() => props.onChange(currentIndex + 1)}
					title={nextStep.description}
				>
					Continue Payment
				</Button>
			</div>
		</div>
	);
};
const Step = ({ children }: any) => children;

function getClsNavBtn(active: any) {
	return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }: any) {
	return (

		<button
			className={visible ? "btn btn-primary " : "invisible"}
			{...props}
		/>

	);
}
interface State {
	showModal: boolean;
	step: number;
}
export class Basicwizard extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			showModal: false,
			step: 0,
		};
	}

	openModal = () => {
		this.setState({ showModal: true });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	handleStep = (step: number) => {
		this.setState({ step });
	};

	render() {

		return (
			<Wizard step={this.state.step} onChange={this.handleStep}>
				<Step title={<><i className="ri-truck-line basicstep-icon align-middle me-2 d-inline-block"></i> Shipping</>} number="1">
					<section className="Basicwizard ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Shipping Address :</div>
								<div className="mt-sm-0 mt-2">
									<Button aria-label="button" type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal-new-address" onClick={this.openModal}>
										<i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address</Button>
									<Modal centered size="lg" className="modal fade" show={this.state.showModal} onHide={this.closeModal} id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address" aria-hidden="true">

										<Modal.Header className="" closeButton>
											<h6 className="modal-title" id="staticBackdropLabel">New Address
											</h6>
										</Modal.Header>
										<Modal.Body className="">
											<div className="row gy-3">
												<Col xl={6}>
													<Form.Label htmlFor="fullname-new">Full Name</Form.Label>
													<Form.Control type="text" id="fullname-new" placeholder="Full Name" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="email-new">Email</Form.Label>
													<Form.Control type="email" id="email-new" placeholder="email" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="phonenumber-new">Phone Number</Form.Label>
													<Form.Control type="number" id="phonenumber-new" placeholder="Phone" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="address-new">Address</Form.Label>
													<Form.Control type="text" id="address-new" placeholder="Address" />
												</Col>
												<Col xl={12}>
													<Row>
														<Col xl={6}>
															<Form.Label htmlFor="pincode-new" className="form-label">Pincode</Form.Label>
															<Form.Control type="number" id="pincode-new" placeholder="Pincode" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="city-new" className="form-label">City</Form.Label>
															<Form.Control type="text" id="city-new" placeholder="City" />
														</Col>
														<Col xl={6} className="mt-3">
															<Form.Label htmlFor="state-new" className="form-label">State</Form.Label>
															<Form.Control type="text" id="state-new" placeholder="State" />
														</Col>
														<Col xl={6} className="mt-3">
															<Form.Label htmlFor="country-new" className="form-label">Country</Form.Label>
															<Form.Control type="text" id="country-new" placeholder="Country" />
														</Col>
													</Row>
												</Col>
											</div>
										</Modal.Body>
										<Modal.Footer className="modal-footer">
											<Button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={this.closeModal}>Close</Button>
											<Button type="button" className="btn btn-success">Save
												Address</Button>
										</Modal.Footer>
									</Modal>
								</div>
							</div>
							<div className="row gy-4 mb-4">
								<Col xl={6}>
									<div className="form-floating">
										<Form.Control type="text" className="" id="fullname-add" defaultValue="Json Taylor" placeholder="Name" />
										<Form.Label htmlFor="fullname-add">Full Name</Form.Label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<Form.Control type="email" className="" id="email-add" defaultValue="jsontaylor2413@gmail.com" placeholder="name@example.com" />
										<Form.Label htmlFor="email-add">Email</Form.Label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<Form.Control type="email" className=" is-valid" id="phoneno-add" defaultValue="(555) 555-1234" placeholder="1234-XX-XXXX" />
										<Form.Label htmlFor="phoneno-add">Phone No</Form.Label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<Form.Control as="textarea" placeholder="Address Here" id="address-add"
											defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA"></Form.Control>
										<Form.Label htmlFor="address-add">Address</Form.Label>
									</div>
									<div className="form-check mt-1">
										<input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck" required defaultChecked />
										<Form.Label className="form-check-label text-success" htmlFor="invalidCheck">
											Same as Billing Address ?
										</Form.Label>
									</div>
								</Col>
								<Col xl={12}>
									<div className="row gy-2">
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className=" is-valid" id="pincode-add" defaultValue="20071" placeholder="Name" />
												<Form.Label htmlFor="pincode-add">Pin Code</Form.Label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="" id="city-add" defaultValue="Georgetown" placeholder="Name" />
												<Form.Label htmlFor="city-add">City</Form.Label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="" id="state-add" defaultValue="Washington, D.C" placeholder="Name" />
												<Form.Label htmlFor="state-add">State</Form.Label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="" id="country-add" defaultValue="USA" placeholder="Name" />
												<Form.Label htmlFor="country-add">Country</Form.Label>
											</div>
										</div>
									</div>
								</Col>
							</div>
							<div className="row gy-3">
								<p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input" defaultChecked />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">UPS</p>
													<p className="text-muted fs-11 mb-0">Delivered By 24,Nov</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$9.99
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">USPS</p>
													<p className="text-muted fs-11 mb-0">Delivered By 22,Nov</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$10.49
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method3" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">FedEx</p>
													<p className="text-muted fs-11 mb-0">Delivered Tomorrow</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$12.29
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method4" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">DHL</p>
													<p className="text-muted fs-11 mb-0">Delivered Today</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$18.99
												</div>
											</div>
										</div>
									</div>
								</Col>
							</div>
						</div>
					</section>
				</Step>

				<Step title={<><i className="ri-user-3-line basicstep-icon align-middle me-2 d-inline-block"></i> Personal Details </>} number="2">
					<section className="Basicwizard ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Personal Details :</div>
							</div>
							<div className="row gy-4">
								<div className="col-xl-6">
									<Form.Label htmlFor="firstname-personal" className="form-label">First Name</Form.Label>
									<Form.Control type="text" className="" id="firstname-personal" placeholder="First Name" defaultValue="Json" />
								</div>
								<div className="col-xl-6">
									<Form.Label htmlFor="lastname-personal" className="form-label">Last Name</Form.Label>
									<Form.Control type="text" className="" id="lastname-personal" placeholder="Last Name" defaultValue="Taylor" />
								</div>
								<div className="col-xl-6">
									<Form.Label htmlFor="email-personal" className="form-label">Email</Form.Label>
									<Form.Control type="email" className="" id="email-personal" placeholder="xyz@example.com" defaultValue="" />
								</div>
								<div className="col-xl-6">
									<Form.Label htmlFor="phoneno-personal" className="form-label">Phone no</Form.Label>
									<Form.Control type="text" className="" id="phoneno-personal" placeholder="(555)-555-1234" defaultValue="" />
								</div>
								<div className="col-xxl-2">
									<Form.Label htmlFor="pincode-personal" className="form-label">Pincode</Form.Label>
									<Form.Control type="text" className="" id="pincode-personal" placeholder="200017" defaultValue="" />
								</div>
								<div className="col-xxl-4">
									<Form.Label htmlFor="choices-single-default" className="form-label">City</Form.Label>
									<Select name="colors" options={Citydata} className="basic-multi-select"
										menuPlacement='auto' classNamePrefix="Select2" placeholder="Georgetown"
									/>
								</div>
								<div className="col-xxl-4">
									<Form.Label htmlFor="choices-single-default1" className="form-label">State</Form.Label>
									<Select name="colors" options={Statedata} className="basic-multi-select"
										menuPlacement='auto' classNamePrefix="Select2" placeholder="Washington,D.C"
									/>
								</div>
								<div className="col-xxl-2">
									<Form.Label htmlFor="country-personal" className="form-label">Country</Form.Label>
									<Form.Control type="text" className="" id="country-personal" placeholder="Country" defaultValue="USA" />
								</div>
								<div className="col-xl-12">
									<Form.Label htmlFor="text-area" className="form-label">Address</Form.Label>
									<Form.Control as="textarea" className="" id="text-area" rows={4} />
									<div className="form-check mt-1">
										<input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck1" required defaultChecked />
										<Form.Label className="form-check-label text-success fs-12" htmlFor="invalidCheck1">
											Same as Shipping Address Address ?
										</Form.Label>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Step>
				<Step title={<><i className="ri-bank-card-line basicstep-icon align-middle me-2 d-inline-block"></i> Payment  </>} number="3">
					<section className="card-body Basicwizard p-0 ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Payment Details :</div>
							</div>
							<Row>
								<Col xl={12}>
									<div className="mb-3">
										<Form.Label className="form-label">Delivery Address</Form.Label>
										<div className="input-group">
											<Form.Control type="text" className="" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
											<button type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</button>
										</div>
									</div>
									<div className="card custom-card border shadow-none mb-3">
										<div className="card-header">
											<div className="card-title">
												Payment Methods
											</div>
										</div>
										<div className="card-body">
											<div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
												<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio1" />
												<Form.Label className="btn btn-outline-light text-default" htmlFor="btnradio1">C.O.D(Cash on delivery)</Form.Label>
												<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2" />
												<Form.Label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</Form.Label>
												<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
												<Form.Label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</Form.Label>
											</div>
											<div className="row gy-3">
												<Col xl={12}>
													<Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
													<Form.Control type="text" className="" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
												</Col>
												<Col xl={12}>
													<Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
													<Form.Control type="text" className="" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
													<Form.Control type="text" className="" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
													<Form.Control type="text" className="" id="payment-cvv" placeholder="XXX" defaultValue="341" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
													<Form.Control type="text" className="" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
													<Form.Label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</Form.Label>
												</Col>
												<Col xl={12}>
													<div className="form-check">
														<input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
														<Form.Label className="form-check-label" htmlFor="payment-card-save">
															Save this card
														</Form.Label>
													</div>
												</Col>
											</div>
										</div>
										<Card.Footer>
											<div className="row gy-3">
												<p className="fs-15 fw-semibold mb-1">Other Cards :</p>
												<Col md={6} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
													<Form.Check id="payment-card1" name="payment-cards" type="radio" className="" defaultChecked/>
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src="../../../../assets/images/ecommerce/2.png" alt="" className="avatar avatar-lg" />
																</div>
																<div className="saved-card-details"> <p className="mb-0 fw-semibold me-2">XXXX - XXXX - XXXX - 7646</p></div>
															</div>
														</div>
													</div>
												</Col>
												<Col md={6} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
													<Form.Check id="payment-card1" name="payment-cards" type="radio" className=""/>
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src="../../../../assets/images/ecommerce/3.png" alt=" " className="avatar avatar-lg" />
																</div>
																<div className="saved-card-details"> <p className="mb-0 fw-semibold me-2">XXXX - XXXX - XXXX - 9556</p></div>
															</div>
														</div>
													</div>
												</Col>

											</div>
										</Card.Footer>
									</div>
								</Col>
							</Row>
						</div>

					</section>
				</Step>
				<Step title={<><i className="ri-checkbox-circle-line basicstep-icon align-middle me-2 d-inline-block"></i> Confirmation  </>} number="4">
					<section className="card-body Basicwizard ">
						<div className="p-sm-5 checkout-payment-success my-3">
							<div className="mb-5">
								<h5 className="text-success fw-semibold">Payment Successful... &#128522;</h5>
							</div>
							<div className="mb-5">
								<img src="../../../../assets/images/ecommerce/1.png" alt="" />
							</div>
							<div className="mb-4">
								<p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <Link className="link-success" href="#!"><u>Track Order</u></Link></p>
								<p className="text-muted">Thankyou for shopping with us.</p>
							</div>
							<Link href="/components/pages/ecommerce/products" className="btn btn-success">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
						</div>
					</section>
				</Step>
			</Wizard>
		);
	}
}
//Basic end
