<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <br>
      <button @click="logout()" style="float: left; margin-left: 20px; color: blue">&lt; <b>Logout</b></button>
      <div style="margin-left: 8%; border: 0px solid green; width: 816px; float: left; padding-bottom: 5px">
          

          <div style="border:0px solid green; width: 135px; float: left">
            <div style="width: 100%; border:0px solid green; float: left">
              <center><button class="btnUp btnDirection" style="height: 45px; width: 45px" @click="moveUp()"><img style="width:39px; height: 40px" src="../assets/img/up.png" /></button></center>
            </div>
            <div style="width: 100%; border:0px solid green; float: left">
              <button class="btnLeft btnDirection" style="height: 45px; width: 45px; float: left;" @click="moveLeft()"><img style="width:39px; height: 40px" src="../assets/img/left.png" /></button>
              <button class="btnRight btnDirection" style="height: 45px; width: 45px; float: right;" @click="moveRight()"><img style="width:39px; height: 40px" src="../assets/img/right.png" /></button>
            </div>
            <div style="width: 100%; border:0px solid green; float: left">
              <center><button class="btnDown btnDirection" style="height: 45px; width: 45px;" @click="moveDown()"><img style="width:39px; height: 40px" src="../assets/img/down.png" /></button></center>
            </div>
          </div>

          <button class="" style="float: left; margin: 53px 0px 0px 30px; height: 42px" v-if="showBtns" @click="printForm()"><img style="width:30px; height: 20px" src="../assets/img/printer.png" /><br>PRINT</button>
          
          <button class="" style="float: left; margin: 53px 0px 0px 20px; height: 42px" v-if="showBtns" @click="saveForm()"><img style="width:30px; height: 20px" src="../assets/img/save.png" /><br>
            <font v-if="isUpdate == 'false'">
              SAVE
            </font>
            <font v-if="isUpdate == 'true'">
              UPDATE
            </font>
            
          </button>

          <button class="" style="float: left; margin: 53px 0px 0px 20px; height: 42px;" v-if="showBtns" @click="viewHistory()"><img style="width:30px; height: 20px" src="../assets/img/history.png" /><br>View History</button>

          <button class="" style="float: right; margin: 53px 70px 0px 10px; height: 42px;" v-if="!showBtns" @click="cancelPosition()"><img style="width:30px; height: 20px" src="../assets/img/cancel.png" /><br>Cancel</button>

          <button class="" style="float: right; margin: 53px 10px 0px 20px; height: 42px;" v-if="!showBtns" @click="savePosition()"><img style="width:30px; height: 20px" src="../assets/img/save.png" /><br>Save Form Position</button>

          <button class="" style="float: left; margin: 53px 0px 0px 20px; height: 42px;" v-if="showBtns" @click="clearFields()"><img style="width:20px; height: 20px" src="../assets/img/clear.png" /><br>Clear Form</button>

          <button class="" style="float: right; margin: 53px 80px 0px 20px; height: 42px;" v-if="showBtns" @click="printCheque()"><img style="width:35px; height: 20px" src="../assets/img/cheque.png" /><br>Print Cheque</button>
            <br>
            <br>
            <br>
            <br>
            <br>

          <h4 style="float: right; margin: 20px 50px 0px 0px">{{historyName}}</h4>

      </div> 

      <br><br><br><br>
      <br><br><br><br>
      <br><br><br>
      
        <div class="backBody1" style="margin-left: 15%; border: 1px solid green; width: 830px; height: auto; float: left; margin-bottom: 0px; padding-bottom: 10px">		
          <div class="mainBody1" :style="'margin-left: '+margX+'px; margin-top: '+margY+'px'">
            <div style="border: 0px solid green; margin-top: 0px">

              <div class="whole" id="pdf" style="width: 790px; height: 1050px; border: 0px solid red">  <!-- Start Here Printing -->
              <!-- ============================================= FORM STARTS HERE =========================================== -->
                <div class="gropo-1">
                    <div @click="clickThis(0)" class="chk00 chk1" style="margin: 19px 0px 0px 14px">
                      <img :src="'img/icons/'+allCheck[0].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(3)" class="chk00 chk4" style="margin: 34px 0px 0px -28px">
                      <img :src="'img/icons/'+allCheck[3].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(4)" class="chk00 chk5" style="margin: 34px 0px 0px 28px">
                      <img :src="'img/icons/'+allCheck[4].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(1)" class="chk00 chk2" style="margin: 20px 0px 0px 57px">
                      <img :src="'img/icons/'+allCheck[1].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(2)" class="chk00 chk3" style="margin: 20px 0px 0px 148px">
                      <img :src="'img/icons/'+allCheck[2].icon+'.jpg'" class="chkIcon">
                    </div>

                     <input type="text" class="txt00 txts40"  v-model="allText[39]" style="margin: 1px 0px 0px 80px; width: 70px; font-size: 11px"/>

                    <input type="text" class="txt00 txts41"  v-model="allText[40]" style="margin: 1px 0px 0px 35px; width: 120px; font-size: 11px"/>

                    <input type="text" class="txt00 txts1"  v-model="allText[0]" style="margin: 3px 0px 0px 55px; width: 250px; font-size: 11px"/>

                </div>

                <div class="gropo-2">
                  <div class="div-1" style="width: 100%; height: 70px; border: 0px solid orange; float: left">
                      <input type="text" class="txt00 txts2"  v-model="allText[1]" style="margin: 8px 0px 0px 5px; width: 360px; font-size: 11px"/>

                      <input type="text" class="txt00 txts3"  v-model="allText[2]" style="margin: 9px 0px 0px 5px; width: 360px; font-size: 11px"/>

                      <input type="text" class="txt00 txts4"  v-model="allText[3]" style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px"/>
                  </div>

                  <div class="div-2" style="width: 100%; height: 98px; border: 0px solid orange; float: left">
                      <input type="text" class="txt00 txts5"  v-model="allText[4]" style="margin: 11px 0px 0px 5px; width: 180px; font-size: 11px"/>

                      <input type="text" class="txt00 txts6"  v-model="allText[5]" style="margin: 11px 0px 0px 20px; width: 150px; font-size: 11px"/>

                      <input type="text" class="txt00 txts7"  v-model="allText[6]" style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px"/>

                      <textarea class="txt00 txts8"  style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[7]"></textarea>
                  </div>

                  <div class="div-3" style="width: 100%; height: 145px; border: 0px solid orange; float: left">
                    <input type="text" class="txt00 txts9"  v-model="allText[8]" style="margin: 11px 0px 0px 5px; width: 360px; font-size: 11px"/>

                    <textarea class="txt00 txts10"  style="margin: 34px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[9]"></textarea>

                    <textarea class="txt00 txts11"  style="margin: 17px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[10]"></textarea>
                  </div>
                </div>

                <div class="gropo-3">
                    <input type="text" class="txt00 txts31"  v-model="allText[30]" style="margin: 30px 0px 0px 5px; width: 340px; font-size: 11px"/>
                    
                    <input type="text" class="txt00 txts32"  v-model="allText[31]" style="margin: 10px 0px 0px 5px; width: 340px; font-size: 11px"/>

                    <input type="text" class="txt00 txts33"  v-model="allText[32]" style="margin: 10px 0px 0px 5px; width: 340px; font-size: 11px"/>

                    <input type="text" class="txt00 txts34"  v-model="allText[33]" style="margin: 10px 0px 0px 5px; width: 190px; font-size: 11px"/>

                    <input type="text" class="txt00 txts35"  v-model="allText[34]" style="margin: 10px 0px 0px 20px; width: 120px; font-size: 11px"/>

                    <input type="text" class="txt00 txts36"  v-model="allText[35]" style="margin: 10px 0px 0px 5px; width: 340px; font-size: 11px"/>

                    <input type="text" class="txt00 txts37"  v-model="allText[36]" style="margin: 9px 0px 0px 5px; width: 340px; font-size: 11px"/>

                    <div style="float: left; height: 50px; width: 200px; border: 0px solid green; margin-top: 0px">
                      <div @click="clickThis(5)" class="chk00 chk6" style="margin: 14px 0px 0px 0px">
                        <img :src="'img/icons/'+allCheck[5].icon+'.jpg'" class="chkIcon">
                      </div>

                      <div @click="clickThis(6)" class="chk00 chk7" style="margin: 14px 0px 0px 52px">
                        <img :src="'img/icons/'+allCheck[6].icon+'.jpg'" class="chkIcon">
                      </div>

                      <div @click="clickThis(7)" class="chk00 chk8" style="margin: 2px 0px 0px 0px; float:left">
                        <img :src="'img/icons/'+allCheck[7].icon+'.jpg'" class="chkIcon">
                      </div>

                      <div @click="clickThis(8)" class="chk00 chk9" style="margin: 2px 0px 0px 52px; float:left">
                        <img :src="'img/icons/'+allCheck[8].icon+'.jpg'" class="chkIcon">
                      </div>

                    </div>
                    <input type="text" class="txt00 txts38"  v-model="allText[37]" style="margin: 9px 0px 0px 18px; width: 130px; font-size: 11px"/>

                </div>

                <div class="gropo-4">
                    <div class="div-1" style="width: 100%; height: 98px; border: 0px solid orange; float: left">
                        <input type="text" class="txt00 txts12"  v-model="allText[11]" style="margin: 10px 0px 0px 5px; width: 160px; font-size: 11px"/>

                        <input type="text" class="txt00 txts13"  v-model="allText[12]" style="margin: 10px 0px 0px 20px; width: 160px; font-size: 11px"/>

                        <input type="text" class="txt00 txts14"  v-model="allText[13]" style="margin: 10px 0px 0px 5px; width: 160px; font-size: 11px"/>

                        <input type="text" class="txt00 txts15"  v-model="allText[14]" style="margin: 10px 0px 0px 20px; width: 160px; font-size: 11px"/>

                        <input type="text" class="txt00 txts16"  v-model="allText[15]" style="margin: 9px 0px 0px 5px; width: 360px; font-size: 11px"/>

                        <input type="text" class="txt00 txts17"  v-model="allText[16]" style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px"/>
                    </div>
                    <div class="div-2" style="width: 100%; height: 95px; border: 0px solid orange; float: left">
                        <input type="text" class="txt00 txts18"  v-model="allText[17]" style="margin: 8px 0px 0px 5px; width: 360px; font-size: 11px"/>

                        <input type="text" class="txt00 txts19"  v-model="allText[18]" style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px"/>

                        <input type="text" class="txt00 txts20"  v-model="allText[19]" style="margin: 34px 0px 0px 5px; width: 360px; font-size: 11px"/>
                    </div>
                    <div class="div-3" style="width: 100%; height: 100px; border: 0px solid orange; float: left">
                        <input type="text" class="txt00 txts21"  v-model="allText[20]" style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px"/>

                        <textarea class="txt00 txts22"  style="margin: 10px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[21]"></textarea>

                        <input type="text" class="txt00 txts23"  v-model="allText[22]" style="margin: 18px 0px 0px 5px; width: 360px; font-size: 11px"/>
                    </div>
                </div>

                <div class="gropo-3">
                  <input type="text" class="txt00 txts39"  v-model="allText[38]" style="margin: 57px 0px 0px 30px; width: 305px; font-size: 11px; text-align:center"/>
                </div>

                <div class="gropo-5">
                  <div class="div-1" style="width: 100%; height: 140px; border: 0px solid orange; float: left">
                    <input type="text" class="txt00 txts24"  v-model="allText[23]" style="margin: 5px 0px 0px 5px; width: 360px; font-size: 11px"/>

                    <textarea class="txt00 txts25"  style="margin: 8px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[24]"></textarea>

                    <textarea class="txt00 txts26"  style="margin: 19px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[25]"></textarea>

                    <input type="text" class="txt00 txts27"  v-model="allText[26]" style="margin: 18px 0px 0px 5px; width: 360px; font-size: 11px"/>
                  </div>
                  <div class="div-2" style="width: 100%; height: 140px; border: 0px solid orange; float: left">
                    <textarea class="txt00 txts28"  style="margin: 7px 0px 0px 5px; width: 360px; font-size: 11px; height: 58px; resize:none" v-model="allText[27]"></textarea>

                    <input type="text" class="txt00 txts29"  v-model="allText[28]" style="margin: 16px 0px 0px 5px; width: 360px; font-size: 11px"/>

                    <textarea class="txt00 txts30"  style="margin: 7px 0px 0px 5px; width: 360px; font-size: 11px; height: 27px; resize:none" v-model="allText[29]"></textarea>

                  </div>
                </div>
                
                    
              </div>
            </div>
          </div>
          
        </div>

  </div>
</template>

<script>  

import axios from 'axios'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import moment from 'moment'


export default {
  name: 'App',
  watch: {
    $route: {
        immediate: true,
        handler(to) {
            document.title = to.meta.title || 'BDO Form';
        }
    },
  },
  data(){
    return{
      allCheck: [
          // 0-check2, 1-uncheck2
          {chk: '0', icon: 'uncheck2'},   // 1
          {chk: '0', icon: 'uncheck2'},   // 2
          {chk: '0', icon: 'uncheck2'},     // 3
          {chk: '0', icon: 's-uncheck2'},   // 4
          {chk: '0', icon: 's-uncheck2'},     // 5
          {chk: '0', icon: 'uncheck2'},   // 6
          {chk: '0', icon: 'uncheck2'},   // 7
          {chk: '0', icon: 'uncheck2'},   // 8
          {chk: '0', icon: 'uncheck2'},   // 9
      ],
       allText: [
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',''
      ],

        margX: 20,
        margY: 20,
        showBtns:true,
        tempMargX: 0,
        tempMargY: 0,
        copyIcon: null,
        isUpdate: false,
        historyName: '',

    }
  },
  methods:{

     logout(){
        localStorage.setItem('LoggedUser', 'false')
        this.$router.push('/');
      },

    printForm(){

      var temp_text = this.allText

      this.allText = [
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',''
      ]

      this.copyIcon = []
      this.copyIcon = this.allCheck

        for (let i = 0; i < this.allCheck.length; i++) {
            if(i == 3 || i == 4){
                if(this.allCheck[i].chk == 0){
                  this.allCheck[i].icon = 'none'
                }else{
                  this.allCheck[i].icon = 's-okay2'
                }
            }else{
                if(this.allCheck[i].chk == 0){
                  this.allCheck[i].icon = 'none'
                }else{
                  this.allCheck[i].icon = 'okay2'
                }
            }
        }

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // 20 = 0
        var marX = this.conToPt(this.margX-20)
        var marY = this.conToPt(this.margY-20)

        var mX = this.conToPt(this.margX-20)
        var mY = this.conToPt(this.margY-20)

        var _this = this

        setTimeout(function(){
            html2canvas(document.querySelector('#pdf')).then(function(canvas) {
              // px -> pt = 1px = 0.75pt
              
              let pdf = new jsPDF('p', 'pt', 'letter');
              // let pdf = new jsPDF('p', 'pt', [555.5, 873.75]);
              // mm -> pt   1->2.83     793.701  595.276

              pdf.addImage(canvas.toDataURL('image/png'), 'PNG', marX, marY, 595.276,  793.701);

              pdf.setFontType("bold");
              pdf.setFontSize(9);
              // pdf.setLineHeightFactor(0.9)

              var splitTitle = pdf.splitTextToSize(temp_text[0], 175);
              pdf.text(mX+400, mY+76, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[1], 255);
              pdf.text(mX+35, mY+109, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[2], 255);
              pdf.text(mX+35, mY+126, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[3], 255);
              pdf.text(mX+35, mY+144, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[4], 150);
              pdf.text(mX+35, mY+163, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[5], 140);
              pdf.text(mX+190, mY+163, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[6], 255);
              pdf.text(mX+35, mY+181, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[7], 255);
              pdf.text(mX+35, mY+200, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[8], 255);
              pdf.text(mX+35, mY+236, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[9], 255);
              pdf.text(mX+35, mY+272, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[10], 255);
              pdf.text(mX+35, mY+308, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[11], 135);
              pdf.text(mX+35, mY+345, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[12], 135);
              pdf.text(mX+175, mY+345, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[13], 135);
              pdf.text(mX+35, mY+363, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[14], 135);
              pdf.text(mX+175, mY+363, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[15], 255);
              pdf.text(mX+35, mY+380, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[16], 255);
              pdf.text(mX+35, mY+398, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[17], 255);
              pdf.text(mX+35, mY+417, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[18], 255);
              pdf.text(mX+35, mY+434, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[19], 255);
              pdf.text(mX+35, mY+470, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[20], 255);
              pdf.text(mX+35, mY+489, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[21], 255);
              pdf.text(mX+35, mY+509, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[22], 255);
              pdf.text(mX+35, mY+543, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[23], 255);
              pdf.text(mX+35, mY+562, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[24], 255);
              pdf.text(mX+35, mY+582, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[25], 255);
              pdf.text(mX+35, mY+618, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[26], 255);
              pdf.text(mX+35, mY+652, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[27], 255);
              pdf.text(mX+35, mY+672, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[28], 255);
              pdf.text(mX+35, mY+726, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[29], 255);
              pdf.text(mX+35, mY+745, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[30], 255);
              pdf.text(mX+325, mY+128, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[31], 255);
              pdf.text(mX+325, mY+146, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[32], 255);
              pdf.text(mX+325, mY+165, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[33], 150);
              pdf.text(mX+325, mY+183, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[34], 118);
              pdf.text(mX+483, mY+183, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[35], 255);
              pdf.text(mX+325, mY+202, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[36], 255);
              pdf.text(mX+325, mY+219, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[37], 115);
              pdf.text(mX+483, mY+237, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[38], 240);
              pdf.text(mX+453, mY+387, splitTitle, 'center');

              splitTitle = pdf.splitTextToSize(temp_text[39], 60);
              pdf.text(mX+420, mY+64, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[40], 90);
              pdf.text(mX+500, mY+64, splitTitle);


              _this.revertIcon()
              _this.allText = temp_text

              //Generate BLOB object
              var blob = pdf.output("blob");
              //Getting URL of blob object
              var blobURL = URL.createObjectURL(blob);
              // pdf.save('sample');

              window.open(blobURL, '_blank');

              // var iframeElementContainer = document.getElementById('display');
              // iframeElementContainer.src=blobURL;
          });

        }, 1000);
    },

    conToPt(val){
      return val*0.75
    },

    clickThis(value){
      if(value == 3 || value == 4){
            if(this.allCheck[value].chk == 0){
              this.allCheck[value].chk = 1
              this.allCheck[value].icon = 's-check2'
            }else{
              this.allCheck[value].chk = 0
              this.allCheck[value].icon = 's-uncheck2'
            }
        }else{
            if(this.allCheck[value].chk == 0){
              this.allCheck[value].chk = 1
              this.allCheck[value].icon = 'check2'
            }else{
              this.allCheck[value].chk = 0
              this.allCheck[value].icon = 'uncheck2'
            }
        }
    },

    savePosition: function(){
      if(confirm('Are you sure you want to save form position?')){
          this.showBtns = true
          this.tempMargX = this.margX
          this.tempMargY = this.margY

          axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
          {
            'data': 'saveposition',
            'bank': 'bdo',
            'coord': this.margX+','+this.margY,
          })
          .then(response => {
            console.log(response.data)
          })
          .catch(error=>{console.log(error.response)})
      }
    },

    revertIcon: function(){
      for (let i = 0; i < this.copyIcon.length; i++) {
          if(i == 3 || i == 4){
              if(this.copyIcon[i].chk == 0){
                this.allCheck[i].icon = 's-uncheck2'
              }else{
                this.allCheck[i].icon = 's-check2'
              }
          }else{
              if(this.copyIcon[i].chk == 0){
                this.allCheck[i].icon = 'uncheck2'
              }else{
                this.allCheck[i].icon = 'check2'
              }
          }
      }
    },

    printCheque(){
        this.$router.push('/chequebdo');
    },

    clearFields(){
      this.allText = [
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',
        '','','','','','','','','','',''
      ]

        this.allCheck = []

        for (let i = 0; i < 28; i++) {
            if(i == 3 || i == 4){
                this.allCheck.push({
                  chk: '0', icon: 's-uncheck2'
                })
            }else{
              this.allCheck.push({
                  chk: '0', icon: 'uncheck2'
                })
            }
        }

        localStorage.setItem('bdoglobalhistoryListId', '')
        localStorage.setItem('bdoglobalhistoryListName', '')
        this.historyName = ''


      },

    saveForm: function(){
          var checks = ''
          var text = ''
      if(this.isUpdate == 'true'){

          for (let i = 0; i < this.allCheck.length; i++) {
              checks = checks + this.allCheck[i].chk + ','
          }

          for (let i = 0; i < this.allText.length; i++) {
              text = text + this.allText[i] + '|`|'
          }

          if(confirm('Are you sure you want to save data changes?')){
              this.showBtns = true
              axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
              {
                'data': 'savedataupdate',
                'bank': 'bdo',
                'checks': checks,
                'text': text,
                'id': localStorage.getItem('bdoglobalhistoryListId'),
                'datet': moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a')
              })
              .then(response => {
                console.log(response.data)
                if(response.data == 'okay na save'){
                  alert('Data successfully saved.')
                  this.isUpdate = 'false'
                  this.clearFields()
                }else{
                  alert(response.data)
                }
              })
              .catch(error=>{console.log(error.response)})
          }
      }else{
          for (let i = 0; i < this.allCheck.length; i++) {
              checks = checks + this.allCheck[i].chk + ','
          }

          for (let i = 0; i < this.allText.length; i++) {
              text = text + this.allText[i] + '|`|'
          }

          if(confirm('Are you sure you want to save this data?')){
              this.showBtns = true
              axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
              {
                'data': 'savedata',
                'bank': 'bdo',
                'checks': checks,
                'text': text,
                'datet': moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a')
              })
              .then(response => {
                console.log(response.data)
                if(response.data == 'okay na save'){
                  alert('Data successfully saved changes.')
                }else{
                  alert(response.data)
                }
              })
              .catch(error=>{console.log(error.response)})
          }
      }
      
    },

    viewHistory: function(){
      localStorage.setItem('bdoglobalAllcheck', this.allCheck)
      localStorage.setItem('bdoglobalAlltext', this.allText)
      localStorage.setItem('bdoglobalhistoryListId', '')
      localStorage.setItem('bdoglobalhistoryListUpdate', 'false')

      this.$router.push('/formHistoryBdo');
    },

    moveUp: function(){
      this.margY--;
      console.log(this.margY);
      this.showBtns = false
    },
    moveDown: function(){
      this.margY++;
      console.log(this.margY);
      this.showBtns = false
    },
    moveLeft: function(){
      this.margX--;
      console.log(this.margX);
      this.showBtns = false
    },
    moveRight: function(){
      this.margX++;
      console.log(this.margX);
      this.showBtns = false
    },
    cancelPosition(){
        this.margX = this.tempMargX
        this.margY = this.tempMargY
        this.showBtns = true
      }
    
      

  },
  mounted() {
     axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
    {'data': 'getcoord', 'bank': 'bdo',})
    .then(response => {
      // |`| => separator trick token
      var splitData = response.data.split('|`|')
      this.margY = splitData[1]
      this.margX = splitData[0]

      this.tempMargY = splitData[1]
      this.tempMargX = splitData[0]

      // this.printForm();

    })
    .catch(error=>{console.log(error.response)})



    this.isUpdate = localStorage.getItem('bdoglobalhistoryListUpdate')

    if(localStorage.getItem('bdoglobalhistoryListId') != ''){

      this.historyName = localStorage.getItem('bdoglobalhistoryListName')

          axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
          {
            'data': 'gethistory',
            'bank': 'bdo',
            'id': localStorage.getItem('bdoglobalhistoryListId')
          })
          .then(response => {
        
            var lists = response.data.split('||.||')

            var historyCheck = lists[0].split(',')
            var historyText = lists[1].split("|`|")

            this.allCheck = []

            for (let i = 0; i < historyCheck.length-1; i++) {

              var ico = '';
              if(i == 3 || i == 4){
                  if(historyCheck[i] == '0'){
                      ico = 's-uncheck2'
                  }else{
                      ico = 's-check2'
                  }
              }else{
                  if(historyCheck[i] == '0'){
                      ico = 'uncheck2'
                  }else{
                      ico = 'check2'
                  }
              }
            
              this.allCheck.push({
                chk: historyCheck[i],
                icon: ico
              })
            } 

            this.allText = []

            for (let i = 0; i < historyText.length-1; i++) {
              this.allText.push(historyText[i])
            }

          })
          .catch(error=>{
            console.log(error)
          })
    
    }else{
        localStorage.setItem('bdoglobalhistoryListName', '')
        this.clearFields()
    }
 }
}
</script>

<style scoped>
  .txt00-hide{
    opacity: 0;
  }

  .txts28{
    line-height: 18px;
  }
  .backBody1{
    transform: scale(1.1);
  }
</style>>

