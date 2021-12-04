# DesenseText

<code src="./demos/demo1.tsx"></code>

# API

| Name          | Description                        | Type                        | Default |
| ------------- | ---------------------------------- | --------------------------- | ------- |
| text          | Not desensitized content           | `ReactNode`                 | --      |
| desenseText   | The content after desensitization  | `ReactNode`                 | --      |
| desense       | Desensitization state              | `boolean`                   | --      |
| defaultDesens | Default desensitization state      | `boolean`                   | `true`  |
| onChange      | Callback to toggle desensitization | `(desens: boolean) => void` | --      |
