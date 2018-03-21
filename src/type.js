function handleType(propertieSchema) {
  let type = '';
  let format;
  let pattern;

  const { instance } = propertieSchema;

  switch (instance) {
    case 'String':
      type = 'string';
      break;
    case 'Number':
      type = 'number';
      break;
    case 'Date':
      type = 'string';
      format = 'date-time';
      break;
    case 'Buffer':
      type = 'string';
      format = 'binary';
      break;
    case 'Boolean':
      type = 'boolean';
      break;
    case 'Mixed':
      type = 'object';
      break;
    case 'ObjectID':
      type = 'string';
      pattern = '^[0-9a-fA-F]{24}$';
      break;
    case 'Array':
      type = 'array';
      break;
    case 'Decimal128':
      type = 'number';
      break;
    default:
      break;
  }

  return {
    type,
    format,
    pattern,
  };
}

export default handleType;
