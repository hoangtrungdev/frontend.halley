<template>
  <div class="wrapper">
    <header class="main-header">
      <a href="/" class="logo">
        <!-- mini logo for sidebar mini 40x50 pixels -->
        <span class="logo-mini"><img src="/static/img/logo_sm.png" alt="Logo" class="img-responsive center-block"></span>
        <!-- logo for regular state and mobile devices -->
        <div class="container logo-lg">
          <div class="pull-left image"><img src="/static/img/logo_sm.png" alt="Logo" class="img-responsive"></div>
          <div class="pull-left info">Halley.vn</div>
        </div>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages-->
            <li class="dropdown messages-menu">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-cart-plus"></i>
                <span class="label label-success">{{ getCartNew(arrayCarts, true) | count }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">
                  bạn có {{ getCartNew(arrayCarts) | count }} đơn hàng mới
                </li>
                <li v-if="arrayCarts.length > 0">
                  <ul class="menu">
                    <li v-for="(cart, index) in getCartNew(arrayCarts, true)" >
                      <router-link to="/carts">
                      <i class="fa fa-bell text-aqua"></i> - bạn có đơn hàng từ {{cart.customer_name}}
                        <div class="text-right">
                          <small><i class="fa fa-clock-o"></i> {{timeAgo(cart.date)}}</small>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="footer" v-if="state.userInfo.messages.length > 0"><a href="javascript:;">See All Messages</a></li>
              </ul>
            </li>
            <!-- /.messages-menu -->


            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img v-bind:src=demo.avatar class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">Hoàng Trung</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">

          </div>
          <div class="pull-left info">
            <div><p class="white">Hoangtrungdev</p></div>
            <a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <!-- search form (Optional) -->
        <form v-on:submit.prevent class="sidebar-form">
          <div class="input-group">
            <input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Tìm Kiếm" data-list=".sidebar-menu">
            <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="active pageLink" v-on:click="toggleMenu"><router-link to="/"><i class="fa fa-desktop"></i><span class="page">Dashboard</span></router-link></li>
          <li class="pageLink" v-on:click="toggleMenu"><router-link to="/users"><i class="fa fa-user"></i><span class="page">Users</span></router-link></li>
          <li class="pageLink" v-on:click="toggleMenu"><router-link to="/products"><i class="fa fa-cube"></i><span class="page">Products</span></router-link></li>
          <li class="pageLink" v-on:click="toggleMenu"><router-link to="/carts"><i class="fa fa-cart-plus"></i><span class="page">Carts</span></router-link></li>

          <!-- <li class="header">ME</li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/tasks"><i class="fa fa-tasks"></i><span class="page">Tasks</span></router-link></li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/setting"><i class="fa fa-cog"></i><span class="page">Settings</span></router-link></li>

           <li class="header">LOGS</li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/access"><i class="fa fa-book"></i><span class="page">Access</span></router-link></li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/server"><i class="fa fa-hdd-o"></i><span class="page">Server</span></router-link></li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/repos"><i class="fa fa-heart"></i><span class="page">Repos</span><small class="label pull-right bg-green">AJAX</small></router-link></li>

           <li class="header">PAGES</li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link></li>
           <li class="pageLink" v-on:click="toggleMenu"><router-link to="/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link></li>
         --></ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{ $route.meta.description || 'Halley.vn'}}
        </h1>
        <ol class="breadcrumb">
          <li><a href="javascript:;"><i class="fa fa-home"></i>Home</a></li>
          <li class="active">{{$route.name}}</li>
        </ol>
      </section>

      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="http://halley.vn/">Halley.vn</a>.</strong> All rights reserved.
    </footer>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import faker from 'faker'
  import moment from 'moment'
  require('hideseek')
  import dbFirebase from '../config_firebase'
  var _ = require('underscore')

  module.exports = {
    name: 'Dash',
    data: function () {
      return {
        section: 'Dash',
        me: '',
        error: '',
        api: {
          servers: {
            url: '', // Back end server
            result: []
          }
        }
      }
    },
    firebase: function () {
      return {
        arrayCarts: dbFirebase.ref('carts')
      }
    },
    computed: {
      store: function () {
        return this.$parent.$store
      },
      state: function () {
        return this.store.state
      },
      callAPI: function () {
        return this.$parent.callAPI
      },
      demo: function () {
        return {
          displayName: faker.name.findName(),
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
          randomCard: faker.helpers.createCard()
        }
      },
      year: function () {
        var y = new Date()
        return y.getFullYear()
      }
    },
    methods: {
      changeloading: function () {
        this.store.dispatch('TOGGLE_SEARCHING')
      },
      toggleMenu: function (event) {
        // remove active from li
        window.$('li.pageLink').removeClass('active')

        // Add it to the item that was clicked
        event.toElement.parentElement.className = 'pageLink active'
      },
      timeAgo: function (date) {
        return moment(date).fromNow()
      },
      getCartNew (array, onlyNew = false) {
        let returnArray = []
        returnArray = _.sortBy(array, function (cart) {
          return -cart['date']
        })
        if (onlyNew) {
          returnArray = returnArray.filter((cart) => {
            return cart.status === 'new'
          })
        }
        return returnArray
      }
    },
    mounted: function () {
      // Page is ready. Let's load our functions!
    }
  }

</script>

<style>
  .user-panel {
    height: 4em;
  }
  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }
  .isNewCart{
    background: rgba(60, 141, 188, 0.13);
  }
</style>
