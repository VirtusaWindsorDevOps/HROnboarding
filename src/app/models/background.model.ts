export class background{
    background: Background[];
}
interface Background{
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
