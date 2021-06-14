<template>
  <div id="app">

    <div style="float:left; margin-left: 10%; border: 0px solid green; width: 768px">
      <button @click="backForm()" class="btn_back" style="float: left"><img style="width:30px; height: 20px" src="../assets/img/back.png" /><br>Back</button>
      <button @click="printCheque()" class="btn_print" style="float: right; height: 43px; width: 70px; margin-top: 25px"><img style="width:30px; height: 20px" src="../assets/img/printer.png" /><br><b>PRINT</b></button> 

      <button @click="minusFont()" style="float: right; height: 30px; width: 60px; margin-top: 35px; margin-right: 70px"><b>Font -</b></button> 
      <button @click="addFont()" style="float: right; height: 30px; width: 60px; margin-top: 35px; margin-right: 10px"><b>Font +</b></button> 
      
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="chequeBackbdo">

      <div  id="chequeBack" style="float: left; width: 768px; height: 287px; border: 0px solid blue">

          <input type="text" class="txt00 txtdate" v-model="txtDate" style="margin: 45px 25px 0px 0px; width: 150px; float: right; font-size: 15px"/>

          <input type="text" class="txt00 txtPayTo" v-model="txtPayTo"  :style="{'height':'20px', 'margin': '74px 0px 0px 105px', 'width': '440px', 'float': 'left', 'font-size': txtFont+'px'}"/>

          <input type="text" class="txt00 txtAmount" v-model="txtAmount" style="margin: 10px 35px 0px 0px; width: 150px; float: right; font-size: 15px"/>

          <input type="text" class="txt00 txtAmountText" v-model="txtAmountText" :style="{'height':'20px', 'margin': '7px 0px 0px 75px', 'width': '670px', 'float': 'left', 'font-size': txtFont+'px'}"/>
      
      </div>


    </div>

    <!-- <iframe id="display" style="width:900px; float: left; height:700px; overflow:scroll;"></iframe> -->
        <!-- <a name="chapter4"></a> -->

  </div>
</template>

<script>  

import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import moment from 'moment'

export default {
  name: 'App',
  watch: {        // Changing Page Title
    $route: {
        immediate: true,
        handler(to) {
            document.title = to.meta.title || 'BDO Cheque';
        }
    },
  },
  data(){
    return{
      txtDate: '08/23/20',
      txtPayTo: '***SAMPLE SAMPLE***',
      txtAmount: '0.00',
      txtAmountText: '***SAMPLE SAMPLE SAMPLE SAMPLE***',
      txtFont: 14, // pdfFont = 10.5
      pdfFont: 10.5,
      
    }
  },
  methods:{
     backForm(){
      this.$router.push('/')
    },
    printCheque(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      var _this = this

       setTimeout(function(){

            // html2canvas(document.querySelector('#chequeBack')).then(function(canvas) {
              // px -> pt = 1px = 0.75pt
              let pdf = new jsPDF('p', 'pt', 'letter');
              // 1 cm = 38 px
              // w - 20.5cm -> 779px -> 584.25pt
              // h - 7.5 cm -> 285px -> 213.75pt
              // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 584.2, 210.7);

              pdf.setFontType("bold");
              pdf.setFontSize(11);

              pdf.text(453, 42, _this.txtDate)

              pdf.setFontSize(12);

              pdf.text(442, 66, _this.txtAmount)

              pdf.setFontSize(_this.pdfFont);

              var splitTitle = pdf.splitTextToSize(_this.txtPayTo, 340);
              pdf.text(82, 64, splitTitle);

              splitTitle = pdf.splitTextToSize(_this.txtAmountText, 600);
              pdf.text(60, 85, splitTitle);


              var blob = pdf.output("blob");
              //Getting URL of blob object
              var blobURL = URL.createObjectURL(blob);
              // pdf.save('sample');

              window.open(blobURL, '_blank');
              // var iframeElementContainer = document.getElementById('display');
              // iframeElementContainer.src=blobURL;


              // });

        }, 1000);

    },
    addFont(){
      this.txtFont++
      this.pdfFont = this.pdfFont + 0.5
    },
    minusFont(){
      this.txtFont--
      this.pdfFont = this.pdfFont - 0.5
    }
  },
  mounted(){
    this.txtDate = moment(new Date()).format('MM/DD/YYYY')
    // this.printCheque()
  }
}
</script>

<style scoped>

</style>>
