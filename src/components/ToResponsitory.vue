<template>
  <!--要进行表单提交，否则监控实现不对 -->
  <div>
    <h1>包裹入库</h1>
    <a-form :form="form" @submit="toPackageSubmit">
      <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'id',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'recipient',
          {rules: [{ required: true, message: '请输入收件人姓名' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'phone',
          {rules: [{ required: true, message: '请输入电话' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量' }]}
        ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
  <!-- <div id="ToResponsitory">
        <h>包裹入库</h>
  
         <div>
            <h4>运单号：<input type="text" v-model="orderNum" v-on:oninput ="inputNum" placeholder="请输入运单号">   </h4>
        </div> 
        <div>   
            <h4>收件人:<input type="text" v-model="name" v-on:oninput ="inputName" placeholder="请输入姓名">  </h4>
        </div> 
        <div> 
            <h4>电话：<input type="text" v-model="phone" v-on:oninput ="inputPhone" placeholder="请输入电话">  </h4>
        </div> 
        <div> 
            <h4>重量：<input type="text" v-model="weight" v-on:oninput ="inputWeight" placeholder="请输入重量"> </h4>
        </div> 

  </div>-->
</template>


<script>
export default {
  name: "toresponsitory",
  components: {},
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    toPackageSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log(values);
          this.$store.dispatch("addMsg", values);
        }
      });
    }
  }
};
</script>
