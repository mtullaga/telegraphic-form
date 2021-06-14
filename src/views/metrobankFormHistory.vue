<template>
  <div id="app" style="margin: 20px">
    <router-link to="/metrobank">
      <button class="btn btn-primary" style="height: 50px; padding-top: 0px">
        <img style="width:40px; height: 20px; margin-top: 0px" src="../assets/img/back.png" />
        <br />Back
      </button>
    </router-link>
    <br />

    <h3>History List</h3>
    <input type="text" v-model="textsearch" /> &nbsp; &nbsp;
    <button @click="searchNow()">
      Search
      <img style="width:15px; height: 15px" src="../assets/img/search.png" />
      <font style="margin-top: -3px"></font>
    </button>

    <font style="margin-left: 40px; ">Limit View:</font>
    <select style="width: 50px" v-model="limitView" @change="changeLimit()">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="75">75</option>
    </select>

    <table style="width: 95%; margin-top: 20px" class="table">
      <thead>
        <tr style="background: #b8affa">
          <th style="width: 350px; padding: 5px">Date And Time</th>
          <th>Name of Beneficiary Bank / Branch & Address</th>
          <th>Payee / Beneficiary Name</th>
          <th style="width: 150px">Actions</th>
        </tr>
      </thead>
      <tbody v-for="list in historyList" v-bind:key="list.idList">
        <tr>
          <td style="padding: 7px 0px 7px 7px; cursor: pointer" @click="openHistory(list.idList, list.dateList)">
            <b>{{list.dateList}}</b>
          </td>
          <td
            style="padding: 7px 0px 7px 7px; cursor: pointer"
            @click="openHistory(list.idList, list.dateList)"
          >{{list.nameBen}}</td>
          <td
            style="padding: 7px 0px 7px 7px; cursor: pointer"
            @click="openHistory(list.idList, list.dateList)"
          >{{list.payeeBen}}</td>
          <td style="padding: 5px 0px 5px 5px">
            <button
              style="background: #5ead93; width: 50px; float: left; margin-left: 10px; height: 25px"
              @click="editHistory(list.idList, list.dateList)"
            >
              <b>Edit</b>
            </button>
            <button
              style="background: #e65a6a; float: right; margin-right: 10px; height: 25px"
              @click="deleteHistory(list.idList)"
            >
              <b>Delete</b>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  watch: {
    // Changing Page Title
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "HISTORY METROBANK";
      },
    },
  },
  data() {
    return {
      historyList: [],
      historyDate: [],
      historyTexts: [],
      historyId: [],
      limitView: "10",
      textsearch: "",
    };
  },
  methods: {
    openHistory(id, name) {
      localStorage.setItem("globalhistoryListId", id);
      localStorage.setItem("globalhistoryListName", name);
      localStorage.setItem("globalhistoryListUpdate", false);
      this.$router.push("/metrobank");
    },

    changeLimit() {
      this.loadList();
    },

    loadList() {
      axios
        .post(""+this.getIpAddressServer+"/telegraphic/index.php", {
          data: "history",
          bank: "metro",
          limit: this.limitView,
        })
        .then((response) => {
          var lists = response.data.split("||.||");

          this.historyId = lists[0].split(",");
          this.historyDate = lists[1].split("|``|");
          this.historyTexts = lists[2].split("|.`.|");

          this.historyList = [];

          for (let i = 0; i < this.historyId.length - 1; i++) {
            var res_text = this.historyTexts[i].split("|`|");

            this.historyList.push({
              idList: this.historyId[i],
              dateList: this.historyDate[i],
              nameBen: res_text[38],
              payeeBen: res_text[41],
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    backForm() {
      this.$router.push("/metrobank");
    },

    editHistory(id, name) {
      localStorage.setItem("globalhistoryListId", id);
      localStorage.setItem("globalhistoryListName", name);
      localStorage.setItem("globalhistoryListUpdate", true);
      this.$router.push("/metrobank");
    },

    deleteHistory(id) {
      if (confirm("Are you sure you want to delete record?")) {
        axios
          .post(""+this.getIpAddressServer+"/telegraphic/index.php", {
            data: "deletehistory",
            bank: "metro",
            id: id,
          })
          .then((response) => {
            if (response.data == "okay na") {
              alert("Record successfully deleted.");
              this.loadList();
            } else {
              console.log("error part");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    searchNow() {
      axios
        .post(""+this.getIpAddressServer+"/telegraphic/index.php", {
          data: "searchhistory",
          bank: "metro",
          limit: this.limitView,
          search: this.textsearch,
        })
        .then((response) => {
          if (response.data == "sorry") {
            alert("Sorry, no record found.");
          } else {
            var lists = response.data.split("||.||");

            this.historyId = lists[0].split(",");
            this.historyDate = lists[1].split("|``|");
            this.historyTexts = lists[2].split("|.`.|");

            this.historyList = [];

            for (let i = 0; i < this.historyId.length - 1; i++) {
              var res_text = this.historyTexts[i].split("|`|");

              this.historyList.push({
                idList: this.historyId[i],
                dateList: this.historyDate[i],
                nameBen: res_text[38],
                payeeBen: res_text[41],
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>
/* @import '../assets/css/bootstrap.min.css'; */

.clickable :hover {
  text-decoration: underline;
}
table,
th,
td {
  border: 1px solid #736668;
  border-collapse: collapse;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>>
