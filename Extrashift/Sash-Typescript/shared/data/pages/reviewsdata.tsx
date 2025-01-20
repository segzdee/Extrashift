//Review Style-1
interface Review {
    id:number;
    src1:string;
    heading:string;
    hrs:string;
    like:string;
    dislike:string;
}
export const Reviewstyle:Review[] = [
    {id:1, src1:"../../../assets/images/faces/15.jpg", heading:"Alex Carey", hrs:"18 hrs ago", like:"150", dislike:"10"},
    {id:2, src1:"../../../assets/images/faces/1.jpg", heading:"Adom Sharayi", hrs:"5 days ago", like:"120", dislike:"30"},
    {id:3, src1:"../../../assets/images/faces/2.jpg", heading:"Davide Jonese", hrs:"25 days ago", like:"140", dislike:"60"},
    {id:4, src1:"../../../assets/images/faces/6.jpg", heading:"Alisaben Avirayi", hrs:"28 day ago", like:"100", dislike:"20"},
    {id:5, src1:"../../../assets/images/faces/5.jpg", heading:"Karen Vally", hrs:"1 month ago", like:"200", dislike:"50"},
    {id:6, src1:"../../../assets/images/faces/8.jpg", heading:"Bollyes vrasu", hrs:"3 months ago", like:"170", dislike:"40"},
]

//Review Style-2
interface Review1 {
    id:number;
    heading:string;
    data:string;
    month:string;
    rating:string;
    src1:string;
}
export const Reviewstyle2:Review1[] = [
    {id:1, heading:"Jhonson Smith", data:"CHIEF SECRETARY MBIO", month:"16 hrs ago",rating:"half-fill", src1:"../../../assets/images/faces/10.jpg"},
    {id:2, heading:"Dwayne Stort", data:"CEO ARMEDILLO", month:"22 days ago",rating:"line", src1:"../../../assets/images/faces/12.jpg"},
    {id:3, heading:"Jasmine Kova", data:"AGGENT AMIO", month:"26 days ago",rating:"half-fill", src1:"../../../assets/images/faces/3.jpg"},
    {id:4, heading:"Dolph MR", data:"CEO MR BRAND", month:"1 month ago",rating:"fill", src1:"../../../assets/images/faces/16.jpg"},
    {id:5, heading:"Brenda Simpson", data:"CEO AIBMO", month:"1 month ago",rating:"half-fill", src1:"../../../assets/images/faces/5.jpg"},
    {id:6, heading:"Julia Sams", data:"CHIEF SECRETARY BHOL", month:"2 month ago",rating:"fill", src1:"../../../assets/images/faces/7.jpg"},
]