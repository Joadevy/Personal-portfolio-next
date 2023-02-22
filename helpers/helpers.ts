export function formatLink(str: string): string {
  const formattedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return formattedStr + ":";
}
