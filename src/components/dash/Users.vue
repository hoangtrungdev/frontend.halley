<template>
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Danh sách thành viên</h3>
            <button v-on:click="addUser(user)" type="button" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i> Add new</button>

          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <table class="table table-striped">
              <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>Họ và Tên</th>
                <th>Tài khoản</th>
                <th>Loại tài khoản</th>
                <th>Hoạt động cuối cùng</th>
                <th></th>
              </tr>
              <tr v-for="(user, index) in arrayUsers">
                <td>{{index + 1}}.</td>
                <td>Update software</td>
                <td>Update software</td>
                <td>Update software</td>
                <td>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                  </div>
                </td>
                <td class="text-center">
                  <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                  <button v-on:click="deleteUser(user)" type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
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
