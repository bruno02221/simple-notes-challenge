function approximatelyMatch(string, term) {
  if (
    !string ||
    term === null ||
    term === undefined ||
    term.length > string.length
  ) {
    return false;
  }

  if (term === "") return true;
  if (term === string) return true;

  let index = 0;
  let match = true;

  for (const letter of term) {
    match = false;
    while (index < string.length) {
      match = letter === string[index++];
      if (match) {
        break;
      }
    }
    if (!match) {
      return false;
    }
  }

  return match;
}

export default approximatelyMatch;
