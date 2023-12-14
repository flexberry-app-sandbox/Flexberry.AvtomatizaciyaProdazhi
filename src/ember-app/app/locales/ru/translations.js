import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAvtomatizaciya_prodazhiЕдИзмерLForm from './forms/i-i-s-avtomatizaciya-prodazhi-ед-измер-l';
import IISAvtomatizaciya_prodazhiЗаказПокупLForm from './forms/i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l';
import IISAvtomatizaciya_prodazhiКонтрагентыLForm from './forms/i-i-s-avtomatizaciya-prodazhi-контрагенты-l';
import IISAvtomatizaciya_prodazhiНоменклатурыLForm from './forms/i-i-s-avtomatizaciya-prodazhi-номенклатуры-l';
import IISAvtomatizaciya_prodazhiОрганизацииLForm from './forms/i-i-s-avtomatizaciya-prodazhi-организации-l';
import IISAvtomatizaciya_prodazhiОстатНаСкладLForm from './forms/i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l';
import IISAvtomatizaciya_prodazhiОтчетОПродажахLForm from './forms/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l';
import IISAvtomatizaciya_prodazhiПодразеленияLForm from './forms/i-i-s-avtomatizaciya-prodazhi-подразеления-l';
import IISAvtomatizaciya_prodazhiСкладыLForm from './forms/i-i-s-avtomatizaciya-prodazhi-склады-l';
import IISAvtomatizaciya_prodazhiЕдИзмерEForm from './forms/i-i-s-avtomatizaciya-prodazhi-ед-измер-e';
import IISAvtomatizaciya_prodazhiЗаказПокупEForm from './forms/i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e';
import IISAvtomatizaciya_prodazhiКонтрагентыEForm from './forms/i-i-s-avtomatizaciya-prodazhi-контрагенты-e';
import IISAvtomatizaciya_prodazhiНоменклатурыEForm from './forms/i-i-s-avtomatizaciya-prodazhi-номенклатуры-e';
import IISAvtomatizaciya_prodazhiОрганизацииEForm from './forms/i-i-s-avtomatizaciya-prodazhi-организации-e';
import IISAvtomatizaciya_prodazhiОстатНаСкладEForm from './forms/i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e';
import IISAvtomatizaciya_prodazhiОтчетОПродажахEForm from './forms/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e';
import IISAvtomatizaciya_prodazhiПодразеленияEForm from './forms/i-i-s-avtomatizaciya-prodazhi-подразеления-e';
import IISAvtomatizaciya_prodazhiСкладыEForm from './forms/i-i-s-avtomatizaciya-prodazhi-склады-e';
import IISAvtomatizaciya_prodazhiЕдИзмерModel from './models/i-i-s-avtomatizaciya-prodazhi-ед-измер';
import IISAvtomatizaciya_prodazhiЗаказПокупModel from './models/i-i-s-avtomatizaciya-prodazhi-заказ-покуп';
import IISAvtomatizaciya_prodazhiКонтрагентыModel from './models/i-i-s-avtomatizaciya-prodazhi-контрагенты';
import IISAvtomatizaciya_prodazhiНоменклатурыModel from './models/i-i-s-avtomatizaciya-prodazhi-номенклатуры';
import IISAvtomatizaciya_prodazhiОрганизацииModel from './models/i-i-s-avtomatizaciya-prodazhi-организации';
import IISAvtomatizaciya_prodazhiОстатНаСкладModel from './models/i-i-s-avtomatizaciya-prodazhi-остат-на-склад';
import IISAvtomatizaciya_prodazhiОтчетОПродажахModel from './models/i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах';
import IISAvtomatizaciya_prodazhiПодразеленияModel from './models/i-i-s-avtomatizaciya-prodazhi-подразеления';
import IISAvtomatizaciya_prodazhiСкладыModel from './models/i-i-s-avtomatizaciya-prodazhi-склады';
import IISAvtomatizaciya_prodazhiТЧТоварИУслугModel from './models/i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-prodazhi-ед-измер': IISAvtomatizaciya_prodazhiЕдИзмерModel,
    'i-i-s-avtomatizaciya-prodazhi-заказ-покуп': IISAvtomatizaciya_prodazhiЗаказПокупModel,
    'i-i-s-avtomatizaciya-prodazhi-контрагенты': IISAvtomatizaciya_prodazhiКонтрагентыModel,
    'i-i-s-avtomatizaciya-prodazhi-номенклатуры': IISAvtomatizaciya_prodazhiНоменклатурыModel,
    'i-i-s-avtomatizaciya-prodazhi-организации': IISAvtomatizaciya_prodazhiОрганизацииModel,
    'i-i-s-avtomatizaciya-prodazhi-остат-на-склад': IISAvtomatizaciya_prodazhiОстатНаСкладModel,
    'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах': IISAvtomatizaciya_prodazhiОтчетОПродажахModel,
    'i-i-s-avtomatizaciya-prodazhi-подразеления': IISAvtomatizaciya_prodazhiПодразеленияModel,
    'i-i-s-avtomatizaciya-prodazhi-склады': IISAvtomatizaciya_prodazhiСкладыModel,
    'i-i-s-avtomatizaciya-prodazhi-т-ч-товар-и-услуг': IISAvtomatizaciya_prodazhiТЧТоварИУслугModel
  },

  'application-name': 'A',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A',
          title: 'A'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'автоматизация-продажи': {
          caption: 'Автоматизация продажи',
          title: 'Автоматизация продажи',
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l': {
              caption: 'Отчет о продажах',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l': {
              caption: 'Остатки на складе',
              title: ''
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-prodazhi-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-номенклатуры-l': {
              caption: 'Номенклатуры',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-ед-измер-l': {
              caption: 'Ед измер',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-подразеления-l': {
              caption: 'Подразеления',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            }
          },
          договора: {
            caption: 'Договора',
            title: 'Договора',
            'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l': {
              caption: 'Заказ покупателя',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avtomatizaciya-prodazhi-ед-измер-l': IISAvtomatizaciya_prodazhiЕдИзмерLForm,
    'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-l': IISAvtomatizaciya_prodazhiЗаказПокупLForm,
    'i-i-s-avtomatizaciya-prodazhi-контрагенты-l': IISAvtomatizaciya_prodazhiКонтрагентыLForm,
    'i-i-s-avtomatizaciya-prodazhi-номенклатуры-l': IISAvtomatizaciya_prodazhiНоменклатурыLForm,
    'i-i-s-avtomatizaciya-prodazhi-организации-l': IISAvtomatizaciya_prodazhiОрганизацииLForm,
    'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-l': IISAvtomatizaciya_prodazhiОстатНаСкладLForm,
    'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-l': IISAvtomatizaciya_prodazhiОтчетОПродажахLForm,
    'i-i-s-avtomatizaciya-prodazhi-подразеления-l': IISAvtomatizaciya_prodazhiПодразеленияLForm,
    'i-i-s-avtomatizaciya-prodazhi-склады-l': IISAvtomatizaciya_prodazhiСкладыLForm,
    'i-i-s-avtomatizaciya-prodazhi-ед-измер-e': IISAvtomatizaciya_prodazhiЕдИзмерEForm,
    'i-i-s-avtomatizaciya-prodazhi-заказ-покуп-e': IISAvtomatizaciya_prodazhiЗаказПокупEForm,
    'i-i-s-avtomatizaciya-prodazhi-контрагенты-e': IISAvtomatizaciya_prodazhiКонтрагентыEForm,
    'i-i-s-avtomatizaciya-prodazhi-номенклатуры-e': IISAvtomatizaciya_prodazhiНоменклатурыEForm,
    'i-i-s-avtomatizaciya-prodazhi-организации-e': IISAvtomatizaciya_prodazhiОрганизацииEForm,
    'i-i-s-avtomatizaciya-prodazhi-остат-на-склад-e': IISAvtomatizaciya_prodazhiОстатНаСкладEForm,
    'i-i-s-avtomatizaciya-prodazhi-отчет-о-продажах-e': IISAvtomatizaciya_prodazhiОтчетОПродажахEForm,
    'i-i-s-avtomatizaciya-prodazhi-подразеления-e': IISAvtomatizaciya_prodazhiПодразеленияEForm,
    'i-i-s-avtomatizaciya-prodazhi-склады-e': IISAvtomatizaciya_prodazhiСкладыEForm
  },

});

export default translations;
