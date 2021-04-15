import { Component } from "@angular/core";

@Component({

    selector:'parent-comp',
    templateUrl:'./parent.component.html',
    styleUrls:['./parent.component.css']

})
export class ParentComponent{

    total_cases:number=2722;
    cured_patients:number=1798;
    death_cases:number=570;

}
