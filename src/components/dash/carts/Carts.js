/**
 * Created by trungdev on 23/02/2017.
 */

import dbFirebase from '../../../config_firebase'
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
      page: 0,
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
  }
}
