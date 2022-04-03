const formatDate = (date: Date) => {
  const formatedDate = date.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long"
  });
  return formatedDate;
};

export { formatDate };
