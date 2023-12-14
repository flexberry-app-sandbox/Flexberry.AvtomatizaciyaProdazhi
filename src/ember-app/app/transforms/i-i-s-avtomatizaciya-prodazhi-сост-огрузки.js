import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОгрузкиEnum from '../enums/i-i-s-avtomatizaciya-prodazhi-сост-огрузки';

export default FlexberryEnum.extend({
  enum: СостОгрузкиEnum,
  sourceType: 'IIS.Avtomatizaciya_prodazhi.СостОгрузки'
});
