import {
  defineNamespace,
  defineProjections,
  Model as ОстатНаСкладMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi-остат-на-склад';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОстатНаСкладMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
