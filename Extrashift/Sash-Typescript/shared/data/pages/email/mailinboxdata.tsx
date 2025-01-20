interface selectdata {
    value:string;
    label:string;
}
export const Selectdata:selectdata[] = [
    {value:"jay@gmail.com", label:"jay@gmail.com"},
    {value:"kia@gmail.com", label:"kia@gmail.com"},
    {value:"don@gmail.com", label:"don@gmail.com"},
    {value:"kimo@gmail.com", label:"kimo@gmail.com"},
]

interface mails {
    id:number;
    icon:string;
    text1:string;
    text2:string;
    class:string;
    class1:string;
}
export const  Mails:mails[]=[
    {id:1,icon:'inbox-archive-line', text1:'All Mails', text2:'789', class:'badge bg-primary-transparent text-primary', class1:'active'},
    {id:2,icon:'inbox-archive-line', text1:'Inbox', text2:'8', class:'badge bg-success-transparent text-success', class1:''},
    {id:3,icon:'send-plane-2-line', text1:'Sent', text2:'', class:'', class1:''},
    {id:4,icon:'draft-line', text1:'Drafts', text2:'', class:'', class1:''},
    {id:5,icon:'spam-2-line', text1:'Spam', text2:'8', class:'badge bg-warning-transparent text-warning', class1:''},
    {id:6,icon:'bookmark-line', text1:'Important', text2:'', class:'', class1:''},
    {id:7,icon:'delete-bin-line', text1:'Trash', text2:'', class:'', class1:''},
    {id:8,icon:'archive-line', text1:'Archive', text2:'', class:'', class1:''},
    {id:9,icon:'star-line', text1:'Starred', text2:'2', class:'badge bg-secondary-transparent text-secondary', class1:''}
    ]
