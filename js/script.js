var app = new Vue({
 el: '#root',
 data:{
   input: '',
   toDoList:[],
 },
 methods:{
   pushList: function() {
     if (this.input === '') {
       alert('Inserisci un testo')
     }else {
       this.toDoList.push(this.input);
     }
     
     this.input = '';
   },
   deleteFromList: function(externalIndex) {
     // ecmas6 -----------------------------------------------------------------
     this.toDoList = this.toDoList.filter((element, index, array) => {
       return index !== externalIndex
     });

     // ecmas5 -----------------------------------------------------------------

     /*
     var newList=[];

     for (var i = 0; i < this.toDoList.length; i++) {
       if (i !== externalIndex) {
         newList.push(this.toDoList[i]);
       }
     }
     this.toDoList = newList;
     */
   }
 }
});

Vue.config.devtools = true;
