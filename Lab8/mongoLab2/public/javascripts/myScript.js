/**
 * Created by Rabin Shrestha on 7/5/2017.
 */
/*
*
* */
$(function () {
    $(".editBtn").click(function () {
        const data = this.getAttribute('name');
        const locationInfo=JSON.parse(data);

        //alert(locationInfo);
        console.log(locationInfo);
        $('#upLocId').val(locationInfo._id)
        $('#upName').val(locationInfo.name)
        $('#upType').val(locationInfo.category)
        $('#updateLat').val(locationInfo.lat)
        $('#updateLong').val(locationInfo.long)});

});