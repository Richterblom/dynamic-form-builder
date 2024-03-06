export interface IForm{
    formTitle: string,
    formControls: IFormControl[]
    saveBtnTitle?: string,
    resetBtnTitle?: string,
}
export interface IFormControl {
    name: string
    label: string
    value?: string
    options?: IOptions[]
    radioOptions?: string[]
    placeholder?: string
    class: string
    type: string
    validators: Ivalidators[]
  }
 export interface Ivalidators{
    validatorName: string,
    required?: boolean,
    message?: string
    pattern?: string
    minLength?: number
    maxLength?: number
}

export interface IOptions{
    id?: number,
    value?: string
}