//Recent Posts
interface Post {
    id:number;
    src:string;
    data:string;
    heading:string;
    color:string;
    data1:string;
}
export const Postdata:Post[] = [
    {id:1, src:"../../../../assets/images/media/photos/6.jpg", data:"Generator on the Internet..", heading:"LifeStyle", color:"danger", data1:""},
    {id:2, src:"../../../../assets/images/media/photos/1.jpg", data:"Voluptatem quia voluptas...", heading:"Business", color:"primary", data1:"mt-4"},
    {id:3, src:"../../../../assets/images/media/photos/9.jpg", data:"Generator on the Internet..", heading:"Travel", color:"secondary", data1:"mt-4"},
    {id:4, src:"../../../../assets/images/media/photos/7.jpg", data:"Voluptatem quia voluptas...", heading:"Meeting", color:"success", data1:"mt-4"},
]

//Professional Blog Writers 
interface blog {
    id:number;
    src:string;
    heading:string;
    data:string;
}
export const Profblog:blog[] = [
    {id:1, src:"../../../../assets/images/faces/1.jpg", heading:"Simon Sais", data:""},
    {id:2, src:"../../../../assets/images/faces/3.jpg", heading:"Cherry Blossom", data:"mt-4"},
    {id:3, src:"../../../../assets/images/faces/5.jpg", heading:"Ivan Notheridiya", data:"mt-4"},
    {id:4, src:"../../../../assets/images/faces/15.jpg", heading:"Manny Jah", data:"mt-4"},
]

//Tags
interface Tags {
    id:number;
    data:string;
}
export const Tagsdata:Tags[] = [
    {id:1, data:"Development"},
    {id:2, data:"Design"},
    {id:3, data:"Technology"},
    {id:4, data:"Popular"},
    {id:5, data:"Codiegniter"},
    {id:6, data:"JavaScript"},
    {id:7, data:"Bootstrap"},
    {id:8, data:"PHP"},
]