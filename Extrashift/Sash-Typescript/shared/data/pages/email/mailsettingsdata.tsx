interface mailsetting {
    value:string;
    label:string;
}

export const Languageoptions:mailsetting[] = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Hindi', label: 'Hindi' },

];
export const Countryoptions:mailsetting[] = [
    { value: 'Usa', label: 'Usa' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Dubai', label: 'Dubai' },

];
interface mailsetting2 {
    id:number;
    class:string;
    text1:string;
    text2:string;
}
export const Mailsettingslist:mailsetting2[] = [
    { id: 1, class: 'bi bi-phone me-2 fs-16 align-middle text-muted', text1: 'Mobile-LG-1023', text2: 'Manchester, UK-Nov 30, 04:45PM' },
    { id: 2, class: 'bi bi-laptop me-2 fs-16 align-middle text-muted', text1: 'Lenovo-1291203', text2: 'England, UK-Aug 12, 12:25PM' },
    { id: 3, class: 'bi bi-laptop me-2 fs-16 align-middle text-muted', text1: 'Macbook-Suzika', text2: 'Brightoon, UK-Jul 18, 8:34AM' },
    { id: 4, class: 'bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted', text1: 'Apple-Desktop', text2: 'Darlington, UK-Jan 14, 11:14AM' }
];
interface mailsetting1 {
    id:number;
    value:string;
    label:string;
}
export const MaxLimitoptions:mailsetting1[] = [
    {id:1, value: '3 Attempts', label: '3 Attempts' },
    {id:2, value: '5 Attempts', label: '5 Attempts' },
    {id:3, value: '10 Attempts', label: '10 Attempts' },
    {id:4, value: '20 Attempts', label: '20 Attempts' },

];
export const Accountoptions:mailsetting[] = [
    { value: '1 Day', label: '1 Day' },
    { value: '1 Hour', label: '1 Hour' },
    { value: '1 Month', label: '1 Month' },
    { value: '1 Year', label: '1 Year' },

];
export const Accounts:mailsetting[] = [
    { value: '3', label: '3' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },

];
export const Days:mailsetting[] = [
    { value: '1 Day', label: '1 Day' },
    { value: '1 Hour', label: '1 Hour' },
    { value: '1 Month', label: '1 Month' },
    { value: '1 Year', label: '1 Year' },

];
export const Maximumoptions:mailsetting[] = [
    { value: '10', label: '10' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '200', label: '200' },

];
export class ProfileService {

    image = "../../../assets/img/png-images/2.png";

    static image:any = null;
    
    static handleChange(ele: { target: { files: [any]; }; }) {
        const [file] = ele.target.files;

        if (file) {
            this.image = URL.createObjectURL(file);
            this.returnImage();
        }
    }

    static returnImage() {
        return this.image;
    }

    static handleChangeUrl(link: any) {
        this.image = link;
        this.returnImage();
    }

}
