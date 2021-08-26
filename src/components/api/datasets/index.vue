<template>
  <div class="upload-file">

    <el-upload
      ref="upload"
      :limit="1"
      accept=".xlsx, .xls"
      :on-error="handleUploadError"
      :on-exceed="handleExceed"
      :on-success="handleFileSuccess"
      :on-progress="handleFileUploadProgress"
      :disabled="isUploading"
      :action="uploadDatasetsUrl"
      drag
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip">
        <el-link type="info" style="font-size:12px" @click="importTemplate">下载模板</el-link>
      </div>
      <div class="el-upload__tip" style="color:red">提示：仅允许导入“xls”或“xlsx”格式文件！</div>
    </el-upload>

  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      // 上传的API的datasets的服务器地址.
      uploadDatasetsUrl: process.env.VUE_APP_BASE_API + "/datasets/upload",
      isUploading: false,
    }
  },
  computed: {

  },
  methods: {
    // 文件上传中处理.
    handleFileUploadProgress(event, file, fileList) {
      this.isUploading = true;
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.isUploading = false;
      this.$refs.upload.clearFiles();
      this.$alert(response.msg, "导入结果", { dangerouslyUseHTMLString: true });
    },
    // 文件个数超出.
    handleExceed() {
      this.$message.error(`只允许上传单个文件`);
    },
    // 上传失败
    handleUploadError(err) {
      this.$message.error("上传失败, 请重试");
    },
    /** 下载模板操作 */
    importTemplate() {
      alert("importTemplate")
    },
  }

}
</script>

<style scoped>

</style>