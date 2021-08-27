<template>

  <main class="form-sign-in">
    <form>
      <img src="../../assets/utils/log-in.svg" class="mb-4" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please login in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="signEmail" placeholder="name@example.com">
        <label for="signEmail">Email address</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" id="signPassword" placeholder="password">
        <label for="signPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>

      <button type="submit" class="w-100 btn btn-lg btn-primary">Sign in</button>
      <hr/>
      <button type="button" class="w-100 btn btn-lg btn-primary" @click="test">Test</button>

      <p class="mt-5 mb-3 text-muted">&copy; 2021-2025</p>
    </form>
  </main>

</template>

<script>
import service from '../../utils/request';
export default {
  name: 'Login',
  setup() {
    // alert("This is login in")
  },
  methods: {
    test() {
      service({
        url: "/apis/test/msg",
        method: "get"
      }).then((res) => {
        alert("222")
        console.log(res)
        alert(JSON.stringify(res.data.api_msg))
      })
    }
  }
}
</script>

<style scoped>

  .form-sign-in {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-sign-in .checkbox {
    font-weight: 400;
  }

  .form-sign-in .form-floating:focus-within {
    z-index: 2;
  }

  .form-sign-in input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-sign-in input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }


</style>