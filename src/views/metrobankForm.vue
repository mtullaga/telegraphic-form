<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <br><br>
      <button @click="logout()" style="float: left; margin-left: 20px; color: blue">&lt; <b>Logout</b></button>

      <div style="margin-left: 10%; border: 0px solid green; width: 816px; float: left; padding-bottom: 5px">
          

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

      <br><br><br>
      <br><br><br>
      <br><br><br>
      <br><br><br>
      
        <div class="backBody" style="margin-left: 17%; border: 1px solid green; width: 816px; height: auto; float: left; margin-bottom: 5px; padding-bottom: 10px">		
          <div class="mainBody" :style="'margin-left: '+margX+'px; margin-top: '+margY+'px'">
            <div style="border: 0px solid green; margin-top: 20px">

              <div class="whole" id="pdf">  <!-- Start Here Printing -->
              <!-- ============================================= GROUP 1 STARTS HERE =========================================== -->
                <div class="group1">
                  <div class="grp1-div1">  

                    <div @click="clickThis(0)" class="chk00 chk1" style="margin: 31px 0px 0px 5px">
                      <img :src="'img/icons/'+allCheck[0].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(1)" class="chk00 chk2" style="margin: 47px 0px 0px -50px">
                      <img :src="'img/icons/'+allCheck[1].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(2)" class="chk00 chk3" style="margin: 18px 0px 0px 154px">
                      <img :src="'img/icons/'+allCheck[2].icon+'.jpg'" class="chkIcon">
                    </div>

                    <input type="text" class="txt00 txt1"  v-model="allText[0]" style="margin: 29px 0px 0px -44px"/>

                    <input type="text" class="txt00 txt3"   v-model="allText[2]" style="margin: 29px 0px 0px 6px"/>

                    <div @click="clickThis(3)" class="chk00 chk4" style="margin: 5px 0px 0px 155px">
                      <img :src="'img/icons/'+allCheck[3].icon+'.jpg'" class="chkIcon">
                    </div>

                    <input type="text" class="txt00 txt2"   v-model="allText[1]" style="margin: 18px 0px 0px -46px"/>

                    <input type="text" class="txt00 txt4"   v-model="allText[3]" style="margin: 18px 0px 0px 0px"/>

                    <input type="text" class="txt00 txt61"  v-model="allText[60]" style="margin: 283px 0px 0px -105px; text-align:center"/>

                    <input type="text" class="txt00 txt62"  v-model="allText[61]" style="margin: 279px 0px 0px -15px; width: 110px"/>

                    <!-- <textarea class="txt00 txt60"  value="60" style="margin: 2px 0px 0px 10px" cols="52" rows="4">
                    </textarea> -->

                    <textarea class="txt00 txt60"  style="margin: 5px 0px 0px 10px; width: 400px; height: 25px; resize:none" v-model="allText[59]"></textarea>

                  </div>

                  <div class="grp1-div2">

                    <div @click="clickThis(4)" class="chk00 chk5" style="margin: 18px 0px 0px -7px">
                      <img :src="'img/icons/'+allCheck[4].icon+'.jpg'" class="chkIcon">
                    </div>

                    <div @click="clickThis(5)" class="chk00 chk6" style="margin: 18px 0px 0px 116px">
                      <img :src="'img/icons/'+allCheck[5].icon+'.jpg'" class="chkIcon">
                    </div>
                    
                    <div style="float: left; width: 300px">
                       <input type="text" class="txt00 txt5" v-model="allText[4]" style="margin: -3px 0px 0px -6px;"/>

                       <input type="text" class="txt00 txt6" v-model="allText[5]" style="margin: -3px 0px 0px 8px;"/>

                       <input type="text" class="txt00 txt7" v-model="allText[6]" style="margin: -3px 0px 0px 67px;"/>

                       <input type="text" class="txt00 txt8" v-model="allText[7]" style="margin: -3px 0px 0px 1px;"/>
                    </div>

                    <textarea class="txt00 txt9" style="margin: 36px 0px 0px 9px; width: 300px; height: 14px; resize:none" v-model="allText[8]"></textarea>

                    <textarea class="txt00 txt10" style="margin: 16px 0px 0px 9px; width: 300px; height: 14px; resize:none" v-model="allText[9]"></textarea>

                    <textarea class="txt00 txt11"  style="margin: 12px 0px 0px 9px; width: 300px; height: 14px; resize:none" v-model="allText[10]"></textarea>

                    <textarea class="txt00 txt12"  style="margin: 19px 0px 0px 9px; width: 300px; height: 30px; resize:none" v-model="allText[11]"></textarea>

                    <textarea class="txt00 txt13"  style="margin: 14px 0px 0px 9px; width: 300px; height: 30px; resize:none" v-model="allText[12]"></textarea>

                    <textarea class="txt00 txt14"  style="margin: 11px 0px 0px 9px; width: 110px; height: 15px; resize:none" v-model="allText[13]"></textarea>

                    <textarea class="txt00 txt15"  style="margin: 11px 0px 0px 9px; width: 175px; height: 15px; resize:none" v-model="allText[14]"></textarea>

                    <textarea class="txt00 txt16"  style="margin: 3px 0px 0px 115px; width: 180px; height: 15px; resize:none" v-model="allText[15]"></textarea>

                    <textarea class="txt00 txt17"  style="margin: 5px 0px 0px 80px; width: 230px; height: 20px; resize:none" v-model="allText[16]"></textarea>

                    <input type="text" class="txt00 txt18 txt18-30" v-model="allText[17]" maxlength="1" style="margin: 3px 0px 0px 82px; height: 20px"/>
                    <input type="text" class="txt00 txt19 txt18-30" v-model="allText[18]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt20 txt18-30" v-model="allText[19]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt21 txt18-30" v-model="allText[20]" maxlength="1" style="margin: 3px 0px 0px 7px; height: 20px"/>
                    <input type="text" class="txt00 txt22 txt18-30" v-model="allText[21]" maxlength="1" style="margin: 3px 0px 0px 5px; height: 20px"/>
                    <input type="text" class="txt00 txt23 txt18-30" v-model="allText[22]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt24 txt18-30" v-model="allText[23]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt25 txt18-30" v-model="allText[24]" maxlength="1" style="margin: 3px 0px 0px 6px; height: 20px"/>
                    <input type="text" class="txt00 txt26 txt18-30" v-model="allText[25]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt27 txt18-30" v-model="allText[26]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt28 txt18-30" v-model="allText[27]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt29 txt18-30" v-model="allText[28]" maxlength="1" style="margin: 3px 0px 0px 0px; height: 20px"/>
                    <input type="text" class="txt00 txt30 txt18-30" v-model="allText[29]" maxlength="1" style="margin: 3px 0px 0px 4px; height: 20px"/>

                  </div>
                </div>

               <!-- ============================================= GROUP 2 STARTS HERE =========================================== -->

                <div class="group2">
                  <div class="grp2-div1">
                    <div style="float:left; width: 400px; border:0px solid green">
                        <div @click="clickThis(6)" class="chk00 chk7" style="margin: 11px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[6].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(7)" class="chk00 chk8" style="margin: 11px 0px 0px 55px">
                          <img :src="'img/icons/'+allCheck[7].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(8)" class="chk00 chk9" style="margin: 11px 0px 0px 45px">
                          <img :src="'img/icons/'+allCheck[8].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(9)" class="chk00 chk10" style="margin: 11px 0px 0px 53px">
                          <img :src="'img/icons/'+allCheck[9].icon+'.jpg'" class="chkIcon">
                        </div>
                    </div>
                    <div style="float:left; width: 400px; border:0px solid green">
                        <div @click="clickThis(10)" class="chk00 chk11" style="margin: 1px 0px 2px 0px">
                          <img :src="'img/icons/'+allCheck[10].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(11)" class="chk00 chk12" style="margin: 1px 0px 2px 150px">
                          <img :src="'img/icons/'+allCheck[11].icon+'.jpg'" class="chkIcon">
                        </div>
                    </div>
                    <div style="float:left; width: 400px; border:0px solid green">
                        <div @click="clickThis(12)" class="chk00 chK13" style="margin: -1px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[12].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(13)" class="chk00 chk14" style="margin: -1px 0px 0px 150px">
                          <img :src="'img/icons/'+allCheck[13].icon+'.jpg'" class="chkIcon">
                        </div>
                    </div>

                    <input type="text" class="txt00 txt56"  v-model="allText[55]" style="margin: 9px 0px 0px 27px; width: 150px"/>

                    <input type="text" class="txt00 txt59"  v-model="allText[58]" style="margin: 8px 0px 0px 52px; width: 150px"/>


                    <div style="float:left; width: 400px; border:0px solid green">
                        <div @click="clickThis(14)" class="chk00 chk15" style="margin: 8px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[14].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(15)" class="chk00 chk16" style="margin: 8px 0px 0px 150px">
                          <img :src="'img/icons/'+allCheck[15].icon+'.jpg'" class="chkIcon">
                        </div>
                    </div>

                    <input type="text" class="txt00 txt55"  v-model="allText[54]" style="margin: 1px 0px 0px 25px; width: 150px"/>

                    <input type="text" class="txt00 txt58"  v-model="allText[57]" style="margin: 1px 0px 0px 50px; width: 150px"/>

                    <input type="text" class="txt00 txt54"  v-model="allText[53]" style="margin: 11px 0px 0px 25px; width: 150px"/>

                    <input type="text" class="txt00 txt57"  v-model="allText[56]" style="margin: 11px 0px 0px 50px; width: 150px"/>

                    <div style="float:left; width: 400px; border:0px solid green">
                        <div @click="clickThis(16)" class="chk00 chk17" style="margin: 30px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[16].icon+'.jpg'" class="chkIcon">
                        </div>

                        <div @click="clickThis(17)" class="chk00 chk18" style="margin: 30px 0px 0px 256px">
                          <img :src="'img/icons/'+allCheck[17].icon+'.jpg'" class="chkIcon">
                        </div>
                    </div>

                    <input type="text" class="txt00 txt53"  v-model="allText[52]" style="margin: 4px 0px 0px 35px; width: 320px"/>

                    <input type="text" class="txt00 txt52"  v-model="allText[51]" style="margin: 15px 0px 0px 104px; width: 250px"/>

                    
                    
                  </div>
                  <div class="grp2-div2">
                      <textarea class="txt00 txt31"  style="margin: 10px 0px 0px 60px; width: 180px; height: 15px; resize:none" v-model="allText[30]"></textarea>
                      
                      <textarea class="txt00 txt32"  style="margin: 8px 0px 0px 20px; width: 290px; height: 21px; padding-top: 5px; resize:none" v-model="allText[31]"></textarea>
                      
                      <textarea class="txt00 txt33"  style="margin: 12px 0px 0px 20px; width: 120px; height: 20px; padding-top: 5px; resize:none" v-model="allText[32]"></textarea>

                      <textarea class="txt00 txt34"  style="margin: 12px 0px 0px 30px; width: 120px; height: 20px; padding-top: 5px; resize:none" v-model="allText[33]"></textarea>

                      <div style="border: 0px solid green; width: 160px; height: 15px; float: left; margin: 12px 0px 0px 6px">
                        <div @click="clickThis(24)" class="chk000 chk25" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[24].icon+'.jpg'" class="chkIcon" style="margin-left: 2px">
                        </div>

                        <div @click="clickThis(26)" class="chk000 chk27" style="margin: 0px 0px 0px 2px">
                          <img :src="'img/icons/'+allCheck[26].icon+'.jpg'" class="chkIcon" style="margin-left: 2px">
                        </div>
                      </div>

                      <div style="border: 0px solid green; width: 190px; height: 15px; float: left; margin: 0px 0px 0px 6px">
                        <div @click="clickThis(25)" class="chk000 chk26" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[25].icon+'.jpg'" class="chkIcon" style="margin-left: 2px">
                        </div>

                        <div @click="clickThis(27)" class="chk000 chk28" style="margin: 0px 0px 0px 2px">
                          <img :src="'img/icons/'+allCheck[27].icon+'.jpg'" class="chkIcon" style="margin-left: 2px">
                        </div>

                        <textarea class="txt00 txt35"  style="margin: -4px 0px 0px 17px; width: 90px; height: 15px; resize:none" v-model="allText[34]"></textarea>
                      </div>

                      <textarea class="txt00 txt36"  style="width: 100px; height: 38px; float: left; margin: -17px 0px 0px 6px; resize:none" v-model="allText[35]"></textarea>

                      <textarea class="txt00 txt37"  style="width: 300px; height: 40px; float: left; margin: 27px 0px 0px 9px; font-size: 11px; resize:none" v-model="allText[36]"></textarea>

                      <textarea class="txt00 txt38"  style="margin: 5px 0px 0px 70px; width: 200px; height: 15px; resize:none" v-model="allText[37]"></textarea>

                  </div>
                </div>

                <div class="group3">
                  <div class="grp3-div1">

                  </div>
                  <div class="grp3-div2">
                      <textarea class="txt00 txt39"  style="width: 300px; height: 40px; float: left; margin: 8px 0px 0px 9px; font-size: 11px; resize:none" v-model="allText[38]"></textarea>

                      <textarea class="txt00 txt40"  style="margin: 0px 0px 0px 70px; width: 200px; height: 15px; resize:none" v-model="allText[39]"></textarea>

                      <textarea class="txt00 txt41"  style="width: 300px; height: 30px; float: left; margin: 10px 0px 0px 9px; font-size: 11px; resize:none" v-model="allText[40]"></textarea>

                      <textarea class="txt00 txt42"  style="margin: 30px 0px 0px 9px; width: 300px; height: 25px; resize:none" v-model="allText[41]"></textarea>

                      <textarea class="txt00 txt43"  style="margin: 15px 0px 0px 9px; width: 300px; height: 25px; resize:none" v-model="allText[42]"></textarea>

                      <textarea class="txt00 txt44"  style="margin: 7px 0px 0px 140px; width: 170px; height: 15px; resize:none" v-model="allText[43]"></textarea>
                  </div>
                </div>

                <div class="group4">
                  <div class="grp4-div1">
                      <textarea class="txt00 txt51"  style="margin: 0px 0px 0px 20px; width: 370px; height: 22px; padding-top: 3px; text-align: center; resize:none" v-model="allText[50]"></textarea>
                      <textarea class="txt00 txt50"  style="margin: 40px 0px 0px 20px; width: 370px; height: 22px; padding-top: 3px; text-align: center; resize:none" v-model="allText[49]"></textarea>
                      <textarea class="txt00 txt49"  style="margin: 150px 0px 0px 20px; width: 370px; height: 22px; padding-top: 3px; text-align: center; resize:none" v-model="allText[48]"></textarea>
                  </div>
                  <div class="grp4-div2">
                    <div style="width:250px; height: 15px; float: left; margin: 10px 0px 0px 4px">
                      <div @click="clickThis(18)" class="chk00 chk19" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[18].icon+'.jpg'" class="chkIcon">
                      </div>
                      <div @click="clickThis(22)" class="chk00 chk23" style="margin: 0px 0px 0px 105px">
                          <img :src="'img/icons/'+allCheck[22].icon+'.jpg'" class="chkIcon">
                      </div>
                    </div>
                    <div style="width:250px; height: 15px; float: left; margin: 0px 0px 0px 4px">
                      <div @click="clickThis(19)" class="chk00 chk20" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[19].icon+'.jpg'" class="chkIcon">
                      </div>
                      <div @click="clickThis(23)" class="chk00 chk24" style="margin: 0px 0px 0px 105px">
                          <img :src="'img/icons/'+allCheck[23].icon+'.jpg'" class="chkIcon">
                      </div>
                    </div>
                    <div style="width:250px; height: 15px; float: left; margin: 0px 0px 0px 4px">
                      <div @click="clickThis(20)" class="chk00 chk21" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[20].icon+'.jpg'" class="chkIcon">
                      </div>
                    </div>
                    <div style="width:300px; height: 15px; float: left; margin: 0px 0px 0px 4px">
                      <div @click="clickThis(21)" class="chk00 chk22" style="margin: 0px 0px 0px 0px">
                          <img :src="'img/icons/'+allCheck[21].icon+'.jpg'" class="chkIcon">
                      </div>
                      <textarea class="txt00 txt45"  style="margin: -2px 0px 0px 5px; width: 240px; height: 25px; font-size: 11px; resize:none" v-model="allText[44]"></textarea>
                    </div>

                    <textarea class="txt00 txt46"  style="margin: 20px 0px 0px 35px; width: 240px; height: 15px; resize:none" v-model="allText[45]"></textarea>

                    <textarea class="txt00 txt47"  style="margin: 10px 0px 0px 10px; width: 300px; height: 30px; resize:none" v-model="allText[46]"></textarea>

                    <textarea class="txt00 txt48"  style="margin: 5px 0px 0px 125px; width: 180px; height: 15px; resize:none" v-model="allText[47]"></textarea>

                    <textarea class="txt00 txt48"  style="margin:68px 0px 0px 10px; width: 300px; height: 15px; resize:none; text-align: center" v-model="allText[62]"></textarea>


                  </div>
                </div>




              </div>
            </div>
          </div>
          
        </div>
        
        <!-- <iframe id="display" style="width:700px; float: left; height:700px; overflow:scroll;"></iframe>
        <a name="chapter4"></a> -->
  </div>
</template>

<script>  

import axios from 'axios'

import jsPDF from 'jspdf'
// import '../assets/font/arial-bold'
import html2canvas from 'html2canvas'
import moment from 'moment'


// import domtoimage from 'dom-to-image';

export default {
  name: 'App',
  watch: {        // Changing Page Title
    $route: {
        immediate: true,
        handler(to) {
            document.title = to.meta.title || 'Metrobank Form';
        }
    },
  },
  data(){
    return{
        allCheck: [
          // 0-check2, 1-uncheck2
          {chk: '1', icon: 'check2'},   // 1
          {chk: '1', icon: 'check2'},   // 1
          {chk: '1', icon: 'check2'},     // 2
          {chk: '1', icon: 'check2'},   // 3
          {chk: '1', icon: 'check2'},     // 4
          {chk: '1', icon: 'check2'},   // 5
          {chk: '1', icon: 'check2'},   // 6
          {chk: '1', icon: 'check2'},   // 7
          {chk: '1', icon: 'check2'},   // 8
          {chk: '1', icon: 'check2'},   // 9
          {chk: '1', icon: 'check2'},   // 11
          {chk: '1', icon: 'check2'},   // 11
          {chk: '1', icon: 'check2'},   // 12
          {chk: '1', icon: 'check2'},   // 13
          {chk: '1', icon: 'check2'},   // 14
          {chk: '1', icon: 'check2'},   // 15
          {chk: '1', icon: 'check2'},   // 16
          {chk: '1', icon: 'check2'},   // 17
          {chk: '1', icon: 'check2'},   // 18
          {chk: '1', icon: 'check2'},   // 19
          {chk: '1', icon: 'check2'},   // 21
          {chk: '1', icon: 'check2'},   // 21
          {chk: '1', icon: 'check2'},   // 22
          {chk: '1', icon: 'check2'},   // 23
          {chk: '1', icon: 's-check2'}, // 24
          {chk: '1', icon: 's-check2'},    // 25
          {chk: '1', icon: 's-check2'},    // 26
          {chk: '1', icon: 's-check2'}, // 27
        ],
        allText: ['1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','8','8','8',
                  '8','8','8','8','8','8','8','8','8','8',
                  '31','32','33','34','35','36','37','38','39','40',
                  '41','42','43','44','45','46','47','48','49','50',
                  '51','52','53','54','55','56','57','58','59','60',
                  '61','62','63'],

        // allText: [],
        imgOutput: null,
        margX: 25,
        margY: 30,
        copyIcon: null,
        showBtns:true,
        xPdf: 0,
        yPdf: 0,
        historyName: '',
        tempMargX: 0,
        tempMargY: 0,
        isUpdate: false,


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
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','',''
        ]
      
        this.copyIcon = []
        this.copyIcon = this.allCheck

        for (let i = 0; i < this.allCheck.length; i++) {
            if(i == 24 || i == 25 || i == 26 || i == 27){
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

        var _this = this

        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // // this.allCheck[0].icon = 'none'
        var marX = this.conToPt(this.margX-20)
        var marY = this.conToPt(this.margY)

        //default value
        // var mX = -4  -> margX = 24
        // var mY = -3  -> margY = 37

        var mX = -4
        var mY = -3

        var contX
        var contY

        if(this.margX > 24){
          contX = this.margX - 24
          mX = mX + this.conToPt(contX)
        }else{
          contX = 24 - this.margX
          mX = mX - this.conToPt(contX)
        }

        if(this.margY > 37){
          contY = this.margY - 37
          mY = mY + this.conToPt(contY)
        }else{
          contY = 37 - this.margY
          mY = mY - this.conToPt(contY)
        }

        console.log(mX + ' ' + mY)

        

        setTimeout(function(){
            html2canvas(document.querySelector('#pdf')).then(function(canvas) {
              // px -> pt = 1px = 0.75pt
              let pdf = new jsPDF('p', 'pt', 'legal');
              // let pdf = new jsPDF('p', 'pt', [555.5, 873.75]);
              pdf.addImage(canvas.toDataURL('image/png'), 'PNG', marX, marY, 576, 890.5);

              pdf.setFontType("bold");
              pdf.setFontSize(9);
              pdf.setLineHeightFactor(0.9)

              var splitTitle = pdf.splitTextToSize(temp_text[0], 35);
              pdf.text(mX+215, mY+71, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[1], 35);
              pdf.text(mX+215, mY+94, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[2], 35);
              pdf.text(mX+252, mY+71, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[3], 35);
              pdf.text(mX+250, mY+94, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[4], 35);
              pdf.text(mX+365, mY+71, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[5], 35);
              pdf.text(mX+405, mY+71, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[6], 35);
              pdf.text(mX+488, mY+71, splitTitle, 'right');

              splitTitle = pdf.splitTextToSize(temp_text[7], 35);
              pdf.text(mX+522, mY+71, splitTitle, 'right');

              pdf.setFontSize(9);
              // pdf.setFont('courier', 'bold')

              splitTitle = pdf.splitTextToSize(temp_text[8], 230);
              pdf.text(mX+345, mY+108, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[9], 230);
              pdf.text(mX+345, mY+132, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[10], 230);
              pdf.text(mX+345, mY+155, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[11], 230);
              pdf.text(mX+345, mY+180, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[12], 230);
              pdf.text(mX+345, mY+216, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[13], 80);
              pdf.text(mX+345, mY+251, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[14], 130);
              pdf.text(mX+435, mY+251, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[15], 140);
              pdf.text(mX+425, mY+267, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[16], 155);
              pdf.text(mX+398, mY+284, splitTitle);

              pdf.setFontSize(11);

              splitTitle = pdf.splitTextToSize(temp_text[17], 6);
              pdf.text(mX+402, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[18], 6);
              pdf.text(mX+414, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[19], 6);
              pdf.text(mX+426, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[20], 6);
              pdf.text(mX+443, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[21], 6);
              pdf.text(mX+459, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[22], 6);
              pdf.text(mX+471, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[23], 6);
              pdf.text(mX+483, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[24], 6);
              pdf.text(mX+500, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[25], 6);
              pdf.text(mX+512, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[26], 6);
              pdf.text(mX+524, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[27], 6);
              pdf.text(mX+536, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[28], 6);
              pdf.text(mX+548, mY+286, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[29], 6);
              pdf.text(mX+563, mY+286, splitTitle);

              // pdf.setFontSize();

              splitTitle = pdf.splitTextToSize(temp_text[30], 170);
              pdf.text(mX+385, mY+336, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[31], 210);
              pdf.text(mX+353, mY+359, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[32], 100);
              pdf.text(mX+353, mY+386, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[33], 100);
              pdf.text(mX+465, mY+386, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[34], 80);
              pdf.text(mX+403, mY+420, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[35], 70);
              pdf.text(mX+490, mY+410, splitTitle);

              pdf.setFontSize(9);

              splitTitle = pdf.splitTextToSize(temp_text[36], 230);
              pdf.text(mX+345, mY+462, splitTitle);

              pdf.setFontSize(10);

              splitTitle = pdf.splitTextToSize(temp_text[37], 180);
              pdf.text(mX+390, mY+495, splitTitle);

              pdf.setFontSize(9);

              splitTitle = pdf.splitTextToSize(temp_text[38], 225);
              pdf.text(mX+345, mY+518, splitTitle);

              pdf.setFontSize(10);

              splitTitle = pdf.splitTextToSize(temp_text[39], 180);
              pdf.text(mX+390, mY+548, splitTitle);

              pdf.setFontSize(9);

              splitTitle = pdf.splitTextToSize(temp_text[40], 225);
              pdf.text(mX+345, mY+573, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[41], 225);
              pdf.text(mX+345, mY+615, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[42], 225);
              pdf.text(mX+345, mY+648, splitTitle);

              pdf.setFontSize(10);

              splitTitle = pdf.splitTextToSize(temp_text[43], 130);
              pdf.text(mX+444, mY+674, splitTitle);

              pdf.setFontSize(9);

              splitTitle = pdf.splitTextToSize(temp_text[44], 192);
              pdf.text(mX+384, mY+737, splitTitle);

              pdf.setFontSize(10);

              splitTitle = pdf.splitTextToSize(temp_text[45], 200);
              pdf.text(mX+363, mY+761, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[46], 225);
              pdf.text(mX+345, mY+785, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[47], 120);
              pdf.text(mX+432, mY+810, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[48], 250);
              pdf.text(mX+175, mY+870, splitTitle, "center");

              splitTitle = pdf.splitTextToSize(temp_text[49], 250);
              pdf.text(mX+175, mY+742, splitTitle, "center");

              splitTitle = pdf.splitTextToSize(temp_text[50], 250);
              pdf.text(mX+175, mY+697, splitTitle, "center");

              splitTitle = pdf.splitTextToSize(temp_text[51], 190);
              pdf.text(mX+100, mY+489, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[52], 190);
              pdf.text(mX+50, mY+466, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[53], 110);
              pdf.text(mX+42, mY+422, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[54], 110);
              pdf.text(mX+42, mY+404, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[55], 110);
              pdf.text(mX+42, mY+376, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[56], 110);
              pdf.text(mX+195, mY+422, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[57], 110);
              pdf.text(mX+195, mY+404, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[58], 110);
              pdf.text(mX+195, mY+376, splitTitle);

              pdf.setFontSize(9);

              splitTitle = pdf.splitTextToSize(temp_text[59], 290);
              pdf.text(mX+30, mY+300, splitTitle);

              pdf.setFontSize(10);

              splitTitle = pdf.splitTextToSize(temp_text[60], 25);
              pdf.text(mX+188, mY+288, splitTitle, "center");

              // splitTitle = pdf.splitTextToSize(temp_text[61], 110);
              splitTitle = pdf.splitTextToSize(temp_text[61], 110);
              pdf.text(mX+239, mY+285, splitTitle);

              splitTitle = pdf.splitTextToSize(temp_text[62], 225);
              pdf.text(mX+455, mY+874, splitTitle, "center");


              // pdf.rect(345, 98, 240, 10)

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
                  'bank': 'metro',
                  'checks': checks,
                  'text': text,
                  'id': localStorage.getItem('globalhistoryListId'),
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
                  'bank': 'metro',
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

      revertIcon: function(){
        for (let i = 0; i < this.copyIcon.length; i++) {
            if(i == 24 || i == 25 || i == 26 || i == 27){
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
      
      clickThis: function(value){

        if(value == 24 || value == 25 || value == 26 || value == 27){
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
         
          // console.log(this.allCheck)
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

      viewHistory: function(){
        localStorage.setItem('globalAllcheck', this.allCheck)
        localStorage.setItem('globalAlltext', this.allText)
        localStorage.setItem('globalhistoryListId', '')
        localStorage.setItem('globalhistoryListUpdate', 'false')

        this.$router.push('/formHistoryMetro');
      },

      changeTxt: function(val1, val2){
        this.allText[val2] = val1.target.innerHTML
      },

      savePosition: function(){
        if(confirm('Are you sure you want to save form position?')){
            this.showBtns = true
            this.tempMargX = this.margX
            this.tempMargY = this.margY

            axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
            {
              'data': 'saveposition',
              'bank': 'metro',
              'coord': this.margX+','+this.margY,
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error=>{console.log(error.response)})
        }
      },

      clearFields(){
        this.allText = [
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','','','','','','','','','',
          '','',''
        ]
        this.allCheck = []

        for (let i = 0; i < 28; i++) {
            if(i == 24 || i == 25 || i == 26 || i == 27){
                this.allCheck.push({
                  chk: '0', icon: 's-uncheck2'
                })
            }else{
              this.allCheck.push({
                  chk: '0', icon: 'uncheck2'
                })
            }
        }

        localStorage.setItem('globalhistoryListId', '')
        localStorage.setItem('globalhistoryListName', '')
        this.historyName = ''


      },

      conToPt(val){
        return val*0.73
      },

      printCheque(){
        this.$router.push('/cheque');
      },

      cancelPosition(){
        this.margX = this.tempMargX
        this.margY = this.tempMargY
        this.showBtns = true
      }

  },
  mounted() {

    axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
    {'data': 'getcoord', 'bank': 'metro',})
    .then(response => {
      // |`| => separator trick token
      var splitData = response.data.split('|`|')
      this.margY = splitData[1]
      this.margX = splitData[0]

      this.tempMargY = splitData[1]
      this.tempMargX = splitData[0]

      // this.printForm()

    })
    .catch(error=>{console.log(error.response)})

    this.isUpdate = localStorage.getItem('globalhistoryListUpdate')

    if(localStorage.getItem('globalhistoryListId') != ''){

      this.historyName = localStorage.getItem('globalhistoryListName')

          axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
          {
            'data': 'gethistory',
            'bank': 'metro',
            'id': localStorage.getItem('globalhistoryListId')
          })
          .then(response => {
        
            var lists = response.data.split('||.||')

            var historyCheck = lists[0].split(',')
            var historyText = lists[1].split("|`|")

            this.allCheck = []

            for (let i = 0; i < historyCheck.length-1; i++) {

              var ico = '';
              if(i == 24 || i == 25 || i == 26 || i == 27){
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
        localStorage.setItem('globalhistoryListName', '')
        this.clearFields()
    }

    
 
 }
}
</script>

<style scoped>
  .txt00-hide{
    opacity: 0;
  }

  .backBody{
    transform: scale(1.1);
  }
</style>>

