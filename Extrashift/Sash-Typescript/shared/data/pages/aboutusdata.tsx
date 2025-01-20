
//Meet our creative minds
interface Create {
    id:number;
    src1:string;
    class:string;
    role:string;
}
export const Creativedata:Create[] = [
    {id:1, src1:"../../../assets/images/faces/2.jpg", class:"Mike Rowe-Soft", role:"Web designer"},
    {id:2, src1:"../../../assets/images/faces/1.jpg", class:"Florinda Carasco", role:"Frontend Developer"},
    {id:3, src1:"../../../assets/images/faces/9.jpg", class:"Dulcie Veeta", role:"Java Developer"},
    {id:4, src1:"../../../assets/images/faces/4.jpg", class:"Simon Sais", role:"Python Developer"},
]

//Our Services 
interface Service {
    id:number;
    class:string;
    color:string;
    icon:string;
}
export const Servicedata:Service[] = [
    {id:1, class:"Branding", color:"primary", icon:"users"},
    {id:2, class:"Development", color:"secondary", icon:"rocket"},
    {id:3, class:"Social Media", color:"success", icon:"brand-instagram"},
    {id:4, class:"E-Commerce", color:"danger", icon:"shopping-cart"},
]