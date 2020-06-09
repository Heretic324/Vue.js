var app = new Vue({
    el:"#player",
    data:{
        query:"",
        musicList:[]
    },
    methods:{
        SearchMusic:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
            .then(function(response){
                //console.log(response);
                that.musicList = response.data.result.songs;
            },function(err){})
        }
    },
    
})