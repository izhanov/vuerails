import axios from 'axios';
import Rails from 'rails-ujs';

axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.post["X-CSRF-Token"] = Rails.csrfToken()
axios.defaults.headers.delete["X-CSRF-Token"] = Rails.csrfToken()

export function getCurrentUser() {
  return axios.get('/dashboard/current_user')
}

export function getClientList() {
  return axios.get('/dashboard/clients/')
}

export function persistResource(data) {
  console.log(data)
  return axios.post('/dashboard/clients', {client: data})
}

export function requestVerifyPhone(phone) {
  return axios.post('/dashboard/clients/verify_phone', {phone: phone})
}

export function requestVerifyEmail(email) {
  return axios.post('/dashboard/clients/verify_email', {email: email})
}

export function getOrganizations() {
  return axios.get('/dashboard/organizations')
}

export function addOrganization(data) {
  return axios.post('/dashboard/organizations', {organization: data})
}

export function removeOrganization(id) {
  return axios.delete(`/dashboard/organizations/${id}`)
}
