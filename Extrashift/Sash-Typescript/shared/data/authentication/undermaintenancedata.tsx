import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';

const AfterComplete = () => <span>You are good to go!</span>;
const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <Row className='row mt-4 mb-5 gy-xxl-0 gy-3 justify-content-center'>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <h4 className="fw-semibold mb-2 text-fixed-white">{days}</h4>
            <p className='mb-1 fs-12'>Days</p>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <h4 className="fw-semibold mb-2 text-fixed-white">{hours}</h4>
            <p className='mb-1 fs-12'>Hours</p>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <h4 className="fw-semibold mb-2 text-fixed-white">{minutes}</h4>
            <p className='mb-1 fs-12'>Minutes</p>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <h4 className="fw-semibold mb-2 text-fixed-white">{seconds}</h4>
            <p className='mb-1 fs-12'>Seconds</p>
          </div>
        </Col>
      </Row>
    );
  }
};

export function DayCounter() {
  return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}
