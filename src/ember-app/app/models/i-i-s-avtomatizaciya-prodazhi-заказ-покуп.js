import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказПокупMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-заказ-покуп';

import ОтчетОПродажахModel from './i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОтчетОПродажахModel.extend(ЗаказПокупMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
