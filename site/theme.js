module.exports = function () {
  return process.env.HD_ENV === 'hd' ? { hd: '2px' } : {};
};
