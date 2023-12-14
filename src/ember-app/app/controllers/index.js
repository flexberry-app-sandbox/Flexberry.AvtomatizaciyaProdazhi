import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-продажи.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-продажи.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.отчеты.i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-организации-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-склады-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-номенклатуры-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-номенклатуры-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-номенклатуры-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-ед-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-ед-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-ед-измер-l.title'),
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-подразеления-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-подразеления-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-подразеления-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.справочники.i-i-s-avtomatizaciya-prodazhi-контрагенты-l.title'),
              icon: 'table',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-продажи.договора.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-продажи.договора.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-продажи.договора.i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-продажи.договора.i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l.title'),
              icon: 'address card',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})