<template>
  <!-- Main content -->
  <section class='content'>

    <div class="row">
      <div class="col-xs-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Latest Orders</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Popularity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                  <td>Call of Duty IV</td>
                  <td><span class="label label-success">Shipped</span></td>
                  <td>
                    <div class="sparkbar" data-color="#00a65a" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                  <td>Samsung Smart TV</td>
                  <td><span class="label label-warning">Pending</span></td>
                  <td>
                    <div class="sparkbar" data-color="#f39c12" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>iPhone 6 Plus</td>
                  <td><span class="label label-danger">Delivered</span></td>
                  <td>
                    <div class="sparkbar" data-color="#f56954" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>Samsung Smart TV</td>
                  <td><span class="label label-info">Processing</span></td>
                  <td>
                    <div class="sparkbar" data-color="#00c0ef" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                  <td>Samsung Smart TV</td>
                  <td><span class="label label-warning">Pending</span></td>
                  <td>
                    <div class="sparkbar" data-color="#f39c12" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>iPhone 6 Plus</td>
                  <td><span class="label label-danger">Delivered</span></td>
                  <td>
                    <div class="sparkbar" data-color="#f56954" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                  <td>Call of Duty IV</td>
                  <td><span class="label label-success">Shipped</span></td>
                  <td>
                    <div class="sparkbar" data-color="#00a65a" data-height="20"><canvas width="34" height="20" style="display: inline-block; width: 34px; height: 20px; vertical-align: top;"></canvas></div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
          </div>
          <!-- /.box-footer -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-yellow'>
          <span class='info-box-icon'><i class='ion ion-ios-pricetag-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Inventory</span>
            <span class='info-box-number'>5,200</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 50%'></div>
            </div>
            <span class='progress-description'>
                  50% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-green'>
          <span class='info-box-icon'><i class='ion ion-ios-heart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Mentions</span>
            <span class='info-box-number'>92,050</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 20%'></div>
            </div>
            <span class='progress-description'>
                  20% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-red'>
          <span class='info-box-icon'><i class='ion ion-ios-cloud-download-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Downloads</span>
            <span class='info-box-number'>114,381</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 70%'></div>
            </div>
            <span class='progress-description'>
                  70% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box bg-aqua'>
          <span class='info-box-icon'><i class='ion-ios-chatbubble-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Direct Messages</span>
            <span class='info-box-number'>163,921</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 40%'></div>
            </div>
            <span class='progress-description'>
                  40% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class='col-xs-12'>
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title"></h3>
            <div class="box-body">
              <div class="col-sm-6 col-xs-12">
                <p class="text-center">
                  <strong>Web Traffic Overview</strong>
                </p>
                <canvas id="trafficBar" ></canvas>
              </div>
              <hr class="visible-xs-block">
              <div class="col-sm-6 col-xs-12">
                <p class="text-center">
                  <strong>Language Overview</strong>
                </p>
                <canvas id="languagePie"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
  import Chart from 'chart.js'

  module.exports = {
    data: function () {
      return {
        generateRandomNumbers: function (numbers, max, min) {
          var a = []
          for (var i = 0; i < numbers; i++) {
            a.push(Math.floor(Math.random() * (max - min + 1)) + max)
          }
          return a
        }
      }
    },
    computed: {
      coPilotNumbers: function () {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      personalNumbers: function () {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      isMobile: function () {
        return (window.innerWidth <= 800 && window.innerHeight <= 600)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        var ctx = document.getElementById('trafficBar').getContext('2d')
        var config = {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'CoPilot',
              fill: false,
              borderColor: '#284184',
              pointBackgroundColor: '#284184',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.coPilotNumbers
            }, {
              label: 'Personal Site',
              borderColor: '#4BC0C0',
              pointBackgroundColor: '#4BC0C0',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.personalNumbers
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            },
            tooltips: {
              mode: 'label',
              xPadding: 10,
              yPadding: 10,
              bodySpacing: 10
            }
          }
        }

        new Chart(ctx, config) // eslint-disable-line no-new

        var pieChartCanvas = document.getElementById('languagePie').getContext('2d')
        var pieConfig = {
          type: 'pie',
          data: {
            labels: ['HTML', 'JavaScript', 'CSS'],
            datasets: [{
              data: [56.6, 37.7, 4.1],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            }
          }
        }

        new Chart(pieChartCanvas, pieConfig) // eslint-disable-line no-new
      })
    }
  }
</script>
<style>
  .info-box {
    cursor: pointer;
  }
  .info-box-content {
    text-align: center;
    vertical-align: middle;
    display: inherit;
  }
  .fullCanvas {
    width: 100%;
  }
</style>
