# DesensText

<code src="./demos/index.tsx"></code>

# API

| Name          | Description                        | Type                        | Default |
| ------------- | ---------------------------------- | --------------------------- | ------- |
| text          | not desensitized content           | `ReactNode`                 | --      |
| desensText    | the content after desensitization  | `ReactNode`                 | --      |
| desens        | desensitization state              | `boolean`                   | --      |
| defaultDesens | default desensitization state      | `boolean`                   | `true`  |
| onChange      | callback to toggle desensitization | `(desens: boolean) => void` | --      |
