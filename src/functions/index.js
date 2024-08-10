const mappingFn = (
  dictionary,
  fieldValue,
  field = "value",
  returnField = "label"
) => {
  const filterArr = dictionary.filter((item) => item[field] === fieldValue);
  if (filterArr.length) {
    return filterArr[0][returnField];
  } else {
    return fieldValue;
  }
};

const functions = {
  mappingFn,
};

export default functions;
