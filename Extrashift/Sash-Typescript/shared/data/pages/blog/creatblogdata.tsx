interface selectdata3 {
    value:string;
    label:string;
}
export const Selectdata3:selectdata3[] = [
    { value: 'Top Blog ', label: 'Top Blog ' },
    { value: 'Blogger', label: 'Blogger' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Landscape', label: 'Landscape' }

];


//Blog Category
interface blogdata1 {
    value:string;
    label:string;
}
export const blogdata:blogdata1[] = [
    {value:"Select Category", label:"Select Category"},
    {value:"Nature", label:"Nature"},
    {value:"Sports", label:"Sports"},
    {value:"Food", label:"Food"},
    {value:"Travel", label:"Travel"},
    {value:"Fashion", label:"Fashion"},
    {value:"Beauty", label:"Beauty"},
]

interface Publishdat {
    value:string;
    label:string;
}

export const Publishdata:Publishdat[] = [
    {value:"Select", label:"Select"},
    {value:"Published", label:"Published"},
    {value:"Hold", label:"Hold"},
]