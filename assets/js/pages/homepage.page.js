parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    name : '',
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    if(this.nameDama){
      this.name = this.nameDama;
    }
    
  },
  mounted: async function(){
   
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    acepta: async function(){
      console.log("Acepta");
      await axios.post('/api/v1/email/send', {
          emailTo: 'rodrigog_a@hotmail.com',
          nameDama: this.name,
          tipoRespuesta: 'acepta'
        })
        .then(function (response) {
          console.log(response);
          if(response.data.status == 'success'){
            alert(response.data.msg);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },

    rechaza: async function(){
      console.log("Rechaza");
        await axios.post('/api/v1/email/send', {
          emailTo: 'rodrigog_a@hotmail.com',
          nameDama: this.name,
          tipoRespuesta: 'rechaza'
        })
        .then(function (response) {
          console.log(response);
          if(response.data.status == 'success'){
            alert(response.data.msg);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }

  }
});
