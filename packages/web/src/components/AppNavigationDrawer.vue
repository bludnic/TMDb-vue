<template>
  <v-navigation-drawer
    permanent
    app
  >
    <v-card flat class="pa-3">
      <h1>TMDb Vue App</h1>
    </v-card>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
