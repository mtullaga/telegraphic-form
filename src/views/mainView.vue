<template>
  <div id="app">

    <!-- Login PIN Modal -->
       <!-- The Modal -->
          <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
              <div class="modal-header">
             
                <h2>Enter PIN</h2>
              </div>
              <div class="modal-body" style="padding: 15px 20px 15px 20px">
                <input ref="pincode" v-model="pincode" style="width:98%; font-size: 30px; text-align: center" type="password">

                <br>
                <br>
                
                <center>
                  <button class="logbutton" @click="logClick()">Login</button>
                </center>
              </div>
              
            </div>

          </div>


      
      <div style="margin-top: 100px; width: 35%; border: 0px solid green; margin-left: 30%; float: left" >

        <center><h3>Select which Telegraphic Form you want to print.</h3></center>
        <br><br>

        <div @click="clickThis1()" class="slt" style="float: left; border: 2px solid #7a9ae6; border-radius: 10px">
            <img src="../assets/img/metrobank.png" width="200" height="200" style=" border-radius: 15px">
        </div>
        <div @click="clickThis2()" class="slt" style="float: right; border: 2px solid #7a9ae6; border-radius: 10px; height: 200px">
            <img src="../assets/img/bdo.jpg" width="200" height="150" style=" border-radius: 15px; margin-top: 30px">
        </div>
      </div>

  </div>
</template>

<script>  

// import "@/assets/css/bootstrap.min.css";

import axios from 'axios'


export default {
  name: 'App',
  watch: {            // Changing Page Title
    $route: {
        immediate: true,
        handler(to) {
            document.title = to.meta.title || 'TELEGRAPHIC';
        }
    },
  },
  data(){
    return{
     
     pincode: ''

    }
  },
  methods:{
      clickThis1(){
         this.$router.push('/metrobank')
      },
      clickThis2(){
         this.$router.push('/bdo')
      },

      logClick(){
        var modal = document.getElementById("myModal");

            axios.post(""+this.getIpAddressServer+"/telegraphic/index.php",
                {
                  'data': 'login',
                  'pin': this.pincode,
                })
                .then(response => {
                  console.log(response.data)
                  if(response.data == 'okay'){
                   modal.style.display = "none";
                   localStorage.setItem('LoggedUser','true')
                  }else{
                    alert('Sorry, wrong pin.')
                  }
                })
                .catch(error=>{console.log(error.response)})
      }

  },
  mounted() {

    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    this.$refs.pincode.focus()

 }
}
</script>

<style scoped>

    .slt:hover{
       transform: scale(1.1);
       transition: transform .5s ease;
    }
    .slt{
        cursor: pointer;
    }


.logbutton {
  background-color: #008CBA; /* Blue */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}



    /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

</style>>

