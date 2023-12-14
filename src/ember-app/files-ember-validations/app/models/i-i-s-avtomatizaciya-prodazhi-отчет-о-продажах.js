import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОПродажахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОПродажахMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
