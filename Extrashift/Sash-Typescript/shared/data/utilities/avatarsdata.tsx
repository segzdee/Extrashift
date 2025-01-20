//Avatar Sizes
interface Sizesdata {
    id: number;
    src1: string;
    sizes: string;
}
export const sizesdata: Sizesdata[] = [
    { id: 1, src1: "../../../assets/images/faces/4.jpg", sizes: "xs" },
    { id: 2, src1: "../../../assets/images/faces/5.jpg", sizes: "sm" },
    { id: 3, src1: "../../../assets/images/faces/6.jpg", sizes: "md" },
    { id: 4, src1: "../../../assets/images/faces/7.jpg", sizes: "lg" },
    { id: 5, src1: "../../../assets/images/faces/8.jpg", sizes: "xl" },
    { id: 6, src1: "../../../assets/images/faces/9.jpg", sizes: "xxl" },
]

//Avatar With Online Status Indicators
interface statusdata {
    id: number;
    src1: string;
    sizes: string;
}
export const Statusdata: statusdata[] = [
    { id: 1, src1: "../../../assets/images/faces/8.jpg", sizes: "xs" },
    { id: 2, src1: "../../../assets/images/faces/10.jpg", sizes: "sm" },
    { id: 3, src1: "../../../assets/images/faces/12.jpg", sizes: "md" },
    { id: 4, src1: "../../../assets/images/faces/13.jpg", sizes: "lg" },
    { id: 5, src1: "../../../assets/images/faces/14.jpg", sizes: "xl" },
    { id: 6, src1: "../../../assets/images/faces/15.jpg", sizes: "xxl" },
]

//Avatar With Online Status Indicators
interface numbersdata {
    id: number;
    src1: string;
    sizes: string;
    badge: string;
    color: string;
}
export const Numbersdata: numbersdata[] = [
    { id: 1, src1: "../../../assets/images/faces/8.jpg", sizes: "xs", badge: "2", color: "primary" },
    { id: 2, src1: "../../../assets/images/faces/10.jpg", sizes: "sm", badge: "5", color: "secondary" },
    { id: 3, src1: "../../../assets/images/faces/14.jpg", sizes: "md", badge: "1", color: "warning" },
    { id: 4, src1: "../../../assets/images/faces/13.jpg", sizes: "lg", badge: "7", color: "info" },
    { id: 5, src1: "../../../assets/images/faces/15.jpg", sizes: "xl", badge: "3", color: "success" },
    { id: 6, src1: "../../../assets/images/faces/9.jpg", sizes: "xxl", badge: "9", color: "danger" },
]

//Stacked Avatars
interface avatarstacked {
    id: number;
    src1: string;
}
export const Avatarstacked: avatarstacked[] = [
    { id: 1, src1: "../../../assets/images/faces/2.jpg" },
    { id: 2, src1: "../../../assets/images/faces/8.jpg" },
    { id: 3, src1: "../../../assets/images/faces/2.jpg" },
    { id: 4, src1: "../../../assets/images/faces/10.jpg" },
    { id: 5, src1: "../../../assets/images/faces/4.jpg" },
    { id: 6, src1: "../../../assets/images/faces/13.jpg" },
]