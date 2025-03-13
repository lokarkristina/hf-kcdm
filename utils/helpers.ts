/**
 * Formats a date string into a custom format: "DD. MONTH YYYY"
 * Month is displayed in uppercase Slovenian language format
 *
 * @param date - The date string to format
 * @returns A formatted date string in the format "DD. MONTH YYYY"
 * @example
 * formatDate("2023-12-25") // Returns "25. DECEMBER 2023"
 */
export const formatDate = (date: string) => {
  const d = new Date(date)
  const month = d.toLocaleString('sl-SI', { month: 'long' }).toLocaleUpperCase()

  return `${d.getDate()}. ${month} ${d.getFullYear()}`
}
