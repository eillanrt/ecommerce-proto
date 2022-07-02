// Capitalize every first letter of the word
// in a sentence or phrase

function capitalize(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}

export default capitalize;
