module.exports.useTransform = function (module, code) {
  return code.indexOf('import') !== -1 && code.indexOf('\'antm\'') !== -1;
};
