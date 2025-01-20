//All Folders

const svg1 =<svg viewBox="0 0 24 24"><path fill="#645acf" d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20M23 19C22.1 21.3 19.7 23 17 23S11.9 21.3 11 19C11.9 16.7 14.3 15 17 15S22.1 16.7 23 19M19.5 19C19.5 17.6 18.4 16.5 17 16.5S14.5 17.6 14.5 19 15.6 21.5 17 21.5 19.5 20.4 19.5 19M17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18"></path></svg>
const svg2 =  <svg viewBox="0 0 24 24">
<path fill="#e82646" d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
</svg>
const svg3 = <svg viewBox="0 0 24 24">
<path fill="#09ad95" d="M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z" />
</svg>
const svg4 = <svg viewBox="0 0 24 24">
<path fill="#fc5296" d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M12.46,10.88L14.59,13L12.46,15.12L13.88,16.54L16,14.41L18.12,16.54L19.54,15.12L17.41,13L19.54,10.88L18.12,9.46L16,11.59L13.88,9.46L12.46,10.88Z" />
</svg>
const svg5 =<svg viewBox="0 0 24 24">
<path fill="#f7b731" d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
</svg>
const svg6 =  <svg viewBox="0 0 24 24">
<path fill="#05c3fb" d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z" />
</svg>
const svg7 =  <svg viewBox="0 0 24 24">
<path fill="#fc7303" d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" />
</svg>
const svg8 = <svg viewBox="0 0 24 24">
<path fill="#1170e4" d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18 12H16V14H18V16H16V18H14V16H16V14H14V12H16V10H14V8H16V10H18V12Z" />
</svg>

interface folderdata {
    id:number;
    icon:any;
    color:string;
    class:string;
    files:string;
    data:string;
}

export const Folderdata:folderdata[] = [
    {id:1, icon:svg1, color:"primary", class:"videos", files:"35 files", data:"23 MB"},
    {id:2, icon:svg2, color:"danger", class:"PPT", files:"25 files", data:"15 MB"},
    {id:3, icon:svg3, color:"success", class:"Music", files:"25 files", data:"15 MB"},
    {id:4, icon:svg4, color:"pink", class:"XLS", files:"25 files", data:"15 MB"},
    {id:5, icon:svg5, color:"warning", class:"PDF", files:"25 files", data:"15 MB"},
    {id:6, icon:svg6, color:"secondary", class:"TXT", files:"25 files", data:"15 MB"},
    {id:7, icon:svg7, color:"orange", class:"Images", files:"21 files", data:"19 MB"},
    {id:8, icon:svg8, color:"info", class:"ZIP", files:"22 files", data:"10 MB"},
]

//Files
interface filesdata {
    id:number;
    class:string;
    src:string;
    data:string;
    text:string;
    text1:string;
}

export const Filesdata:filesdata[] = [
    {id:1, class:"file.pdf", src:"../../../../assets/images/media/files/documents/6.png", data:"32 KB", text:"", text1:"mx-auto my-3"},
    {id:2, class:"image1.jpg", src:"../../../../assets/images/media/files/07.jpg", data:"76 KB", text:"file-manager-list w-100", text1:""},
    {id:3, class:"excel.xls", src:"../../../../assets/images/media/files/documents/2.png", data:"34 KB", text:"", text1:"mx-auto my-3"},
    {id:4, class:"nature.jpg", src:"../../../../assets/images/media/files/06.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:5, class:"demo.ppt", src:"../../../../assets/images/media/files/documents/7.png", data:"67 KB", text:"", text1:"mx-auto my-3"},
    {id:6, class:"video.mp4", src:"../../../../assets/images/media/files/documents/10.png", data:"320 KB", text:"", text1:"mx-auto my-3"},
    {id:7, class:"word.doc", src:"../../../../assets/images/media/files/documents/8.png", data:"320 KB", text:"", text1:"mx-auto my-3"},
    {id:8, class:"mountain.jpg", src:"../../../../assets/images/media/files/01.jpg", data:"320 KB", text:"file-manager-list w-100", text1:""},
    {id:9, class:"file.pdf", src:"../../../../assets/images/media/files/documents/6.png", data:"32 KB", text:"", text1:"mx-auto my-3"},
    {id:10, class:"excel.xls", src:"../../../../assets/images/media/files/documents/2.png", data:"34 KB", text:"", text1:"mx-auto my-3"},
    {id:11, class:"image1.jpg", src:"../../../../assets/images/media/files/02.jpg", data:"76 KB", text:"file-manager-list w-100", text1:""},
    {id:12, class:"profile.ppt", src:"../../../../assets/images/media/files/documents/7.png", data:"67 KB", text:"", text1:"mx-auto my-3"},
    {id:13, class:"image2.jpg", src:"../../../../assets/images/media/files/04.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:14, class:"nature.jpg", src:"../../../../assets/images/media/files/05.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:15, class:"exe.zip", src:"../../../../assets/images/media/files/documents/9.png", data:"320 KB", text:"", text1:"mx-auto my-3"},
]

export const Filesdata1:filesdata[] = [
    {id:1, class:"image2.jpg", src:"../../../../assets/images/media/files/03.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:2, class:"image1.jpg", src:"../../../../assets/images/media/files/07.jpg", data:"76 KB", text:"file-manager-list w-100", text1:""},
    {id:3, class:"excel.xls", src:"../../../../assets/images/media/files/documents/2.png", data:"34 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:4, class:"nature.jpg", src:"../../../../assets/images/media/files/06.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:5, class:"demo.ppt", src:"../../../../assets/images/media/files/documents/7.png", data:"67 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:6, class:"video.mp4", src:"../../../../assets/images/media/files/documents/10.png", data:"320 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:7, class:"word.doc", src:"../../../../assets/images/media/files/documents/8.png", data:"320 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:8, class:"mountain.jpg", src:"../../../../assets/images/media/files/01.jpg", data:"320 KB", text:"file-manager-list w-100", text1:""},
    {id:9, class:"file.pdf", src:"../../../../assets/images/media/files/documents/6.png", data:"32 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:10, class:"excel.xls", src:"../../../../assets/images/media/files/documents/2.png", data:"34 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:11, class:"image1.jpg", src:"../../../../assets/images/media/files/02.jpg", data:"76 KB", text:"file-manager-list w-100", text1:""},
    {id:12, class:"profile.ppt", src:"../../../../assets/images/media/files/documents/7.png", data:"67 KB", text:"file-manager-list", text1:"mx-auto"},
    {id:13, class:"image2.jpg", src:"../../../../assets/images/media/files/04.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:14, class:"nature.jpg", src:"../../../../assets/images/media/files/05.jpg", data:"66 KB", text:"file-manager-list w-100", text1:""},
    {id:15, class:"exe.zip", src:"../../../../assets/images/media/files/documents/9.png", data:"320 KB", text:"file-manager-list", text1:"mx-auto"},
]