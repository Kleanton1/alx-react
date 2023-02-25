function getFullYear() {
  return new Date().getFullYear();
}

function getFootercopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export { getFullYear, getFootercopy};