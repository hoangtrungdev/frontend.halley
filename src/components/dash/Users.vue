<template>
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box" >
          <div class="box-header " v-bind:class="{'with-border': isModify}">
            <h3 class="box-title">{{!isModify?'Danh sách thành viên':'Thêm thành viên'}}</h3>
            <button v-on:click="isModify = !isModify" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i> Add new</button>
          </div>
          <!-- /.box-header -->
          <div v-bind:class="{hidden: isModify}">
            <div class="box-body no-padding">
              <table class="table table-striped">
                <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Tài khoản</th>
                  <th>Họ và Tên</th>
                  <th>Loại tài khoản</th>
                  <th>Hoạt động cuối cùng</th>
                  <th>Thời gian</th>
                  <th></th>
                </tr>
                <tr v-for="(user, index) in arrayUsers">
                  <td>{{index + 1}}.</td>
                  <td>hoangtrungdev</td>
                  <td>Trần Hoàng Trung</td>
                  <td>administrator</td>
                  <td>Thêm thành viên</td>
                  <td>9:45:23 7-2-2017</td>
                  <td class="text-right">
                    <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                    <button v-on:click="deleteUser(user)" type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Delete</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
          <div class="box-body no-padding" v-bind:class="{hidden: !isModify}">
            <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Tài khoản</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control"  placeholder="Tài khoản">
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control"  placeholder="Password">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Họ và Tên</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" placeholder="Họ và Tên">
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control"  placeholder="Password">
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer text-right">
                <a class="btn btn-default btn-sm" v-on:click="isModify = false">Cancel</a>
                <a class="btn btn-info btn-sm" v-on:click="addUser()">OK</a>
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

<script>
  import dbFirebase from '../../config_firebase'
  import bootbox from 'bootbox'

  module.exports = {
    name: 'Tables',
    data: function () {
      return {
        isModify: false
      }
    },
    firebase: function () {
      return {
        arrayUsers: dbFirebase.ref('users'),
        arrayUsers1: {
          source: dbFirebase.ref('users'),
          asObject: true
        }
      }
    },
    mounted: function () {

    },
    methods: {
      deleteUser: function (user) {
        let self = this
        bootbox.confirm('Bạn muốn xoá dữ liệu này !', function (result) {
          if (result) {
            self.$firebaseRefs.arrayUsers.child(user['.key']).remove()
          }
        })
      },
      addUser: function () {
        let self = this
        self.$firebaseRefs.arrayUsers.push({
          text: 'hello'
        })
        self.isModify = false
      }
    }
  }
</script>

<style>
  /* Using the bootstrap style, but overriding the font to not draw in
     the Glyphicons Halflings font as an additional requirement for sorting icons.

     An alternative to the solution active below is to use the jquery style
     which uses images, but the color on the images does not match adminlte.

  @import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
  */

  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
</style>
