<template>

  <main class="form-sign-in">
    <el-form ref="loginForm" :model="loginForm">
      <img src="../../assets/utils/log-in.svg" class="mb-4" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please login in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="signEmail"
                 v-model="loginForm.signEmail" placeholder="name@example.com">
          <label for="signEmail">Email address</label>
        </div>

      <div class="form-floating">
        <input type="password" class="form-control" id="signPassword"
               v-model="loginForm.password" placeholder="password">
        <label for="signPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>

      <button type="button" class="w-100 btn btn-lg btn-primary" @click="handleLogin">Sign in</button>
      <hr/>
      <button type="button" class="w-100 btn btn-lg btn-primary" @click="test">Test</button>

      <p class="mt-5 mb-3 text-muted">&copy; 2021-2025</p>
    </el-form>
  </main>

</template>

<script>
import service from '../../utils/request'
import { login, csrfToken } from '@/api/login'
import { getCsrfToken, setCsrfToken } from '@/utils/auth'

export default {
  name: 'Login',
  setup() {
    alert("This is login in")
  },
  data() {
    return {
      // 登录Form.
      loginForm: {
        signEmail: "lingchen@163.com",
        password: "Aa123456",
        rememberMe: false
      }
    }
  },
  created() {
    // 获取csrf token.
    this.handleCsrfToken()
  },
  methods: {
    // 测试get方法.
    test() {
      service({
        url: "/apis/test/msg",
        method: "get"
      }).then((res) => {
        alert("222")
        console.log(res)
        alert(JSON.stringify(res.data.api_msg))
      })
    },
    handleLogin() {
      login(this.loginForm.signEmail, this.loginForm.password).then((res) => {
        alert(res.data)
      })
    },
    handleCsrfToken() {
      csrfToken().then((res) => {
        alert(res.data.csrfToken)
        setCsrfToken(res.data.csrfToken)
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