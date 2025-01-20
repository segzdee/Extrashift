interface Invoice {
    id:number;
    class:string;
    class1:string;
    src:string;
    card:string;
    date:string;
    amount:string;
    status:string;
    duedate:string;
    color:string;
}

export const invoicelist:Invoice[] = [
    {id:1, class:"Json Taylor", class1:"jsontaylor2416@gmail.com",  src:"../../../../assets/images/faces/11.jpg", card:" #SPK12032901 ", date:"25,Nov 2022", amount:"$212.45", status:"Paid", duedate:"25,Dec 2022", color:"success"},
    {id:2, class:"Suzika Stallone", class1:"suzikastallone3214@gmail.com",  src:"../../../../assets/images/faces/7.jpg", card:" #SPK12032912", date:"13,Nov 2022", amount:"$512.99", status:"Pending", duedate:"13,Dec 2022", color:"warning"},
    {id:3, class:"Roman Killon", class1:"romankillon143@gmail.com",  src:"../../../../assets/images/faces/15.jpg", card:" #SPK12032945", date:"30,Nov 2022", amount:"$2199.49", status:"Overdue", duedate:"30,Dec 2022", color:"danger"},
    {id:4, class:"Charlie Davieson", class1:"charliedavieson@gmail.com",  src:"../../../../assets/images/faces/12.jpg", card:" #SPK12032922", date:"18,Nov 2022", amount:"$1569.99", status:"Paid", duedate:"18,Dec 2022", color:"success"},
    {id:5, class:"Selena Deoyl", class1:"selenadeoyl114@gmail.com",  src:"../../../../assets/images/faces/4.jpg", card:" #SPK12032932", date:"18,Nov 2022", amount:"$4,873.99", status:"Due by 1 Day", duedate:"18,Dec 2022", color:"primary"},
    {id:6, class:"Kiara Advensh", class1:"kiaraadvensh87@gmail.com",  src:"../../../../assets/images/faces/7.jpg", card:" #SPK12032978", date:"02,Nov 2022", amount:"$1923.99", status:"Paid", duedate:"18,Dec 2022", color:"success"},
    {id:7, class:"Joseph Samurai", class1:"josephsamurai@gmail.com",  src:"../../../../assets/images/faces/9.jpg", card:" #SPK12032919 ", date:"15,Nov 2022", amount:"$1,623.99", status:"Paid", duedate:"15,Dec 2022", color:"success"},
    {id:8, class:"Kevin Powell", class1:"kevinpowell@gmail.com",  src:"../../../../assets/images/faces/13.jpg", card:" #SPK12032931", date:"21,Nov 2022", amount:"$3,423.99", status:"Pending", duedate:"21,Dec 2022", color:"warning"},
    {id:9, class:"Darla Jung", class1:"darlajung555@gmail.com",  src:"../../../../assets/images/faces/8.jpg", card:" #SPK12032958", date:"15,Nov 2022", amount:"$2,982.99", status:"Paid", duedate:"15,Dec 2022", color:"success"},
]