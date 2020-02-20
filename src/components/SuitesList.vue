<template>
  <b-container fluid>
    <b-button-toolbar key-nav aria-label="Toolbar with button groups" class="mt-5 mb-5">
      <b-button-group class="mx-1">
        <b-button variant="success" href="/new">New</b-button>
      </b-button-group>
    </b-button-toolbar>

    <!-- Main table element -->
    <b-table class="mt-2 mb-2" show-empty small stacked="md" :items="suites">
      <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>

      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >Info modal</b-button>
        <b-button
          size="sm"
          @click="row.toggleDetails"
        >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      suites: null,
      error: null
    };
  },
  computed: {},
  mounted() {},
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      console.log("fetching data ...");
      this.$axios
        .get("http://localhost:5001/api/v1/suites", { crossdomain: true })
        .then(response => {
          console.log(response.data);
          this.suites = response.data;
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>