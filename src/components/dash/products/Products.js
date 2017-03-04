/**
 * Created by trungdev on 23/02/2017.
 */

import dbFirebase from '../../../config_firebase'
/* global bootbox */

module.exports = {
  name: 'Tables',
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
      page: 0,
      objProduct: {}
    }
  },
  firebase: function () {
    return {
      arrayProducts: dbFirebase.ref('products')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    getNumberPage (arrayLength) {
      let self = this
      self.perPage = self.perPage || 10
      if (self.page * self.perPage > arrayLength) {
        self.page = 0
      }
      if (Math.ceil(arrayLength / self.perPage) > 1) {
        return Math.ceil(arrayLength / self.perPage)
      } else {
        return 0
      }
    },
    filterProduct (array, filterParams) {
      array = array.filter(function (item) {
        filterParams.name = filterParams.name || ''
        return (item.name.toLowerCase().indexOf(filterParams.name.toLowerCase()) > -1) && (item.pid.toLowerCase().indexOf(filterParams.pid.toLowerCase()) > -1)
      })
      return array
    },
    pagination (array) {
      let self = this
      return array.slice(self.page * self.perPage, (self.page * 1 + 1) * self.perPage)
    },
    deleteProduct: function (product) {
      let self = this
      bootbox.confirm('Bạn muốn xoá dữ liệu này !', function (result) {
        if (result) {
          self.$firebaseRefs.arrayProducts.child(product['.key']).remove()
        }
      })
    },
    addOrUpdateProduct: function (objProduct) {
      let self = this
      if (objProduct['.key']) {
        let _key = objProduct['.key']
        // clone để không binding 2 way
        let objUpdate = JSON.parse(JSON.stringify(objProduct))
        delete objUpdate['.key']
        self.$firebaseRefs.arrayProducts.child(_key).set(objUpdate)
      } else {
        self.$firebaseRefs.arrayProducts.push(objProduct)
      }
      self.objProduct = {}
      self.isModify = false
    },
    editProduct: function (product) {
      let self = this
      self.objProduct = product
      self.isModify = true
    }
  }
}
