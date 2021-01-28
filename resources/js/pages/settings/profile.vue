<template>
  <card :title="$t('your_info')">
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')" />

      <!-- Email -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
        <div class="col-md-7">
          <input v-model="user.email" disabled :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
        </div>
      </div>

      <!-- First Name -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('first_name') }}</label>
        <div class="col-md-7">
          <input v-model="form.first_name" :class="{ 'is-invalid': form.errors.has('first_name') }" class="form-control" type="text" name="first_name">
          <has-error :form="form" field="first_name" />
        </div>
      </div>

       <!-- Last Name -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('last_name') }}</label>
        <div class="col-md-7">
          <input v-model="form.last_name" :class="{ 'is-invalid': form.errors.has('last_name') }" class="form-control" type="text" name="last_name">
          <has-error :form="form" field="last_name" />
        </div>
      </div>

       <!-- Phone Number -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('phone_number') }}</label>
        <div class="col-md-7">
          <input v-model="form.phone_number" :class="{ 'is-invalid': form.errors.has('phone_number') }" class="form-control" type="text" name="phone_number">
          <has-error :form="form" field="phone_number" />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="form.busy" type="success">
            {{ $t('update') }}
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      first_name: '',
      last_name: '',
      phone_number: ''
    })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data } = await this.form.patch('/api/v1/users/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
