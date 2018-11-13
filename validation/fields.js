const Validator = require('validator')
const isEmpty = require('./is-empty')

const validatedInput = (data) => {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.date = !isEmpty(data.date) ? data.date : '';
    data.drug = !isEmpty(data.drug) ? data.drug : '';
    data.batch = !isEmpty(data.batch) ? data.batch : '';
    data.outcome = !isEmpty(data.outcome) ? data.outcome : '';
    data.details = !isEmpty(data.details) ? data.details : '';

    if (!Validator.isLength(data.name, {
            min: 2,
            max: 30
        })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }
    if (!Validator.isLength(data.lastname, {
            min: 2,
            max: 30
        })) {
        errors.lastname = 'Lastname must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Lastname field is required';
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = 'Location field is required';
    }
    if (!Validator.isLength(data.phone, {
            min: 9
        })) {
        errors.phone = 'Phone must be between at least 6 characters';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is badly formatted';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date field is required';
    }
    if (Validator.isEmpty(data.drug)) {
        errors.drug = 'Drug field is required';
    }
    if (Validator.isEmpty(data.batch)) {
        errors.batch = 'Batch field is required';
    }
    if (Validator.isEmpty(data.outcome)) {
        errors.outcome = 'Outcome field is required';
    }

    if (Validator.isEmpty(data.details)) {
        errors.details = 'Details field is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }

}

module.exports = validatedInput