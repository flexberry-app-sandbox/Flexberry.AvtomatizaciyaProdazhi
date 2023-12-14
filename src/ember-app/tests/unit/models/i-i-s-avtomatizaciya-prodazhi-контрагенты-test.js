import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi-контрагенты', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi-контрагенты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-prodazhi-ед-измер',
    'model:i-i-s-avtomatizaciya-prodazhi-заказ-покуп',
    'model:i-i-s-avtomatizaciya-prodazhi-контрагенты',
    'model:i-i-s-avtomatizaciya-prodazhi-номенклатуры',
    'model:i-i-s-avtomatizaciya-prodazhi-организации',
    'model:i-i-s-avtomatizaciya-prodazhi-остат-на-склад',
    'model:i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах',
    'model:i-i-s-avtomatizaciya-prodazhi-подразеления',
    'model:i-i-s-avtomatizaciya-prodazhi-склады',
    'model:i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
