import { conditionallyCreateMapObjectLiteral } from "@angular/compiler/src/render3/view/util";

export class CaseInfo{

    city:string;
    place:string;
    positive_cases:number;
    cured_patients:number;
    death_cases:number;

    constructor(city:string, place:string, positive_cases:number, cured_patients:number, death_cases:number){

        this.city=city;
        this.place=place;
        this.positive_cases=positive_cases;
        this.cured_patients=cured_patients;
        this.death_cases=death_cases;
    
    }

    
}
