import axios from 'axios';
import Rails from 'rails-ujs';

export function getCurrentUser() {
  return axios.get('/cabinet/current_user')
}

export function signOut() {
  return axios.delete('/cabinet/clients/sign_out',
    {headers: { "X-CSRF-Token": Rails.csrfToken()}}
  )
}
