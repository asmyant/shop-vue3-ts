<template>
  <div class="pagination-list">
    <div class="pagination-list__wrapper">
      <button
        v-for="item of total"
        :key="item"
        @click="paginationListChangePage(item)"
        :class="paginationListItemClasses(item)"
        class="pagination-list__item"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';

defineProps<{
  total: number,
}>();

const emits = defineEmits(['changePage']);

const paginationListCurrentPage = ref(1);

const paginationListItemClasses = (page: number) => ({
  'pagination-list__item--is-active': page === unref(paginationListCurrentPage),
});

const paginationListChangePage = (page: number) => {
  emits('changePage', page);
  paginationListCurrentPage.value = page;
};
</script>

<style lang="scss" scoped>
@import "@/components/paginationList/styles/paginationList/component";
</style>
