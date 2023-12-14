import { Serializer as ПодразеленияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi-подразеления';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразеленияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
