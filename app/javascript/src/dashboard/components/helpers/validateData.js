const validateFullName = (full_name) => {
  if (!full_name || /[^\s{3,}\d]/g.test(full_name)) {
    return true
  }
}
const validatePhone = (phone) => {
  if (/[\d]+/g.test(phone)) {
    return true
  }
}
const validateEmail = (email) => {
  if (/[\w\d]+@[\w\d]+.[\w+{2-3}]+/g.test(email) || !email) {
    return true
  }
}

export default function validateData(data) {
  if (validateFullName(data.full_name) && validatePhone(data.phone) && validateEmail(data.email)) {
    return true
  }
}

