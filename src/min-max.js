function handleMinMax(propertieSchema) {
  const { instance, options } = propertieSchema;
  const { min, max } = options;

  return {
    minimum: instance === 'Number' ? min : undefined,
    maximum: instance === 'Number' ? max : undefined,
  };
}

export default handleMinMax;
