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