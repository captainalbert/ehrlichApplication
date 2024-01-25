export function formatDateToday() {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
  const day = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();

  return `${month}/${day}/${year}`;
}
