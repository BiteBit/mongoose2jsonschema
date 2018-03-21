import _ from 'lodash';

function handleDefault(propertieSchema) {
  const { options } = propertieSchema;
  let { default: defaultValue } = options;

  if (_.isFunction(defaultValue)) {
    defaultValue = defaultValue();
  }

  return {
    default: defaultValue,
  };
}

export default handleDefault;
