import _ from 'lodash';

import handleSubArray from './sub-array';
import handleType from './type';
import handleDefault from './default';
import handleEnum from './enum';
import handleMinMax from './min-max';

function convertSub(subSchema) {
  return {
    ...handleType(subSchema),
    ...handleDefault(subSchema),
    ...handleEnum(subSchema),
    ...handleMinMax(subSchema),
    ...handleSubArray(subSchema),
  };
}

function convert(schema) {
  const requirements = [];
  const properties = {};

  schema.eachPath((path, subSchema) => {
    const { options } = subSchema;
    const { required } = options;

    if (_.includes(path, '.')) {
      const paths = _.split(path, '.');
      const propertiePath = _.join(paths, '.properties.');
      const propertieFatherPath = _.join(_.take(paths, paths.length - 1), '.properties.');

      _.set(properties, `${propertieFatherPath}.type`, 'object');
      _.set(properties, propertiePath, convertSub(subSchema));
    } else {
      if (required) requirements.push(path);

      properties[path] = convertSub(subSchema);
    }
  });

  return {
    type: 'object',
    required: requirements,
    properties,
  };
}

export {
  convert,
  convertSub,
};
