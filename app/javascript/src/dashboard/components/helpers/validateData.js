const validateFullName = (full_name) => {
  return (!full_name || /[^\s{3,}\d]/g.test(full_name))
}
const validatePhone = (phone) => {
  return (/[\d]+/g.test(phone))
}
const validateEmail = (email) => {
  return (/[\w\d]+@[\w\d]+.[\w+{2-3}]+/g.test(email) || !email)
}

export default function validateData(data) {
  return (validateFullName(data.full_name) && validatePhone(data.phone) && validateEmail(data.email))
}

