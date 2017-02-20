import assign from 'object-assign';

export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  const locale = context && context.antLocale && context.antLocale[componentName] ?
    context.antLocale[componentName] : getDefaultLocale();

  let result = assign({}, locale);
  if (props.locale) {
    result = assign(result, props.locale);
    if (props.locale.lang) {
      result.lang = assign({}, locale.lang, props.locale.lang);
    }
  }
  return result;
}

export function getLocaleCode(context) {
  const localeCode = context.antLocale && context.antLocale.locale;
  // Had use LocaleProvide but didn't set locale
  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn';
  }
  return localeCode;
}
