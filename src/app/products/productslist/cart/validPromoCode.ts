import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPromoCodeValidator(codes: string[]) : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toUpperCase();

        if (!value) {
            return null;
        }

        let correctPromo = (codes.indexOf(value) >= 0);
        return correctPromo ? null : { validPromoCode : false };
    }

}