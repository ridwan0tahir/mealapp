const request = async (fn) => {
  const response = await fn;
  if (response.status !== 200) {
    throw new Error("Unable to fetch data!");
  }

  const data = await response.data;
  return data;
};

export default request;
