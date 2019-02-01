import { Component, OnInit, ElementRef } from '@angular/core';
import { NewResourcePersonnelService } from '../services/new-resource-personnel.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent {

  private linkCV: string;

  constructor(
    private newResourcePersonnelService: NewResourcePersonnelService,
    private elem: ElementRef,
    private toastr: ToastrService,
    private router: Router
  ) { }

  submitRegister(registerForm) {
    this.newResourcePersonnelService.addResourcePersonnel(registerForm, this.linkCV)
      .subscribe(data => {

        if (data == 1) {
          this.toastr.success('Registration Successful!');
          this.router.navigateByUrl('');
        }
        else {
          this.toastr.error("Registration Unsuccesful!");
        }
      });
  }


  public uploadFile(): void {
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let email = this.elem.nativeElement.querySelector('#inputEmail').value;

    let formData = new FormData();
    let file = files[0];
    let fileName = email + '_' + file.name;
    formData.append('selectFile', file, fileName);
    this.newResourcePersonnelService.uploadFile(formData).subscribe(res => this.linkCV = res);
  }





}
