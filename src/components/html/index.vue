<template>

  <main>
    <div class="container py-4">
      <header class="pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
          <span class="fs-4">EPOS Html Tag Statistics</span>
        </a>
      </header>

      <div class="p-2 mb-4 bg-light rounded-3 text-start">
        <div class="container-fluid py-2">
          <h1 class="display-6 fw-bold">EPOS Htmlの説明</h1>
          <div class="text-muted fw-normal">
              <ul class="list-unstyled ps-4">
                <li>１、各画面のHTMLの内容は、F12キーを押下する</li>
                <li>２、HTMLの内容をコピーし、ローカルnoteへ貼り付け</li>
                <li>３、UTF-8形式で、保存する。ファイルタイプは<code>html</code>または<code>htm</code>です</li>
              </ul>
          </div>

          <el-upload
                  ref="upload"
                  :limit="1"
                  accept=".html, .htm"
                  :on-error="handleUploadError"
                  :on-exceed="handleExceed"
                  :on-success="handleFileSuccess"
                  :on-progress="handleFileUploadProgress"
                  :disabled="isUploading"
                  :action="uploadHtmlUrl"
                  :headers="headers"
                  class="ps-4"
                  drag
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处,或<em>点击上传</em></div>
            <template #tip>
              <div class="el-upload__tip text-danger">
                TIPS：インポートできるファイル形式は：html、htm
              </div>
            </template>
          </el-upload>

        </div>
      </div>

      <div id="api-contents-div" class="text-start ps-4" v-show="isContentsShow">

        <h2 class="pb-2 border-bottom">Html tag statistics</h2>
        <div class="row align-items-md-stretch">
        <div class="col">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
              <pre v-text="tagContent"></pre>
          </div>
        </div>
      </div>

      </div>
    </div>

  </main>

</template>

<script>
  import { getCsrfToken } from '@/utils/auth'
  import $ from 'jquery'

  export default {
    name: "index",
    data() {
      return {
        // 上传的API的datasets的服务器地址.
        uploadHtmlUrl: process.env.VUE_APP_BASE_API + "apis/htmlTag/upload",
        // 上传Flg.
        isUploading: false,
        // POST请求头数据.
        headers: {
          'X-CSRFToken': getCsrfToken()
        },
        // API上传结果.
        tagContent: '',
        // API上传结果显示Flg.
        isContentsShow: false
      }
    },
    methods: {
      // 文件上传中处理.
      handleFileUploadProgress(event, file, fileList) {
        this.isUploading = true
        this.clearTagContents()
      },
      // 文件上传成功处理
      handleFileSuccess(response, file, fileList) {
        this.isUploading = false
        this.$refs.upload.clearFiles()

        this.tagContent = response.tag_contents
        this.isContentsShow = true
      },
      // 文件个数超出.
      handleExceed() {
        this.isUploading = false
        this.clearTagContents()
        this.$message.error(`只允许上传单个文件`)
      },
      // 上传失败
      handleUploadError(err) {
        this.isUploading = false
        this.clearTagContents()
        this.$message.error("上传失败, 请重试")
      },
      // 清除API上传结果.
      clearTagContents() {
        this.tagContent = ""
        this.isContentsShow = false
      }
      // /** 下载模板操作 */
      // importTemplate() {
      //   alert("importTemplate")
      // },
    }
  }
</script>

<style scoped>

  .el-upload-dragger {
    width: 800px;
  }

</style>