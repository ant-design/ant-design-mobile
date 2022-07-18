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
</style>
`

export function mockGlobalStyles() {
  document.head.innerHTML += mockStyleHtml
}
