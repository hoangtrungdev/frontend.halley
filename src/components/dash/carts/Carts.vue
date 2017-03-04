<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">{{!isModify?'Danh sách đơn hàng':'Thêm đơn hàng'}}</h3>
            <button v-on:click="isModify = true ; objProduct= {}" v-bind:class="{hidden: isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i> Add new</button>
            <button v-on:click="isModify = false" v-bind:class="{hidden: !isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-arrow-left"></i> Back</button>
          </div>
          <!-- carts list -->
          <div v-bind:class="{hidden: isModify}">
            <tr v-for="(cart, index) in arrayCarts ">
              <td>{{cart}}</td>
            </tr>
          </div>

          <!-- carts add -->
          <div class="box-body no-padding" v-bind:class="{hidden: !isModify}">
            <div class="box-body">
              <form  role="form">
                <div class="col-xs-4"></div>
                <div class="box-body col-xs-8">
                  <div class="form-group">
                    <label >Mã sản phẩm</label>
                    <input type="text" v-model="objCart.pid" class="form-control" placeholder="Mã sản phẩm">
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="box-footer text-right ">
                  <a class="btn btn-default btn-sm" v-on:click="isModify = false">Cancel</a>
                  <a class="btn btn-primary btn-sm" v-on:click="addCart(objCart)">Submit</a>
                </div>
                <!-- /.box-footer -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./Carts.js"></script>
<style>
  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
</style>
