const capitalize = string => {
  const newStr = string.replace('-', ' ');
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};

export default capitalize;
