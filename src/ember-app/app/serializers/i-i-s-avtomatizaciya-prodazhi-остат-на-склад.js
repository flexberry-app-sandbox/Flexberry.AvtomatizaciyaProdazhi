import { Serializer as ОстатНаСкладSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi-остат-на-склад';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОстатНаСкладSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
