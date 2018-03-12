//生成模型
		function City3D(base){
			this.base=base;
			this.max=50;
		}
		City3D.prototype.buildArea=function(parent){
			//div，地皮
			this.city=document.createElement("div");
			this.city.id="City3D";
			var b=this.base*this.max+"px";
			this.city.style.width=this.city.style.height=b;
			parent.appendChild(this.city);
		}
		//规律
		/*City3D.prototype.STYLES["a","b","c","d","e"];
		City3D.prototype.getStyle=function(){
			return this.STYLES[(Math.random()*100<<2)%5];
		}*/

		City3D.prototype.buildEstate=function(top,left){
			//楼
			var estate=document.createElement("div");
			estate.className="a";
			estate.style.height=this.getSize()+"px";
			estate.style.top=top+"px";
			estate.style.left=left+"px";
			this.city.appendChild(estate);
			var l=this.getWidth();
			var w=this.getWidth();
			//墙
			var b1=document.createElement("b");
			b1.style.width=l+"px";
			estate.appendChild(b1);
			var b2=document.createElement("b");
			b2.style.width=w+"px";
			b1.appendChild(b2);
			var b3=document.createElement("b");
			b3.style.width=l+"px";
			b2.appendChild(b3);
			var b4=document.createElement("b");
			b4.style.width=w+"px";
			b3.appendChild(b4);
			var b5=document.createElement("i");
			b5.style.width=w+"px";
			b5.style.height=l+"px";
			b4.appendChild(b5);

		}
		//随机楼的高度20~150
		City3D.prototype.getSize=function(){
			return (Math.random()*1000<<2)%130+20;
		}
		//随机楼的宽度20~40
		City3D.prototype.getWidth=function(){
			return (Math.random()*1000<<2)%20+20;
		}
		City3D.prototype.build=function(parent){
			this.buildArea(parent);
			for(var i=0;i<this.base;i++){
				for(var j=0;j<this.base;j++){
					this.buildEstate(i*this.max+10,j*this.max+10);
				}
			}
		}
		
		new City3D(8).build(document.body);