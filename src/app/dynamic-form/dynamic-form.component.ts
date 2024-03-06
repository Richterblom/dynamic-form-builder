import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators,isFormControl} from '@angular/forms';
import { IForm, IFormControl, Ivalidators } from '../interface/form.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: any;
  fb = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({},{updateOn:"submit"});

  ngOnInit(): void {
    if (this.form?.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {
        let controlValidator: any = [];
        if (control.validators) {
          control.validators.forEach((val: Ivalidators) => {
            if (val.validatorName === 'required') controlValidator.push(Validators.required);
            if (val.validatorName === 'minlength') controlValidator.push( Validators.minLength(val.minLength as number));
            if (val.validatorName === 'maxlength') controlValidator.push(Validators.maxLength(val.maxLength as number));
            if (val.validatorName === 'pattern') controlValidator.push(Validators.pattern(val.pattern as string));
          });
        }
        formGroup[control.name] = [control.value || '',controlValidator];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }
  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }
  resetForm() {
    if (this.dynamicFormGroup.valid) {
      console.log('Form values:', this.dynamicFormGroup.value);
    }
  }
  getValidationErrors(control:IFormControl):string{
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';
    control.validators.forEach((val)=>{
      if(myFormControl?.hasError(val.validatorName as string)){
        errorMessage = val.message as string;
      }
    });
    return errorMessage;
  }
}