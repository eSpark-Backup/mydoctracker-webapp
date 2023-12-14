import { notification } from "antd";

// empty checker 
const isFieldEmpty = (value) => {
    return value === undefined || value === null || value === ''
  };

export const checkFieldsNotEmpty = (data) => {
    for (const key in data) {
      if (isFieldEmpty(data[key])) {
        return false; // At least one field is empty
      }
    }
    return true; // All fields are non-empty
  };

export const handleSubmit = (state, callback) => {
    if (checkFieldsNotEmpty(state)) {
        callback()
    }
    else {
        notification.error({
            message: 'Error',
            description: 'Please fill all required fields.',
        });
    }
}

const isError = (value) => {
  return value === undefined || value === null || value !== ''
};

export const checkError = (data) => {
    for (const key in data) {
      if (isError(data[key])) {
        return false;
      }
    }
    return true;
};

var visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
var americanExpressRegex = /^(?:3[47][0-9]{13})$/;
var discoveryRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

export const handleCreditCard = (value, key, state, setState, errors, setErrors, setPaymentType) => {
    var number = value.replace(/\D/g, '');
    const formattedNumber = (number.toString().match(/.{1,4}/g) || []).join('-');
    setState({
        ...state,
        [key]: formattedNumber
    })
    const numWithoutHyphens = formattedNumber.replace(/-/g, '');
    var isVisa = visaRegex.test(numWithoutHyphens);
    var isMasterCard = masterCardRegex.test(numWithoutHyphens);
    var isAmericanExpress = americanExpressRegex.test(numWithoutHyphens);
    var isDiscovery = discoveryRegex.test(numWithoutHyphens);
    if (isVisa || isMasterCard || isAmericanExpress || isDiscovery) {
        setErrors({
            ...errors,
            [key]: ""
        })
        if(isVisa) {
            setPaymentType('/Images/visa.svg')
        } else if (isMasterCard) {
            setPaymentType('/Images/mastercard.svg')
        } else if (isAmericanExpress) {
            setPaymentType('/Images/american-express.svg')
        } else if (isDiscovery) {
            setPaymentType('/Images/discover.svg')
        }
    } else {
        setErrors({
            ...errors,
            [key]: "Please enter a valid card number."
        })
        setPaymentType('/icons/payment-method.svg')
    }
    if(number === "") {
        setErrors({
            ...errors,
            [key]: ""
        })
        setPaymentType('/icons/payment-method.svg')
    }
}

export const handleExpiry = (value, key, state, setState, errors, setErrors) => {
    var expiryDate = value;
    const formattedValue = expiryDate.replace(/(\d{2})(\d{0,2})/, function(_, month, year) {
        return month + (year ? '/' + year : '');
      });
      setState({
        ...state,
        [key]: formattedValue
    })

    var expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (expiryRegex.test(expiryDate)) {
        var enteredMonth = parseInt(formattedValue.split('/')[0], 10);
        var enteredYear = parseInt(formattedValue.split('/')[1], 10);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear() % 100;
        var currentMonth = currentDate.getMonth() + 1;

        if (enteredYear > currentYear || (enteredYear === currentYear && enteredMonth >= currentMonth)) {
            setErrors({
                ...errors,
                [key]: ""
            })
        } else {
            setErrors({
                ...errors,
                [key]: "Expiry date has passed"
            })
        }
    } else {
        setErrors({
            ...errors,
            [key]: "Please enter a valid expiry date in MM/YY format"
        })
    }
    if(expiryDate === "") {
        setErrors({
            ...errors,
            [key]: ""
        })
    }
}

export const handleCvc = (value, key, state, setState, errors, setErrors) => {
    const number = value.replace(/\D/g, '');
    const formattedValue = number.substring(0, 4);

    setState({
        ...state,
        [key]: formattedValue
    })
    if(formattedValue.length >= 3) {
        setErrors({
            ...errors,
            [key]: ""
        })
    } else {
        setErrors({
            ...errors,
            [key]: "Please enter atleast 3 digits"
        })
    }
    if(number === "") {
        setErrors({
            ...errors,
            [key]: ""
        })
    }
}
