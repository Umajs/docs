<template>
  <Layout>
    <template #page-bottom>
      <footer class="docs-footer page-meta">
        <div :class="$style.footerContainer" role="presentation">
          <div :class="$style.docsInfo">
            MIT Licensed | Copyright © 2005-present 58.com
          </div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<style module lang="scss">
.footerContainer {
  .docsInfo {
    display: grid;
    place-items: center;
    padding-top: 20px;
    text-align: center;
  }
}
</style>
