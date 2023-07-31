// 移植自 field-form https://github.com/react-component/field-form/blob/master/src/utils/validateUtil.ts#L21
export function replaceMessage(
  template: string,
  kv: Record<string, string>
): string {
  return template.replace(/\$\{\w+\}/g, (str: string) => {
    const key = str.slice(2, -1)
    return kv[key]
  })
}
