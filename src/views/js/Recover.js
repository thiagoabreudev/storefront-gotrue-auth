
import GoTrue from 'gotrue-js'

export default {
  name: 'Recover',
  data: () => {
    return {
      newPassword: undefined,
      user: {},
      error: undefined,
      passwordUpdated: false
    }
  },
  created () {
    this.verify()
  },

  methods: {
    verify () {
      const auth = new GoTrue({
        APIUrl: 'https://gotrue.ecomplus.biz',
        audience: '',
        setCookie: false
      })

      auth.recover(this.$route.params.token)
        .then(res => { this.user = res })
        .catch(error => { this.error = error })
    },

    updatePassword () {
      this.user.update({ password: this.newPassword })
        .then(res => {
          this.user = res
          this.passwordUpdated = true
          this.error = undefined
        })
        .catch(error => { this.error = error })
    }
  }
}
