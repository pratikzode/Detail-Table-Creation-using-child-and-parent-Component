import { Component } from "@angular/core";
import{CaseInfo} from "./CaseInfo"

let a:CaseInfo=new CaseInfo("Dhanbad", "Wasseypur", 166, 124, 12);
let b:CaseInfo=new CaseInfo("Mirzapur", "Lalganj", 98, 77, 4);
let c:CaseInfo=new CaseInfo("Mumbai", "Dadar(E)", 1200, 821, 250);
let d:CaseInfo=new CaseInfo("Pune", "Shivaji Nagar", 945, 611, 222);
let e:CaseInfo=new CaseInfo("Lonavla", "INS Shivaji", 2, 2, 0);
let f:CaseInfo=new CaseInfo("Chennai", "Tambaram", 74, 60, 2);
let g:CaseInfo=new CaseInfo("Rohtak", "Laxmi Nagar", 42, 24, 7);
let h:CaseInfo=new CaseInfo("Howrah", "Sahapur", 81, 37, 19);
let i:CaseInfo=new CaseInfo("Ujjain", "Shipra Nagar", 28, 15, 5);
let j:CaseInfo=new CaseInfo("Bhubaneswar", "Koresh Nagar", 86, 27, 49);

@Component({

    selector:'child-comp',
    templateUrl:'./child.component.html',
    styleUrls:['./child.component.css']

})
export class ChildComponent{

    child_arr:CaseInfo[]=[a, b, c, d, e, f, g, h, i, j];

}
