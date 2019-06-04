class Path{
    constructor(id, name, coordinates, color, lenght, time){
        this.id = id
        this.name = name
        this.time = time
        this.lenght = lenght
        this.coordinates = coordinates
        this.color = color
        this.polyline = null
    }
    
    minorInfoWindowContent(){
        var container = document.createElement('div');
        container.innerHTML = `
            ${ this.time ?`
                time:<b>${Math.floor(this.time/60)}h ${time%60}m</b>` : ``
            }
            ${ this.lenght ?`
                <br>
                lenght:<b>${this.lenght}km</b>` : ``
            }
        `
        return container
    }
}

//function Path(id, name, coordinates, color, lenght, time){
//    this.id = id
//    this.name = name
//    this.time = time
//    this.lenght = lenght
//    this.coordinates = coordinates
//    this.polyline
//    this.color = color
//    this.content = "time: <b>" + Math.floor(this.time/60) + "h" + time%60 +"m</b>"
//        
//    if(this.lenght){
//        this.content += "<br>lenght: <b>" + this.lenght + "km</b>"
//    }
//
//}