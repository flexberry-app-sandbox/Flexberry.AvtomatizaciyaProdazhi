import { Serializer as ЗаказПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi-заказ-покуп';
import ОтчетОПродажахSerializer from './i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';

export default ОтчетОПродажахSerializer.extend(ЗаказПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
