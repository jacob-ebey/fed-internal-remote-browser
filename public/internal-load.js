async function someKindOfDynamicLoading() {
  return {
    init: async () => {},
    get: async () => () => (name) => console.log(`Hello, ${name}`),
  };
}

const modProm = someKindOfDynamicLoading();
let mod;

INTERNAL_LOAD = {
  init: async (...args) => {
    mod = await modProm;

    await mod.init(...args);
  },
  get: (...args) => {
    return mod.get(...args);
  },
};
