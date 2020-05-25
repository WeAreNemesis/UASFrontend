import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { Program } from '../Program';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-programs-offered',
  templateUrl: './programs-offered.component.html',
  styleUrls: ['./programs-offered.component.css']
})
export class ProgramsOfferedComponent implements OnInit {

  invalidForm: boolean = false;
  visiblePrograms = [];
  formVisible: boolean = false;
  id: number;
  patterns = [
    "^[a-zA-Z.\\s]{0,20}$",
    "^[a-zA-Z0-9+.,\\s]+$",
  ]
  programForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.patterns[0])]],
    description: ['', [Validators.required, Validators.pattern(this.patterns[1])]],
    eligibility: ['', [Validators.required, Validators.pattern(this.patterns[1])]],
    duration: ['', [Validators.required]],
    certificate: ['', [Validators.required, Validators.pattern(this.patterns[1])]],
  });
  constructor(private _programService: ProgramService, private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.getPrograms();
  }

  showForm($event, program): void {
    console.log(program);
    this.formVisible = true;
    if (program) {
      this.id = program.id;
      this.programForm.setValue({
        name: program.name,
        description: program.description,
        eligibility: program.eligibility,
        duration: program.duration,
        certificate: program.certificate,
      });
    } else {
      this.id = null;
    }
  }

  onSubmit(form, id): void {
    if (form.valid) {
      console.log(form);
      console.log(id);
      let program = new Program(
        id,
        form.value.name,
        form.value.description,
        form.value.eligibility,
        form.value.duration,
        form.value.certificate,
      );
      console.log(program);
      if (id) {
        console.log(" Program updating called");
        this.updateProgram(program);
      } else {
        console.log("new Program adding called");
        this.addProgram(program);
      }
      this.invalidForm = false;
    } else {
      this.invalidForm = true;
    }

  }

  getPrograms(): void {
    this._programService.getPrograms().subscribe(programs => this.visiblePrograms = programs);
    console.log(this.visiblePrograms);
  }

  addProgram(program: Program): void {
    this._programService.addProgram(program).subscribe(data => {
      console.log("new Program added");
      this.getPrograms();
    });
  }

  deleteProgram(event, id: number): void {
    console.log("delete called");
    this._programService.deleteProgram(id).subscribe(data => {
      console.log("old Program updated");
      this.getPrograms();
    });
  }

  updateProgram(program: Program): void {
    this._programService.updateProgram(program).subscribe(data => {
      this.getPrograms();
    });
  }
}
