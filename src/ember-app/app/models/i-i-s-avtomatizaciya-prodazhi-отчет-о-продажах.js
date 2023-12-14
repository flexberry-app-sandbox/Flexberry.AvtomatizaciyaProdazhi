import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОПродажахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОПродажахMixin, Validations, {
});

defineProjections(Model);

export default Model;
