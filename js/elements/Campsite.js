class Campsite extends BasicMapElement {
    constructor(id,name,coordinates,approved=false,description=null,images=null,score=null,reviews=null){
        super(id,name,coordinates,approved,description,images,score,reviews);
        this.marker = null
    }

    isValid(){
        return super.isValid()
    }
    toJson(){
        return super.toJson()
    }
    static fromJson(data){
        let campsite = new Campsite(
            data['id'],
            data['name'],
            {lat: data['latitude'], lng: data['longitude']},
            data['approved'],
            data['description'],
            data['images'],
            data['score'],
            data['reviews'],)  
        return campsite
    }
    toFormData(){
        return super.toFormData()
    }
}
//