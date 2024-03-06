import { IForm } from "../interface/form.interface";

export const registerFormConfig: IForm = {
formTitle: 'Registeration Form',
saveBtnTitle: 'register',
resetBtnTitle: 'reset',
formControls:[
        {
          "name": "firstName",
          "label": "First name",
          "value": "",
          "placeholder": "",
          "class": "col-md-6",
          "type": "text",
          "validators": [
            {
              "validatorName": "minlength",
              "minLength": 5,
              "message": "min char should be 5"
            },
            {
              "validatorName": "required",
              "required": true,
              "message": "*First Name is Required"
            },
          ]
        },
        // ... other form controls
        {
            "name": "gener",
            "label": "Gender",
            "class": "col-md-6",
            "placeholder": "",
            "radioOptions": [
                "male",
                "female"
            ],
            "type": "radio",
            "validators": [

              {
                "validatorName": "required",
                "required": true,
                "message": "*Gender is Required"
              },
            ]
          },
          {
            "name": "package",
            "label": "Package",
            "class": "col-md-6",
            "placeholder": "",
            "options": [
                {
                    "id":1,
                    "value": "Monthly",
                },
                {
                    "id":2,
                    "value": "quarter",
                },
                {
                    "id":3,
                    "value": "yearly",
                },

            ],
            "type": "select",
            "validators": [

              {
                "validatorName": "required",
                "required": true,
                "message": "package is Required"
              },
            ]
          },
      ]
    }
    