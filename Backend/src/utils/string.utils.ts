export function FormatName (name:string): string {
  if (name.split('%20').length === 1) {
    return name;
  } else {
    const stateNameParts: string[] = name.split('%20');
    name = '';

    for (let i = 0; i < stateNameParts.length; i++) {
      if (i === stateNameParts.length - 1) {
        name += `${stateNameParts[i]}`;
      } else {
        name += `${stateNameParts[i]} `;
      }
    }
  }

  return name;
}
