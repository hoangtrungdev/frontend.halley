/**
 * Created by trungdev on 23/02/2017.
 */

import dbFirebase from '../../../config_firebase'
var _ = require('underscore')
/* global bootbox */

module.exports = {
  name: 'Carts',
  filters: {
    filterProduct: function (value) {
      return value
    }
  },
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
      arrayCarts: dbFirebase.ref('carts')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    addCart: function (objCart) {
      let self = this
      objCart = {
        name : 'abc',
        new : true,
        date : new Date().getTime()
      }
      self.$firebaseRefs.arrayCarts.push(objCart)
    },
    deleteCart: function (cart) {
      let self = this
      bootbox.confirm('Bạn muốn xoá dữ liệu này !', function (result) {
        if (result) {
          self.$firebaseRefs.arrayCarts.child(cart['.key']).remove()
        }
      })
    },
    editCart: function (objCart) {
      let self = this
      if (objCart['.key']) {
        let _key = objCart['.key']
        // clone để không binding 2 way
        let objUpdate = JSON.parse(JSON.stringify(objCart))
        delete objUpdate['.key']
        self.$firebaseRefs.arrayCarts.child(_key).set(objUpdate)
      }
    },
    sortCart (array) {
      let returnArray = []
      returnArray = _.sortBy(array, function (cart) {
        return -cart['date']
      })
      return returnArray
    }

  }
}
