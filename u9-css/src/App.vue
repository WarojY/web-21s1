<template>
  <div id="app">
    <b-navbar class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" class="is-size-3">
          Vue.js
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-dropdown label="Learn" boxed collapsible hoverable>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/guide' }">
            Guide
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/api' }">
            API
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/...' }">
            ...
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Ecosystem" boxed collapsible hoverable>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/...' }">
            ...
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-item tag="router-link" :to="{ path: '/tem' }">
          Team
        </b-navbar-item>

        <b-navbar-dropdown label="Resources" boxed collapsible hoverable>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/...' }">
            ...
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Spport Vue" boxed collapsible hoverable>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/...' }">
            ...
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Translations" boxed collapsible hoverable>
          <b-navbar-item tag="router-link" :to="{ path: '/docs/...' }">
            ...
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <router-view />
  </div>
</template>
