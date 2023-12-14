import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-prodazhi-ед-измер-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-ед-измер-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-ед-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-ед-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-ед-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-контрагенты-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-контрагенты-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-контрагенты-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-контрагенты-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-контрагенты-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-номенклатуры-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-номенклатуры-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-номенклатуры-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-номенклатуры-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-номенклатуры-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-организации-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-организации-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-организации-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-организации-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-организации-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-подразеления-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-подразеления-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-подразеления-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-подразеления-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-подразеления-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi-склады-l');
  this.route('i-i-s-avtomatizaciya-prodazhi-склады-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi-склады-e/new' });
});

export default Router;
