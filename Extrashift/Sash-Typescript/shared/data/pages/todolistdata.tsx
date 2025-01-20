
interface assigndata {
    value:string;
    label:string;
}

export const Assigndata:assigndata[] = [
    {value:"Angelina May", label:"Angelina May"},
    {value:"Kiara advain", label:"Kiara advain"},
    {value:"Hercules Jhon", label:"Hercules Jhon"},
    {value:"Mayor Kim", label:"Mayor Kim"},
]

//Priority

interface priority {
    value:string;
    label:string;
}

export const Priority:priority[] = [
    {value:"Select", label:"Select"},
    {value:"Critical", label:"Critical"},
    {value:"High", label:"High"},
    {value:"Medium", label:"Medium"},
    {value:"Low", label:"Low"},

]
export const Alltasksdata = [
    {id:1, class:"Home page design", status:"Inprogress", data:"Heigh", color:"danger", color1:"secondary"},
    {id:2, class:"Testing", status:"Pending", data:"Low", color:"warning", color1:"danger"},
    {id:3, class:"Craeting Home Page Website", status:"Completed", data:"Medium", color:"success", color1:"success"},
    {id:4, class:"Data Table Design", status:"Pending", data:"Medium", color:"success", color1:"danger"},
    {id:5, class:"Design Horizontal Layout", status:"Completed", data:"Medium", color:"success", color1:"success"},
    {id:6, class:"Fix Header Issue", status:"Inprogress", data:"Heigh", color:"danger", color1:"secondary"},
    {id:7, class:"Create a blog post", status:"Inprogress", data:"Heigh", color:"danger", color1:"secondary"},
    {id:8, class:"Testing", status:"Pending", data:"Low", color:"warning", color1:"danger"},
    {id:9, class:"Fix the Data Table Issue", status:"Completed", data:"Medium", color:"success", color1:"success"},
    {id:10, class:"Fix the Data Table Issue", status:"Pending", data:"Medium", color:"success", color1:"danger"},
    {id:11, class:"Data Table Design", status:"Inprogress", data:"Heigh", color:"danger", color1:"secondary"},
    {id:12, class:"Fix the Data Table Issue", status:"Pending", data:"Medium", color:"success", color1:"danger"},
]