<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="mb-8 font-bold text-lg">Personal transaction history</div>
        <a-col class="gutter-row" :span="24">
          <a-table :columns="columns" :data-source="data" bordered>
            <template #headerCell="{ column }">
              <template v-if="column.key === 'name'">
                <span>
                  <smile-outlined />
                  Name
                </span>
              </template>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'name'">
                <a>
                  {{ record.name }}
                </a>
              </template>
              <template v-else-if="column.key === 'tags'">
                <span>
                  <a-tag v-for="tag in record.tags" :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </template>
              <template v-else-if="column.key === 'action'">
                <span>
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link">
                    More actions
                    <down-outlined />
                  </a>
                </span>
              </template>
            </template>
          </a-table>
        </a-col>
      </div>
    </div>
  </div>

</template>
<script setup>
import { Button } from 'ant-design-vue'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
</script>