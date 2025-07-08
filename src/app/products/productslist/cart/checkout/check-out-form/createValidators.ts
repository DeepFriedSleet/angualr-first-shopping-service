import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const checkWordsOnly = /^[a-z]+(?:\s+[a-z]+)*$/;
const checkAddress = /^\d{1,5}\s+(?:[nsew]\s+)?[a-z0-9 .'-]+\s+[a-z]+$/;
const checkState = /^[A-Z]{2}$/;
const checkZIP = /^\d{5}/
const checkCardNumber = /^\d{16}/
const checkExpiirationDate = /^(?:0[1-9]|1[0-2])\/(?:[2-9][5-9])/
const checkCVV = /^\d{3}$/

export function createNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const alphabetical = checkWordsOnly.test(value);
        return !alphabetical ? { nameValidator: true } : null;
    }
}

export function createAddressValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const address = checkAddress.test(value);
        return !address ? { addressValidator: true } : null;
    }
}

export function createCityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const city = checkWordsOnly.test(value);
        return !city ? { cityValidator: true } : null;
    }
}

export function createStateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toUpperCase();

        if (!value) {
            return null;
        }

        const state = checkState.test(value);
        return !state ? { stateValidator: true } : null;
    }
}

export function createZIPValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const zip = checkZIP.test(value);
        return !zip ? { zipValidator: true } : null;
    }
}

export function createCardNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const cardName = checkWordsOnly.test(value);
        return !cardName ? { cardNameValidator: true } : null;
    }
}

export function createCardNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const cardNumber = checkCardNumber.test(value);
        return !cardNumber ? { cardNumberValidator: true } : null;
    }
}

export function createExpirationDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const expirationDate = checkExpiirationDate.test(value);
        return !expirationDate ? { expirationDateValidator: true } : null;
    }
}

export function createCVVValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (!value) {
            return null;
        }

        const cvv = checkCVV.test(value);
        return !cvv ? { cvvValidator: true } : null;
    }
}
