
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

export const Gallerylist1 = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-27.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-28.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-29.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-30.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-31.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-32.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../../assets/images/media/media-33.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../../assets/images/media/media-40.jpg" }, { src: "../../../../assets/images/media/media-41.jpg" },
                { src: "../../../../assets/images/media/media-27.jpg" }, { src: "../../../../assets/images/media/media-28.jpg" },
                { src: "../../../../assets/images/media/media-29.jpg" }, { src: "../../../../assets/images/media/media-30.jpg" },
                { src: "../../../../assets/images/media/media-31.jpg" }, { src: "../../../../assets/images/media/media-32.jpg" },{ src: "../../../../assets/images/media/media-33.jpg" }

                ]}
            />
        </>
    );
};
