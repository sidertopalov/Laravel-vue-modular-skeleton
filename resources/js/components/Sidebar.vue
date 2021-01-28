<template>
  <nav class="sidebar shadow" ref="sidebar">
    <ul class="d-flex flex-column">
      <div class="show-mobile c-white" @click="toggleSidebar(false)">
        <fa icon="times-circle" class="fa-2x sidebar-icon py-2" style="position: absolute; right: 20px" />
      </div>
      <div class="h-130p d-flex flex-column align-items-center">
        <div class="logo-wrapper d-flex justify-content-center align-items-center">
          <router-link :to="{ name: user ? 'home' : 'welcome' }" class="h-100">
            <b-img class="h-100" src="/img/logo.jpg" rounded="circle" alt="Shelby Estates"></b-img>
          </router-link>
        </div>
      </div>

      <!-- Profile  -->
      <li class="mb-1" v-if="authenticated">
        <router-link :to="{ name: 'settings.profile' }" v-on:click.native="toggleSidebar(false)">
          <b-avatar :text="this.userInitials" class="sidebar-avatar"></b-avatar>
          <span class="sidebar-text">
            {{ $t("profile.profile") }}
            <span class="font-italic">({{ user.first_name }})</span>
          </span>
        </router-link>
      </li>
      <hr v-if="authenticated" />

      <!-- <li class="mb-1">
        <router-link :to="{ name: user ? 'home' : 'welcome' }">
          <fa icon="home" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">
            {{ $t("home") }}
          </span>
        </router-link>
      </li> -->

      <!-- <li class="mb-1" v-if="userHavePermission('admin')">
        <router-link :to="{ name: 'offers.create' }">
          <fa icon="search" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("search")
          }}</span>
        </router-link>
      </li> -->

       <!-- Register new user -->
      <li class="mb-1" v-if="authenticated && userHavePermission('admin')">
        <router-link :to="{ name: 'users.create' }" v-on:click.native="toggleSidebar(false)">
          <fa icon="user-plus" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("register_user")
          }}</span>
        </router-link>
      </li>

      <hr v-if="authenticated" />

      <!-- Create offer -->
      <li class="mb-1" v-if="authenticated && userHavePermission('admin')">
        <router-link :to="{ name: '' }" v-on:click.native="toggleSidebar(false)">
          <fa icon="plus" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("properties.create")
          }}</span>
        </router-link>
      </li>

      <!-- For Sale -->
      <li class="mb-1" >
        <router-link :to="{ name: '' }" v-on:click.native="toggleSidebar(false)">
          <fa icon="home" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{ $t("properties.for_sale") }}</span>
        </router-link>
      </li>

      <!-- For Rent -->
      <li class="mb-1" v-if="userHavePermission('admin')">
        <router-link :to="{ name: '' }" v-on:click.native="toggleSidebar(false)">
          <fa icon="house-user" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{ $t("properties.for_rent") }}</span>
        </router-link>
      </li>


      <!-- <li class="mb-1"  v-if="authenticated && userHavePermission('admin')">
        <router-link :to="{ name: 'system-settings' }">
          <fa icon="cogs" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("settings")
          }}</span>
        </router-link>
      </li>

      <li class="mb-1"  v-if="authenticated && userHavePermission('admin')">
        <router-link :to="{ name: 'system-settings' }">
          <fa icon="cogs" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("settings")
          }}</span>
        </router-link>
      </li> -->

      <hr v-if="authenticated" />

      <!-- System settings -->
      <!-- <li class="mb-1"  v-if="authenticated && userHavePermission('admin')">
        <router-link :to="{ name: 'system-settings' }">
          <fa icon="cogs" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{
            $t("system_settings")
          }}</span>
        </router-link>
      </li> -->

      <li v-if="authenticated">
        <a href="#" @click.prevent="logout" @click="toggleSidebar(false)">
          <fa icon="door-open" class="fa-2x sidebar-icon py-2" />
          <span class="sidebar-text">{{ $t("logout") }}</span>
        </a>
      </li>
    </ul>

    <hr />
    <!-- About US -->
    <li class="mb-1" v-if="userHavePermission('admin')">
      <router-link :to="{ name: 'about_us' }" v-on:click.native="toggleSidebar(false)">
        <fa icon="info-circle" class="fa-2x sidebar-icon py-2" />
        <span class="sidebar-text">{{ $t("about_us") }}</span>
      </router-link>
    </li>

    <!-- <locales class="small force-bottom w-250p mb-1"></locales> -->
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Locales from '~/components/Locales'

export default {
  components: {
    Locales
  },
  name: "Sidebar",

  data: () => ({
    appName: window.config.appName,
    userInitials: "",
  }),

  mounted() {
    this.userInitials = this.user && this.user.first_name ? this.user.first_name[0] + this.user.last_name[0] : "";
  },
  computed: mapGetters({
    user: "auth/user",
    authenticated: 'auth/check'
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "welcome" });
    },
  },
};
</script>
