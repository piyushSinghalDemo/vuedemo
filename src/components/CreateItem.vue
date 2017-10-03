// CreateItem.vue

<template>
  <div class="container">
    <h1>Create An Item</h1>
    <form>
      <div class="row clearfix">
        <div class="col-sm-12 form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
        </div>
        <div class="col-sm-12">
            <label>Item Price:</label>
            <input type="text" class="form-control col-md-6" v-model="item.price">
        </div>
        <div class="col-sm-12">
          <button>Add Item</button>
        </div>
      </div>

    </form>
  </div>
</template>
<script>
export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem2(){
        console.log("Function Calling...");
      let uri = 'http://localhost:4000/items/add';
        // this.axios.post(uri, this.item).then((response) => {
        //   console.log("response ",response)
        // })
      }
}
}
</script>