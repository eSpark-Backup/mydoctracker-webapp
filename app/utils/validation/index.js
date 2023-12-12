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