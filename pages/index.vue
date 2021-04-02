<template>
<div class="row">
    <div class="col-3">
            <div class="left-side">
                <label class="h6">Categories</label>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
            </div>
        </div>
        <div class="content col-9">
            <ul class="nav bg-light">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  
            </ul>
            
            <div class="">
              <Nuxt />

            </div>
            
        </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
})

</script>

