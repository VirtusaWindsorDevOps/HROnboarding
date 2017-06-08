export interface BackgroundListAlt{
    Background?: BackGroundObj;
}

interface BackGroundObj{
     Employee: Info;
     VirtusaCheck: Vcheck;
     PrattCheck: Pcheck;
 }

 interface Info{
    ID: number;
    Status: string;
    Citizenship: string;
 }

 interface Vcheck{
    Status: string;
 }

 interface Pcheck{
    Status: string;
 }