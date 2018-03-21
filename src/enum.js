function handleEnum(propertieSchema) {
  const { enumValues: enumx } = propertieSchema;

  return {
    enum: (enumx && enumx.length) ? enumx : undefined,
  };
}

export default handleEnum;
