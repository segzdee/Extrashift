
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

export const Galleryprofile = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-26.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-32.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-31.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={6} sm={12} className="col-12">
                    <Link href="#!" className="glightbox card" data-gallery="gallery1">
                        <img src="../../../assets/images/media/media-30.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: "../../../assets/images/media/media-40.jpg" }, { src: "../../../assets/images/media/media-41.jpg" },
                { src: "../../../assets/images/media/media-42.jpg" }, { src: "../../../assets/images/media/media-43.jpg" },
                { src: "../../../assets/images/media/media-44.jpg" }, { src: "../../../assets/images/media/media-45.jpg" },
                { src: "../../../assets/images/media/media-46.jpg" }, { src: "../../../assets/images/media/media-60.jpg" }
                , { src: "../../../assets/images/media/media-26.jpg" }, { src: "../../../assets/images/media/media-32.jpg" }
                , { src: "../../../assets/images/media/media-31.jpg" }, { src: "../../../assets/images/media/media-30.jpg" }

                ]}
            />
        </>
    );
};

interface Project {
    id:number;
    status:string;
    color:string;
    color1:string;
    heading:string;
}
export const Projectsdata:Project[] = [
    {id:1, status:"pending", color:"info", color1:"secondary", heading:"Testing"},
    {id:2, status:"completed", color:"success", color1:"success", heading:"Creating Home Page Website"},
    {id:3, status:"pending", color:"info", color1:"primary", heading:"Data table Design"},
    {id:4, status:"completed", color:"success", color1:"success", heading:"Design Horizontal Layout"},
    {id:5, status:"Inprogress", color:"pink", color1:"primary", heading:"Fix Header issue"},
    {id:6, status:"Inprogress", color:"pink", color1:"primary", heading:"Create a blog post"},
    {id:7, status:"pending", color:"info", color1:"secondary", heading:"Testing"},
    {id:8, status:"completed", color:"success", color1:"primary", heading:"Fix the Data Table Issue"},
    {id:9, status:"pending", color:"info", color1:"primary", heading:"Fix the Data Table Issue"},
    {id:10, status:"Inprogress", color:"pink", color1:"primary", heading:"Data table Design"},
    {id:11, status:"pending", color:"info", color1:"primary", heading:"Fix the Data Table Issue"},
    {id:12, status:"Inprogress", color:"pink", color1:"primary", heading:"Home page design"},
]

interface Friend {
    id:number;
    src1:string;
    heading:string;
    mail:string;
    postion:string;
    color:string;
}
export const Friendsdata:Friend[] = [
    {id:1, src1:"../../../assets/images/faces/2.jpg", heading:"Samantha May", mail:"samanthamay2912@gmail.com", postion:"Team Member", color:"info"},
    {id:2, src1:"../../../assets/images/faces/15.jpg", heading:"Andrew Garfield", mail:"andrewgarfield98@gmail.com", postion:"Team Lead", color:"success"},
    {id:3, src1:"../../../assets/images/faces/5.jpg", heading:"Jessica Cashew", mail:"jessicacashew143@gmail.com", postion:"Team Member", color:"info"},
    {id:4, src1:"../../../assets/images/faces/11.jpg", heading:"Simon Cowan", mail:"jessicacashew143@gmail.com", postion:"Team Manager", color:"warning"},
    {id:5, src1:"../../../assets/images/faces/7.jpg", heading:"Amanda nunes", mail:"amandanunes45@gmail.com", postion:"Team Member", color:"info"},
    {id:6, src1:"../../../assets/images/faces/12.jpg", heading:"Mahira Hose", mail:"mahirahose9456@gmail.com", postion:"Team Member", color:"info"},
    {id:7, src1:"../../../assets/images/faces/2.jpg", heading:"Samantha May", mail:"samanthamay2912@gmail.com", postion:"Team Member", color:"info"},
    {id:8, src1:"../../../assets/images/faces/15.jpg", heading:"Andrew Garfield", mail:"andrewgarfield98@gmail.com", postion:"Team Lead", color:"warning"},
    {id:9, src1:"../../../assets/images/faces/5.jpg", heading:"Jessica Cashew", mail:"jessicacashew143@gmail.com", postion:"Team Member", color:"info"},
]

//Skills
interface Skill {
    id:number;
    heading:string;
}
export const Skilldata:Skill[] = [
    {id:1, heading:"Cloud computing"},
    {id:2, heading:"Data analysis"},
    {id:3, heading:"DevOps"},
    {id:4, heading:"Machine learning"},
    {id:5, heading:"Programming"},
    {id:6, heading:"Security"},
    {id:7, heading:"Python"},
    {id:8, heading:"JavaScript"},
    {id:9, heading:"Ruby"},
    {id:10, heading:"PowerShell"},
    {id:11, heading:"Statistics"},
    {id:12, heading:"SQL"},
]