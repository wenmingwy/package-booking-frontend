<template>
<!-- 这个存在bug -->
  <div id="ToResponsitory">
    <h>预约取件</h>
    <div>
      <h4>
        运单号：
        <input type="text" v-model="orderNum" v-on:oninput="inputNum" placeholder="请输入运单号" />
      </h4>
    </div>
    <div>
      <h4>
        收件人:
        <input type="text" v-model="name" v-on:oninput="inputName" placeholder="请输入取件时间" />
      </h4>
    </div>
    <div>
      <a-button type="primary" html-type="submit">Submit</a-button>
      &ensp;&ensp;&ensp;&ensp;
      <a-button type="danger" @click="cancle">Danger</a-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log(values);
          this.$store.dispatch("updateTime", values);
        }
      });
    }
  }
};
</script>