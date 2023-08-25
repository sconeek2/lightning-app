export const formatDate = (inputDate) => {
  const dateParts = inputDate.split("/");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const formattedDate = new Date(year, month - 1, day);

  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  return formattedDate.toLocaleDateString(undefined, options);
};
