<template>
  <div class="about">
    <a-button type="primary">Primary</a-button>
     <a-pagination
    :pageSizeOptions="pageSizeOptions"
    :total="total"
    showSizeChanger
    :pageSize="pageSize"
    v-model="current"
    @showSizeChange="onShowSizeChange"
  >
    <template slot="buildOptionText" slot-scope="props">
      <span v-if="props.value!=='50'">{{props.value}}条/页</span>
      <span v-if="props.value==='50'">全部</span>
    </template>
  </a-pagination>
  </div>
</template>
<script>
export default {
    data() {
      return {
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        current: 1,
        pageSize: 10,
        total: 50,
      };
    },
    methods: {
      onShowSizeChange(current, pageSize) {
        this.pageSize = pageSize;
      },
    },
  };
</script>