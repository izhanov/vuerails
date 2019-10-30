import axios from "axios";
import Rails from "rails-ujs";

axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["X-CSRF-Token"] = Rails.csrfToken()

export function getCurrentUser() {
  return axios.get("/dashboard/current_user")
}

export function getClientList() {
  return axios.get("/dashboard/clients/")
}

export function getClient(id) {
  return axios.get(`/dashboard/clients/${id}/edit`)
}

export function updateClient(data) {
  return axios.put(`/dashboard/clients/${data.id}`, {client: data})
}

export function persistClient(data) {
  return axios.post("/dashboard/clients", {client: data})
}

export function destroyClient(id) {
  return axios.delete(`/dashboard/clients/${id}`)
}

export function assignClient(data) {
  return axios.post("/dashboard/clients/assign_to_organizations", {resources: data})
}

export function assignEquipment(data) {
  return axios.post("/dashboard/organizations/assign_to_organizations", {resources: data})
}

export function resetClientPassword(id) {
  return axios.post("/dashboard/clients/reset_password", {id: id})
}

export function requestVerifyPhone(phone) {
  return axios.post("/dashboard/clients/verify_phone", {phone: phone})
}

export function requestVerifyEmail(email) {
  return axios.post("/dashboard/clients/verify_email", {email: email})
}

export function getOrganizations(params) {
  return axios.get(`/dashboard/organizations?filter=${params}`)
}

export function getOrganization(id) {
  return axios.get(`/dashboard/organizations/${id}/edit`)
}

export function persistOrganization(data) {
  return axios.post("/dashboard/organizations", {organization: data})
}

export function destroyOrganization(id) {
  return axios.delete(`/dashboard/organizations/${id}`)
}

export function updateOrganization(data) {
  return axios.put(`/dashboard/organizations/${data.id}`, {organization: data})
}

export function getStaffs() {
  return axios.get("/dashboard/staffs")
}

export function getStaff(id) {
  return axios.get(`/dashboard/staffs/${id}/edit`)
}

export function persistStaff(data) {
  return axios.post("/dashboard/staffs", {staff: data})
}

export function destroyStaff(id) {
  return axios.delete(`/dashboard/staffs/${id}`)
}

export function updateStaff(data) {
  return axios.put(`/dashboard/staffs/${data.id}`, {staff: data})
}

export function requestVerifyStaffPhone(phone) {
  return axios.post("/dashboard/staffs/verify_phone", {phone: phone})
}

export function requestVerifyStaffEmail(email) {
  return axios.post("/dashboard/staffs/verify_email", {email: email})
}

export function resetStaffPassword(id) {
  return axios.post("/dashboard/staffs/reset_password", {id: id})
}

export function getEquipmentList() {
  return axios.get("/dashboard/equipment")
}

export function getEquipment(id) {
  return axios.get(`/dashboard/equipment/${id}/edit`)
}

export function updateEquipment(data) {
  return axios.patch(`/dashboard/equipment/${data.id}`, {equipment: data})
}

export function persistEquipment(data) {
  return axios.post("/dashboard/equipment", {equipment: data})
}

export function destroyEquipment(id) {
  return axios.delete(`/dashboard/equipment/${id}`)
}
