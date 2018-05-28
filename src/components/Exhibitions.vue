<template>
  <div>
    <li v-for="ex in $store.state.exhibitions" :key="ex.id">
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://materializecss.com/images/sample-1.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{{ex.name}}</p>
            <p>{{`${ex.session.from}~${ex.session.to}`}}</p>
          </div>
          <div class="card-action">
            <a href="#">詳細</a>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Exhibitions'
})
</script>

<style>
div li { list-style-type: none; }

.card {
  width: 720px;
}

.card-image {
  width: 180px;
}
</style>
