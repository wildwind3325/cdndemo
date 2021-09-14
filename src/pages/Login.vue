<template>
  <div>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$router.replace('/home');
    }
  }
}
</script>