import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОплатыEnum from '../enums/i-i-s-avtomatizaciya-prodazhi-сост-оплаты';

export default FlexberryEnum.extend({
  enum: СостОплатыEnum,
  sourceType: 'IIS.Avtomatizaciya_prodazhi.СостОплаты'
});
