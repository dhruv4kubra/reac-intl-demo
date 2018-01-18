export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SET_LOCALE = 'SET_LOCALE';

export const setFieldValue = (field, value) => ({
  type: SET_FIELD_VALUE,
  field,
  value,
});


export const setLocale = (locale) => ({
  type: SET_LOCALE,
  locale,
  messages: require(`../translations/${locale}.json`), // eslint-disable-line
});
