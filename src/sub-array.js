import { convert, convertSub } from './index';

function handleSub(propertieSchema) {
  let schema = {};

  switch (propertieSchema.constructor.name) {
    case 'SchemaArray':
      schema = { items: convertSub(propertieSchema.caster) };
      break;
    case 'DocumentArray':
      schema = { items: convert(propertieSchema.schema) };
      break;
    default:
      break;
  }

  return {
    ...schema,
  };
}

export default handleSub;

