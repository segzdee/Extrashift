import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Badge, Button, Row, Col } from 'react-bootstrap';
import ShowCode from '@/shared/layout-components/showcode/showcode';
import { Outlinebadgesdata, badges1, badgesdata } from '@/shared/data/ui-elements/badgesdata';
import { badge1, badge10, badge11, badge12, badge13, badge14, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9 } from '@/shared/data/prismdata/uielements-prism';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';


const BadgesPills = () => {

	return (
		<div >
			<Seo title="Badge" />
			<Pageheader title="Badge" heading="Ui Elements" active="Badge" />
			<Row>
				<Col xl={6}>
					<ShowCode title="Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge1}>
						{badgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class}`}>{badge.heading}</Badge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Pill badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge2}>
						{badgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Light Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge3}>
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Light Pill Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge4}>
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</ShowCode>

				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Outline Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge5}>
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
						))}
					</ShowCode>

				</Col>
				<Col xl={6}>
					<ShowCode title="Outline Pill Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge6}>
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Gradient Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge7}>
						{badges1.map((badge1) => (
							<Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient`}>{badge1.heading}</Badge>
						))}
					</ShowCode>

				</Col>
				<Col xl={6}>
					<ShowCode title="Gradient Pill Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge8}>
						{badges1.map((badge1) => (
							<Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient rounded-pill`}>{badge1.heading}</Badge>
						))}
					</ShowCode>

				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<ShowCode title="Buttons With Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge9}>
						<Button variant='danger' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-danger">777</Badge>
						</Button>
						<Button variant='primary' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-primary">4</Badge>
						</Button>
						<Button variant='info' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-info">32</Badge>
						</Button>
						<Button variant='warning' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-warning">7</Badge>
						</Button>
						<Button variant='success' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-success">12</Badge>
						</Button>
						<Button variant='secondary' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-secondary">7</Badge>
						</Button>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Buttons With Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge10}>
						<Button variant='primary' type="button" className=" my-1 me-2">
							Notifications <Badge bg="secondary" className="ms-2 ">4</Badge>
						</Button>
						<Button variant='secondary' type="button" className=" my-1 me-2">
							Notifications <Badge bg="primary" className="ms-2 ">7</Badge>
						</Button>
						<Button variant='success' type="button" className=" my-1 me-2">
							Notifications <Badge bg="danger" className="ms-2 ">12</Badge>
						</Button>
						<Button variant='info' type="button" className=" my-1 me-2">
							Notifications <Badge bg="warning" className="ms-2 ">32</Badge>
						</Button>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Outline Button Badges"  customCardBodyClass="d-flex flex-wrap gap-2" code={badge11}>
						<Button variant='outline-primary' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">4</Badge>
						</Button>
						<Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">7</Badge>
						</Button>
						<Button variant='outline-success' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">12</Badge>
						</Button>
						<Button variant='outline-info' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">32</Badge>
						</Button>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Headings"  customCardBodyClass="" code={badge12}>
						<h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
						<h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
						<h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
						<h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
						<h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
						<h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<ShowCode title="Positioned Badges"  customCardBodyClass="d-flex flex-wrap gap-5" code={badge13}>
								<Button variant='primary' type="button" className="btn  position-relative">
									Inbox
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
										99+
										<span className="visually-hidden">unread messages</span>
									</span>
								</Button>
								<Button variant='secondary' type="button" className="position-relative">
									Profile
									<span
										className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</Button>
								<span className="avatar">
									<img src="../../../assets/images/faces/2.jpg" alt="img" />
									<span
										className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<span className="avatar avatar-rounded">
									<img src="../../../assets/images/faces/15.jpg" alt="img" />
									<span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light   rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>

								<span className="avatar avatar-rounded">
									<img src="../../../assets/images/faces/10.jpg" alt="img" />
									<span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
							</ShowCode>

						</Col>
						<Col xl={12} className="">
							<ShowCode title="Custom Badges"  customCardBodyClass="d-flex align-items-center flex-wrap" code={badge14}>
								<p className="mb-xxl-0 badge bg-outline-secondary custom-badge fs-15 me-5">
									<i className="ti ti-flame me-1"></i>Hot</p>
								<p className="mb-xxl-0 icon-badge me-5">
									<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
									<span className="badge rounded-pill bg-success">14</span>
								</p>
								<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
								<p className="mb-xxl-0 text-badge me-5">
									<span className="text fs-18">Inbox</span>
									<Badge className="badge rounded-pill bg-success">32</Badge>
								</p>
							</ShowCode>
						</Col>
					</Row>
				</Col>
			</Row>

		</div>
	);
};
BadgesPills.layout = "Contentlayout";
export default BadgesPills;

