const config = {
  getTransformModulePath() {
    return require.resolve('./scripts/transformer');
  },
};

module.exports = config;
