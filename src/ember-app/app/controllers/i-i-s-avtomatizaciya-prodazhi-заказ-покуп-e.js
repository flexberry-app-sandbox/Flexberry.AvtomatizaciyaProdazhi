import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг+номенклатуры':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номенклатура',
            required: true,
            relationName: 'номенклатуры',
            projection: 'НоменклатурыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
