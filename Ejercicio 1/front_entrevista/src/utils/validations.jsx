export function validateUsername(username) {
  return username.trim() !== "";
}

export function validatePassword(password) {
  return password.trim() !== "" && password.length >= 10;
}

export function validateProfile(profileId) {
  return profileId !== "";
}

export function isValidDate(dateString) {
  return dateString !== "";
}
