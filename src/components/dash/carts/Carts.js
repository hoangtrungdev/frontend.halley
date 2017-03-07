/**
 * Created by trungdev on 23/02/2017.
 */

import dbFirebase from '../../../config_firebase'
var _ = require('underscore')
/* global bootbox */

module.exports = {
  name: 'Carts',
  data: function () {
    return {
      isModify: false,
      filterParams: {
        pid: '',
        name: ''
      },
      perPage: 10,
      objCart: {}
    }
  },
  firebase: function () {
    return {
      arrayProducts: dbFirebase.ref('products'),
      arrayCarts: dbFirebase.ref('carts')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    deleteCart: function (cart) {
      let self = this
      bootbox.confirm('Bạn muốn xoá dữ liệu này !', function (result) {
        if (result) {
          self.$firebaseRefs.arrayCarts.child(cart['.key']).remove()
        }
      })
    },
    addOrUpdateCart: function (objCart) {
      let self = this
      if (objCart['.key']) {
        let _key = objCart['.key']
        // clone để không binding 2 way
        let objUpdate = JSON.parse(JSON.stringify(objCart))
        delete objUpdate['.key']
        self.$firebaseRefs.arrayCarts.child(_key).set(objUpdate)
      } else {
        let objDefault = {
          status : 'new',
          date : new Date().getTime()
        }
        objCart = Object.assign(objDefault, objCart)
        self.$firebaseRefs.arrayCarts.push(objCart)
      }
      self.objCart = {}
      self.isModify = false
    },
    editCart: function (objCart) {
      let self = this
      self.objCart = Object.assign({}, objCart)
      self.isModify = true
    },
    sortCart (array) {
      let returnArray = []
      returnArray = _.sortBy(array, function (cart) {
        return -cart['date']
      })
      return returnArray
    },
    getTrangThaiCart (status) {
      let arrayStatus = {
        'new' : 'Đơn hàng mới'
      }
      return arrayStatus[status]
    }
  }
}
