export class employees{
    employees: Employees;

    
}

interface Employees{
    Employee: Employee[];
}

 interface Employee{
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