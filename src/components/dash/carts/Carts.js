/**
 * Created by trungdev on 23/02/2017.
 */

import dbFirebase from '../../../config_firebase'
import vSelect from 'vue-select'
var _ = require('underscore')
/* global bootbox */
var defaultObjCart = {
  cartDetails: [],
  status: 'new'
}

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
      objCart: Object.assign({}, defaultObjCart),
      arrayStatus: [
        {key : 'new', value : 'Đơn hàng mới', allowStaus : ['confirm','complete','destroy']},
        {key : 'confirm', value  : 'Đã xác nhận', allowStaus : ['complete','destroy']},
        {key : 'complete', value  : 'Hoàn thành', allowStaus : ['destroy']},
        {key : 'destroy', value : 'Hủy'}
      ]
    }
  },
  components: {
    vSelect
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
    addNewCart: function () {
      let self = this
      self.objCart = Object.assign({}, defaultObjCart)
      self.isModify = true
    },
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
      self.objCart = Object.assign({}, defaultObjCart)
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
      let objStatus =  this.arrayStatus.find((item) => {
        return item.key === status;
      })
      return objStatus.value
    },
    mapSelect2Product (arrayProducts) {
      return arrayProducts.map((product) => {
        delete product['.key']
        return Object.assign({
            label: `${product.pid} - ${product.name} - ${product.color}`,
            soluong: 1
          }, product)
      })
    }
  }
}
