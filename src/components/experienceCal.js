export const calculateExperience = (experiences) => {
  if (!experiences || experiences.length === 0) return 0;

  let totalMonths = 0;

  experiences.forEach((exp) => {
    const dateParts = exp.duration.split(" – ");
    const startDate = parseDate(dateParts[0]);
    const endDate = exp.duration.includes("Present") 
      ? new Date() 
      : parseDate(dateParts[1]);

    if (startDate && endDate) {
      const months = 
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
      totalMonths += months;
    }
  });

  const years = (totalMonths / 12).toFixed(1);
  return parseFloat(years);
};

const parseDate = (dateString) => {
  const months = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  const parts = dateString.trim().split(" ");
  if (parts.length < 2) return null;

  const month = months[parts[0]];
  const year = parseInt(parts[1]);

  if (month === undefined || isNaN(year)) return null;

  return new Date(year, month, 1);
};