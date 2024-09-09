const isValidIPv4 = (ip) => {
  const spiltedIp = ip.split(".");

  if (spiltedIp?.length !== 4) return false;

  return spiltedIp.every((octate) => {
    const num = Number(octate);

    return num >= 0 && num <= 255 && String(num) === octate;
  });
};

module.exports = isValidIPv4;
