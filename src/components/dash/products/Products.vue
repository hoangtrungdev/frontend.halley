<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">{{!isModify?'Danh sách sản phẩm':'Thêm sản phẩm'}}</h3>
            <button v-on:click="isModify = true ; objProduct= {}" v-bind:class="{hidden: isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i> Add new</button>
            <button v-on:click="isModify = false" v-bind:class="{hidden: !isModify}" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-arrow-left"></i> Back</button>
          </div>
          <!-- /.box-header -->
          <div v-bind:class="{hidden: isModify}">
            <div class="box-body">
              <div class="form-group col-xs-2">
                <label>Mã sản phẩm</label>
                <input type="text" class="form-control" v-model="filterParams.pid" placeholder="Mã sản phẩm">
              </div>
              <div class="form-group col-xs-2">
                <label>Tên sản phẩm</label>
                <input type="text" class="form-control" v-model="filterParams.name" placeholder="Tên sản phẩm">
              </div>
              <div class="form-group col-xs-2">
                <label>Số sản phẩm hiển thị</label>
                <input type="text" class="form-control" v-model="perPage" placeholder="Số sản phẩm hiển thị">
              </div>
            </div>
            <div class="box-body no-padding">
              <table class="table table-striped">
                <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Màu</th>
                  <th style="width: 100px">Giá thường</th>
                  <th style="width: 100px">Giá vốn</th>
                  <th style="width: 150px">Giá khuyến mãi</th>
                  <th style="width: 100px">Tồn kho</th>
                  <th></th>
                </tr>
                <tr v-for="(product, index) in pagination(filterProduct(arrayProducts,filterParams)) ">
                  <td>{{index + 1}}.</td>
                  <td><img v-bind:src="'http://halley.vn/uploads/products/'+ product.avatar" style="height: 30px" > - {{product.pid}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.color}}</td>
                  <td>
                    <input class="form-control input-sm" v-model="product.price" v-on:keyup="addOrUpdateProduct(product)" type="text" placeholder="thường" >
                  </td>
                  <td>
                    <input class="form-control input-sm" v-model="product.inprice" v-on:keyup="addOrUpdateProduct(product)" type="text" placeholder="vốn" >
                  </td>
                  <td>
                    <input class="form-control input-sm" v-model="product.sale_price" v-on:keyup="addOrUpdateProduct(product)" type="text" placeholder="khuyến mãi" >
                  </td>
                  <td>
                    <input class="form-control input-sm" v-model="product.quantity" v-on:keyup="addOrUpdateProduct(product)" type="text" placeholder="Hàng tồn" >
                  </td>
                  <td class="text-right">
                    <button v-on:click="editProduct(product)" type="button" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                    <button v-on:click="deleteProduct(product)" type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Delete</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li v-for="n in getNumberPage(filterProduct(arrayProducts,filterParams).length)" v-bind:class="{active: (n - 1) == page}">
                  <a v-if="(n - 1) != page" v-on:click="page = (n - 1)">{{n}}</a>
                  <a class="active" v-if="(n - 1) == page" >{{n}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="box-body no-padding" v-bind:class="{hidden: !isModify}">
            <form  role="form">
              <img class="col-xs-3" v-bind:src="objProduct.avatar?'http://halley.vn/uploads/products/'+ objProduct.avatar:'./static/img/no-img.jpg'" >
              <div class="box-body col-xs-9">
                <div class="form-group">
                  <label >Mã sản phẩm</label>
                  <input type="text" v-model="objProduct.pid" class="form-control" placeholder="Mã sản phẩm">
                </div>
                <div class="form-group">
                  <label >Tên sản phẩm</label>
                  <input type="text" v-model="objProduct.name" class="form-control" placeholder="Tên sản phẩm">
                </div>
                <div class="form-group">
                  <label >Màu</label>
                  <input type="text" v-model="objProduct.color" class="form-control" placeholder="Màu">
                </div>
                <div class="form-group">
                  <label >Giá bán thường</label>
                  <input type="text" v-model="objProduct.price" class="form-control" placeholder="Giá bán thường">
                </div>
                <div class="form-group">
                  <label >Giá vốn</label>
                  <input type="text" v-model="objProduct.inprice" class="form-control" placeholder="Giá vốn">
                </div>
                <div class="form-group">
                  <label >Giá khuyến mãi</label>
                  <input type="text" v-model="objProduct.sale_price" class="form-control" placeholder="Giá khuyến mãi">
                </div>

                <div class="form-group">
                  <label >Tồn kho</label>
                  <input type="text" v-model="objProduct.quantity" class="form-control" placeholder="Tồn kho">
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="box-footer text-right ">
                <a class="btn btn-default btn-sm" v-on:click="isModify = false">Cancel</a>
                <a class="btn btn-primary btn-sm" v-on:click="addOrUpdateProduct(objProduct)">Submit</a>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./Products.js"></script>
<style>
  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
</style>
