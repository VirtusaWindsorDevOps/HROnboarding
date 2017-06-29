import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { MdDialogRef, MdDialog } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'employee-profile',
  moduleId: module.id,
  templateUrl: './employeemenu.component.html',
  styleUrls: ['./employeemenu.component.css']
})
export class EmployeeMenuComponent {
  
  constructor(public dialog:MdDialog){ }


  //These four variables handle the animation of the milestones tab.
  
  //Moves the selections into view
  msAniTab: string = "moveContents";
  
  //Moves the selections out of View
  msAniTabRev: string="moveContentsReverse";

  //Moves the content into view.
  msAniContent:string = "moveContents";

  //Moves the content out of view.
  msAniContentRev:string = "moveContentsReverse";


  //This is the style selection variable
  styleSelection:string = "";

  //Individual Tab display variable.
  state:boolean = false;
  
  //Milestones tab visibility variable.
  msState:boolean = true;

  //This variable will 'eventually' take in a JSON string and parse data appropriately.
  public cardArr = [ { milestoneContent: [{ 
                                            msName: "Email Creation", 
                                            completedOn: "6 weeks ago",
                                            completedBy: "john Doe",
                                            selectionContent: [{
                                                                  fieldOne: "Completed?",
                                                                  fieldTwo: "Email Address",
                                                                  fieldThree: "",
                                                                  fieldFour: "",
                                                                  fieldFive: "",

                                                                  contentOne: "Yes",
                                                                  contentTwo: "jbrehm@virtusapolaris.com",
                                                                  contentThree: "",
                                                                  contentFour: "",
                                                                  contentFive: ""
                                                            
                                                              }]
                                          }]},
                     { milestoneContent: [{ msName: "Key Card", 
                                            completedOn: "6 weeks ago",
                                            completedBy: "john Doe",
                                            selectionContent: [{
                                                                  fieldOne: "Key Card Field 1",
                                                                  fieldTwo: "",
                                                                  fieldThree: "",
                                                                  fieldFour: "",
                                                                  fieldFive: "",
                                                                  
                                                                  contentOne: "",
                                                                  contentTwo: "",
                                                                  contentThree: "",
                                                                  contentFour: "",
                                                                  contentFive: ""
                                                            
                                                              }]
                                           }]},
                     { milestoneContent: [{ msName: "Laptop",
                                            completedOn: "6 weeks ago",
                                            completedBy: "john Doe",
                                            selectionContent: [{
                                                                  fieldOne: "Laptop Field 1",
                                                                  fieldTwo: "",
                                                                  fieldThree: "",
                                                                  fieldFour: "",
                                                                  fieldFive: "",
                                                                  
                                                                  contentOne: "",
                                                                  contentTwo: "",
                                                                  contentThree: "",
                                                                  contentFour: "",
                                                                  contentFive: ""
                                                            
                                                              }]
                                         }]}
                    ];
  
    public contentLoader = [ { fieldOne: "", fieldTwo: "", fieldThree: "", fieldFour: "",fieldFive: "",
                               contentOne: "", contentTwo: "", contentThree: "", contentFour: "", contentFive: ""
                             }]; 
  
    onSelect(i:number){

      //These statements set the md-card that displays the appropriate data.      
      this.contentLoader[0].fieldOne = this.cardArr[i].milestoneContent[0].selectionContent[0].fieldOne;
      this.contentLoader[0].fieldTwo = this.cardArr[i].milestoneContent[0].selectionContent[0].fieldTwo;
      this.contentLoader[0].fieldThree = this.cardArr[i].milestoneContent[0].selectionContent[0].fieldThree;
      this.contentLoader[0].fieldFour = this.cardArr[i].milestoneContent[0].selectionContent[0].fieldFour;
      this.contentLoader[0].fieldFive = this.cardArr[i].milestoneContent[0].selectionContent[0].fieldFive;
      this.contentLoader[0].contentOne = this.cardArr[i].milestoneContent[0].selectionContent[0].contentOne;
      this.contentLoader[0].contentTwo = this.cardArr[i].milestoneContent[0].selectionContent[0].contentTwo;
      this.contentLoader[0].contentThree = this.cardArr[i].milestoneContent[0].selectionContent[0].contentThree;
      this.contentLoader[0].contentFour = this.cardArr[i].milestoneContent[0].selectionContent[0].contentFour;
      this.contentLoader[0].contentFive = this.cardArr[i].milestoneContent[0].selectionContent[0].contentFive;
           
      //Displays the selected milestones menu choice.
      this.state = ( this.state === false ? true : false );
      
      this.styleSelection = this.msAniTabRev;

      //Hides the selection menu.
      this.msState = (this.msState === true ? false : true ); 

    }

    onUnselect(){
      
      this.styleSelection = this.msAniTab;

      //Displays the milestone selection menu.
      this.msState = ( this.msState === true ? false : true );

      //Hides the previous selected milestone menu choice.
      this.state = (this.state === false ? true : false);
      
    }
}