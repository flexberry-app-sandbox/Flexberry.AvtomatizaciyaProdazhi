import { Serializer as НоменклатурыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi-номенклатуры';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НоменклатурыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
