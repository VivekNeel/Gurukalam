const getDefaultConfig = () => ({
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'html'],
    assetExts: ['png', 'jpg', 'svg', 'html'],
  },
});

module.exports = (async () => {
  const {
    resolver: {
      sourceExts,
      assetExts,
    },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
