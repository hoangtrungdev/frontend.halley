<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">{{!isModify?'Danh sách đơn hàng':'Thêm đơn hàng'}}</h3>
            <button v-on:click="addNewCart()" v-bind:class="{hidden: isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i> Thêm mới đơn hàng</button>
            <button v-on:click="isModify = false" v-bind:class="{hidden: !isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-arrow-left"></i> Quay lại</button>
          </div>
          <!-- carts list -->
          <div v-bind:class="{hidden: isModify}">
            <table class="table table-striped">
              <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại </th>
                <th>Địa chỉ </th>
                <th>Thời gian giao hàng </th>
                <th>Chi tiết </th>
                <th>Tình trạng</th>
                <th></th>
              </tr>
              <tr v-for="(cart, index) in sortCart(arrayCarts)">
                <td v-on:click="editCart(cart)" class="td_cursor">{{index +1}}</td>
                <td v-on:click="editCart(cart)" class="td_cursor">{{cart.customer_name}}</td>
                <td v-on:click="editCart(cart)" class="td_cursor">{{cart.customer_phone}}</td>
                <td v-on:click="editCart(cart)" class="td_cursor">{{cart.customer_address}}</td>
                <td v-on:click="editCart(cart)" class="td_cursor">{{cart.customer_time || 'không có thông tin'}}</td>
                <td v-on:click="editCart(cart)" class="td_cursor">
                  <p v-for="product in cart.cartDetails ">{{product.pid}} - {{product.name}} - {{product.color}}   </p>
                </td>
                <td v-on:click="editCart(cart)" class="status_td td_cursor" :class="cart.status">{{getTrangThaiCart(cart.status)}}</td>
                <td class="text-right">
                  <button v-on:click="editCart(cart)" type="button" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                  <button v-on:click="deleteCart(cart)" type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- carts add -->
          <div class="box-body no-padding" v-bind:class="{hidden: !isModify}">
            <div class="box-body">
              <form  role="form">

                <div class="box-body col-xs-6">
                  <table class="table table-striped" style="margin-top: 10px">
                    <tbody>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng </th>
                      <th>Thành tiền </th>
                    </tr>
                    <tr v-for="(product, index) in objCart.cartDetails ">
                      <td class="pad-top-15">{{index + 1}}.</td>
                      <td class="pad-top-15"><img v-bind:src="'http://halley.vn/uploads/products/'+ product.avatar" style="height: 30px" > {{product.pid}} - {{product.name}} - {{product.color}}</td>
                      <td class="pad-top-15">{{product.price | formatPrice}}</td>
                      <td><input type="number" v-model="product.soluong" min="0" class="form-control" style="width: 60px"></td>
                      <td class="pad-top-15">{{product.price * product.soluong | formatPrice}}</td>
                    </tr>
                    </tbody>
                  </table>

                </div>
                <div class="box-body col-xs-6">
                  <div class="form-group">
                    <label >Tìm kiếm sản phẩm</label>
                    <v-select multiple v-model="objCart.cartDetails" :options="mapSelect2Product(arrayProducts)"></v-select>
                  </div>
                  <div class="form-group">
                    <label >Tên khách hàng</label>
                    <input type="text" v-model="objCart.customer_name" class="form-control" placeholder="Tên khách hàng">
                  </div>
                  <div class="form-group">
                    <label >Số điện thoại</label>
                    <input type="text" v-model="objCart.customer_phone" class="form-control" placeholder="Số điện thoại">
                  </div>
                  <div class="form-group">
                    <label >Địa chỉ</label>
                    <input type="text" v-model="objCart.customer_address" class="form-control" placeholder="Địa chỉ">
                  </div>
                  <div class="form-group">
                    <label >Thời gian giao hàng</label>
                    <input type="text" v-model="objCart.customer_time" class="form-control" placeholder="Thời gian giao hàng">
                  </div>
                  <div class="form-group">
                    <label style="cursor: pointer"  v-on:dblclick="disChangeStatus = !disChangeStatus" >Tình trạng đơn hàng (double click để cập nhật trạng thái)</label>
                    <select v-model="objCart.status" class="form-control"  :disabled="disChangeStatus">
                      <option v-for="(value, key) in arrayStatus" :value="key" >{{value}}</option>
                    </select>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="box-footer text-right ">
                  <a class="btn btn-default btn-sm" v-on:click="isModify = false">Hủy</a>
                  <a class="btn btn-primary btn-sm" v-on:click="addOrUpdateCart(objCart)">Cập nhật đơn hàng</a>
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
  .v-select .selected-tag .close {float: right !important;font-size: 22px !important;margin: 0px 0px 0px 8px !important;}
  .pad-top-15{padding-top: 15px !important}
  .td_cursor{cursor: pointer}
  .status_td{font-weight: bold}
  .status_td.new{color: #c7217b}
  .status_td.confirm{color: #3c8dbc}
  .status_td.complete{color: #00a65a}
  .status_td.destroy{color: #d73925}
</style>
