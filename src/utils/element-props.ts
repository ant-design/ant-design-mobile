export interface ElementProps<
  S extends Record<string, any> = Record<never, never>
> {
  className?: string
  style?: React.CSSProperties & S
}
