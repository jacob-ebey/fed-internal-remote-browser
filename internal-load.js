async function someKindOfDynamicLoading() {
  return {
    init: async () => {},
    get: async () => () => (name) => console.log(`Hello, ${name}`),
  };
}

export default (async () => {
  return await someKindOfDynamicLoading();
})();
