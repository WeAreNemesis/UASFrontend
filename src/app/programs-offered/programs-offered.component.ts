import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { Program } from '../Program';

@Component({
  selector: 'app-programs-offered',
  templateUrl: './programs-offered.component.html',
  styleUrls: ['./programs-offered.component.css']
})
export class ProgramsOfferedComponent implements OnInit {

  visiblePrograms = [];

  constructor(private _programService: ProgramService) { }

  ngOnInit(): void {
    this._programService.getPrograms().subscribe(programs => this.visiblePrograms = programs);
    console.log(this.visiblePrograms);
  }

  deleteProgram(event) :void{
    console.log("delete called");
   this._programService.deleteProgram(1).subscribe(data=>{
     console.log(data);
   });
  }

}
