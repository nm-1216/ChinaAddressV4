var chinaAddressV4={
	id1:'',
	id2:'',
	id3:'',
	v1:'',
	v2:'',
	v3:'',

	init : function(_id1,_id2,_id3,v) {
		this.id1=_id1;
		this.id2=_id2;
		this.id3=_id3;

		v=''+v
		if(v.length!=6){
			this.empty();
		} else {
			this.v3=v;
			this.v1=parseInt(this.v3/10000)*10000
			this.v2=parseInt(this.v3/100)*100
			this.init1();
			this.init2();
			this.init3();
		}

		$(id1).on('change',this.change1)
		$(id2).on('change',this.change2)
	},
	init1:function(){
		$.each(china_address_v4[86],function(index,value,array){
			$(id1).append("<option value='"+index+"'>"+value+"</option>")
		})
		$(id1).val(this.v1)
		$(id1).prepend("<option value=''>==请选择==</option>")
	},
	init2:function(){
		$.each(china_address_v4[this.v1],function(index,value,array){
			$(id2).append("<option value='"+index+"'>"+value+"</option>")
		})
		$(id2).val(this.v2)
		$(id2).prepend("<option value=''>==请选择==</option>")
	},
	init3:function(){
		$.each(china_address_v4[this.v2],function(index,value,array){
			$(id3).append("<option value='"+index+"'>"+value+"</option>")
		})
		$(id3).val(this.v3)
		$(id3).prepend("<option value=''>==请选择==</option>")
	},
	change1:function(){
		var t1=$(this).val()
		console.log('change1-t1',t1)

		$(id2).html('')
		$(id3).html('')
		if(t1!=''){
			$.each(china_address_v4[t1],function(index,value,array){
				$(id2).append("<option value='"+index+"'>"+value+"</option>")
			})
		}

		$(id2).prepend("<option value='' selected>==请选择==</option>")
		$(id3).prepend("<option value='' selected>==请选择==</option>")
	},
	change2:function(){
		var t1=$(this).val()
		console.log('change1-t2',t1)

		$(id3).html('')
		if(t1!=''){
			$.each(china_address_v4[t1],function(index,value,array){
				$(id3).append("<option value='"+index+"'>"+value+"</option>")
			})
		}

		$(id3).prepend("<option value='' selected>==请选择==</option>")
	},
	empty:function(){
		$.each(china_address_v4[86],function(index,value,array){
			$(id1).append("<option value='"+index+"'>"+value+"</option>")
		})

		$(id1).prepend("<option value='' selected>==请选择==</option>")
		$(id2).prepend("<option value='' selected>==请选择==</option>")
		$(id3).prepend("<option value='' selected>==请选择==</option>")
	}
};