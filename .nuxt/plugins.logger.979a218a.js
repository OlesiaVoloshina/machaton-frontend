import { registerLogger } from '@vue-storefront/core'

const loggerPlugin = () => {
  const { verbosity, customLogger, ...args } = {"verbosity":"error"};
  registerLogger(customLogger || args, verbosity || 'error')
};

export default loggerPlugin;
