async function someKindOfDynamicLoading() {
  return {
    init: async () => {},
    get: async () => () => (name) => console.log(`Hello, ${name}`),
  };
}

INTERNAL_LOAD = (async () => {
  return await someKindOfDynamicLoading();
})();
