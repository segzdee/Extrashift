
                 /*------ Avatars (prism-code for showcode purpose) Start ------*/

export const avatar1 = `<span className="avatar me-2 avatar-radius-0">
<img src="../../../assets/images/faces/1.jpg" alt="img" />
</span>
<span className="avatar me-2">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span>
<span className="avatar me-2 avatar-rounded">
<img src="../../../assets/images/faces/3.jpg" alt="img" />
</span>`
export const avatar2 = `{sizesdata.map((idx) => (
    <span className={'avatar avatar-&#60{idx.sizes} me-2'} key={Math.random()}>
        <img src={idx.src1} alt="img" />
    </span>
))}`
export const avatar3 = `	<span className="avatar avatar-xs me-2 avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge bg-success rounded-pill avatar-badge"><i className="fe fe-camera"></i></a>
</span>
<span className="avatar avatar-sm me-2 avatar-rounded">
<img src="../../../assets/images/faces/3.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge rounded-pill bg-secondary avatar-badge"><i className="fe fe-edit"></i></a>
</span>
<span className="avatar avatar-md me-2 avatar-rounded">
<img src="../../../assets/images/faces/14.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge rounded-pill bg-warning avatar-badge"><i className="fe fe-plus"></i></a>
</span>
<span className="avatar avatar-lg me-2 avatar-rounded">
<img src="../../../assets/images/faces/13.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge rounded-pill bg-info avatar-badge"><i className="fe fe-edit"></i></a>
</span>
<span className="avatar avatar-xl me-2 avatar-rounded">
<img src="../../../assets/images/faces/15.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge rounded-pill bg-success avatar-badge"><i className="fe fe-camera"></i></a>
</span>
<span className="avatar avatar-xxl me-2 avatar-rounded">
<img src="../../../assets/images/faces/9.jpg" alt="img" />
<a aria-label="anchor" href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-plus"></i></a>
</span>`
export const avatar4 = `{Statusdata.map((idx) => (
    <span className={'avatar avatar-&#60{idx.sizes} me-2 online avatar-rounded'} key={Math.random()}>
        <img src={idx.src1} alt="img" />
    </span>
))}`
export const avatar5 = `{Statusdata.map((idx) => (
    <span className={'avatar avatar-&#60{idx.sizes} me-2 offline avatar-rounded'} key={Math.random()}>
        <img src={idx.src1} alt="img" />
    </span>
))}`
export const avatar6 = `{Numbersdata.map((idx) => (
    <span className={'avatar avatar-&#6{idx.sizes} me-2 avatar-rounded'} key={Math.random()}>
        <img src={idx.src1} alt="img" />
        <span className={'badge rounded-pill bg-&#6{idx.color} avatar-badge'}>{idx.badge}</span>
    </span>
))}`
export const avatar7 = `	<span className="mb-1 avatar avatar-xs me-2 bg-primary">
xs
</span>
<span className="mb-1 avatar avatar-sm me-2 bg-secondary">
SM
</span>
<span className="mb-1 avatar avatar-md me-2 bg-warning">
MD
</span>
<span className="mb-1 avatar avatar-lg me-2 bg-danger">
LG
</span>
<span className="mb-1 avatar avatar-xl me-2 bg-success">
XL
</span>
<span className="mb-1 avatar avatar-xxl me-2 bg-info">
XXL
</span>`
export const avatar8 = `<div className="avatar-list-stacked">
{Avatarstacked.map((idx) => (
    <span className="avatar" key={Math.random()}>
        <img src={idx.src1} alt="img" />
    </span>
))}
    <a className="avatar bg-primary text-fixed-white" href="#!">
        +8
    </a>
</div>`
export const avatar9 = `<div className="avatar-list-stacked">
{Avatarstacked.map((idx) => (
    <span className="avatar avatar-rounded" key={Math.random()}>
        <img src={idx.src1} alt="img" />
    </span>
))}
    <a className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
        +8
    </a>
</div>`
                 /*------ Avatars (prism-code for showcode purpose) End ------*/

                 /*------ Borders (prism-code for showcode purpose) Start ------*/

export const border1 = ` <span className="border border-container"></span>
<span className="border-top border-container"></span>
<span className="border-end border-container"></span>
<span className="border-bottom border-container"></span>
<span className="border-start border-container"></span>`

export const border2 = `  <span className="border-0 border-container"></span>
<span className="border border-top-0 border-container"></span>
<span className="border border-end-0 border-container"></span>
<span className="border border-bottom-0 border-container"></span>
<span className="border border-start-0 border-container"></span>`

export const border3 = `  <span className="border border-container border-1"></span>
<span className="border border-container border-2"></span>
<span className="border border-container border-3"></span>
<span className="border border-container border-4"></span>
<span className="border border-container border-5"></span>`

export const border4 = `  <span className="border border-container border-primary"></span>
<span className="border border-container border-secondary"></span>
<span className="border border-container border-success"></span>
<span className="border border-container border-danger"></span>
<span className="border border-container border-warning"></span>
<span className="border border-container border-info"></span>
<span className="border border-container border-light"></span>
<span className="border border-container border-dark"></span>
<span className="border border-container border-white"></span>`

export const border5 = `  <div className="mb-4">
<label htmlFor="exampleFormControlInput1" className="form-label">Email
    address</label>
<input type="email" className="form-control border-success"
    id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
Below Shows Danger Border
</div>
<div
className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
Customizing borders with backgrounud colors
</div>`

export const border6 = ` <div className="border border-success p-2 mb-2">This is default success border</div>
<div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
    opacity
    success border
</div>
<div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
    opacity
    success border
</div>
<div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
    opacity
    success border
</div>
<div className="border border-success p-2 border-opacity-10">This is 10% opacity
    success
    border
</div>`

export const border7 = ` <img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-top" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-end" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-bottom" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-start" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-circle" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img  rounded-pill" alt="..." />`

export const border8 = `  <img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
<img src="../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />`

                 /*------ Borders (prism-code for showcode purpose) End ------*/



