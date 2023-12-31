import {
  defineNamespace,
  defineProjections,
  Model as ПодразеленияMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-подразеления';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодразеленияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
