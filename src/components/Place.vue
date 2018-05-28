<template>
  <div>
    <a>場所</a>
    <select>
      <option value="tokyo">東京</option>
      <option value="saitama">埼玉</option>
      <option value="chiba">千葉</option>
    </select>
    <input type="text" class="datepicker">
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var datepicker = document.querySelectorAll('.datepicker')

  // eslint-disable-next-line
  M.Datepicker.init(datepicker)

  var select = document.querySelectorAll('select')

  // eslint-disable-next-line
  M.FormSelect.init(select)
})

export default {
  name: 'Place'
}
</script>
