const mockStyleHtml = `
<style>
  .adm-picker-view-column-wheel {
    --item-height: 34px;
  }

  .adm-picker-view-column-wheel {
    --item-height: 34px;
  }

  .adm-picker-view-column-wheel {
    --item-height: 34px;
  }

  .@{class-prefix-picker-view}-item-height-measure {
    height: 34px;
  }
</style>
`

export function mockGlobalStyles() {
  document.head.innerHTML += mockStyleHtml
}
