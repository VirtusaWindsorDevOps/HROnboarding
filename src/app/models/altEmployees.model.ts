// export class EmployeeListAlt{
//     ID: number;
//     FirstName: string;
//     LastName: string;
//     Status: string;
//     Role: string;
//     Citizenship: string;
//     WorkLocation: string
//     Model: string;
//     Brand: string;
//     LaptopID: string;
//     TrackingNumber: string;

//     constructor(test?: any){
//         console.log(test);
//         this.ID = test && test.Employee.IDCard.ID || null;
//         this.FirstName = test && test.Employee.IDCard.FirstName || null;
//         this.LastName = test && test.Employee.IDCard.LastName || null;
//         this.Status = test && test.Employee.IDCard.Status || null;
//         this.Role = test && test.Employee.IDCard.Role || null;
//         this.Citizenship = test && test.Employee.IDCard.Citizenship || null;
//         this.WorkLocation = test && test.Employee.IDCard.WorkLocation || null;
//         this.Model = test && test.Employee.Laptop.Model || null;
//         this.Brand = test && test.Employee.Laptop.Brand || null;
//         this.LaptopID = test && test.Employee.Laptop.LaptopID || null;
//         this.TrackingNumber = test && test.Employee.Laptop.TrackingNumber || null;
//     }
// }  /alternate method. Would like to look more into getting this working.

export interface EmployeeListAlt{
    Employee?: EmployeeObj;
}

 interface EmployeeObj{
     IDCard: IdCard;
     Laptop: Laptop;
 }

 interface IdCard{
    ID: number;
    FirstName: string;
    LastName: string;
    Status: string;
    Role: string;
    Citizenship: string;
    WorkLocation: string;
 }

 interface Laptop{
    Model: string;
    Brand: string;
    LaptopID: string;
    TrackingNumber: string;
 }