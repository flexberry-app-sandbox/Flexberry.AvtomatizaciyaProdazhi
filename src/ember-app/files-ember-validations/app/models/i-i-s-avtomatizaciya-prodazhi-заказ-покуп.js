import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПокупMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-заказ-покуп';

import ОтчетОПродажахModel from './i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';

let Model = ОтчетОПродажахModel.extend(ЗаказПокупMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
