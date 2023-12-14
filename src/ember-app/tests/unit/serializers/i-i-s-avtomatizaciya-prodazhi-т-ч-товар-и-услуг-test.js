import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-prodazhi-сост-огрузки',
    'transform:i-i-s-avtomatizaciya-prodazhi-сост-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
